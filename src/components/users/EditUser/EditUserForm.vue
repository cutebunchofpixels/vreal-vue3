<script setup lang="ts">
import { isEqual } from 'lodash';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { computed, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { AxiosError } from 'axios';

import { UserService } from '@/api/users/UsersService';
import { Gender } from '@/types/models/Users/Gender';
import { Status } from '@/types/models/Users/Status';
import { getEnumOptions } from '@/utils/getEnumOptions';
import type { GorestUser } from '@/types/models/Users/GorestUser';
import { useUsersStore } from '@/store/users';



export type EditUserFormValues = Omit<GorestUser, "id">

interface EditUserFormProps {
    userId?: number
}

interface EditUserFormEmits {
    (e: 'update:loading', isLoading: boolean): void,
    (e: 'submit'): void,
}

const props = defineProps<EditUserFormProps>()
const emit = defineEmits<EditUserFormEmits>()

const { t } = useI18n()
const usersStore = useUsersStore()
const toast = useToast()
const router = useRouter()

const defaulFormValues = {
    name: '',
    email: '',
    gender: Gender.Male,
    status: Status.Active
}

const user = ref<EditUserFormValues>(defaulFormValues)
const initialUser = ref<EditUserFormValues>(defaulFormValues)
const isSubmitDisabled = computed(() => isEqual(user.value, initialUser.value))
const genderOptions = getEnumOptions<Gender>(Gender, (label) => t(label))
const statusOptions = getEnumOptions<Gender>(Gender, (label) => t(label))

async function handleSubmit() {
    if (!props.userId) {
        return
    }

    emit('update:loading', true)

    try {
        await UserService.update(props.userId, user.value)
        await usersStore.fetchUsers()
        emit("submit")
    } catch (error) {
        toast.error(t("unexpectedError", { cause: "while updating user" }))
    } finally {
        emit('update:loading', false)
    }
}

watchEffect(async () => {
    if (props.userId) {
        emit('update:loading', true)

        try {
            const fetchedUser = await UserService.getById(props.userId)
            initialUser.value = { ...fetchedUser }
            user.value = fetchedUser
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 404) {
                    router.replace({ name: "notFound" })
                }
            } else {
                toast.error(t("unexpectedError", { cause: "while fetching user" }))
            }
        } finally {
            emit('update:loading', false)
        }
    }
})

</script>

<template>
    <VForm @submit="handleSubmit" @submit.prevent>
        <VTextField variant="outlined" v-model="user.name" :label="$t('name')" />
        <VTextField variant="outlined" v-model="user.email" :label="$t('email')" type="email" />
        <VSelect variant="outlined" v-model="user.gender" :items="genderOptions" :label="$t('gender')"
            item-title="label" item-value="value" aria-label="Select gender" />
        <VSelect variant="outlined" v-model="user.status" :items="statusOptions" :label="$t('status')"
            item-title="label" item-value="value" aria-label="Select status" />
        <div class="submit-button-wrapper">
            <VBtn type="submit" class="submit-button" :disabled="isSubmitDisabled">
                {{ $t('submit') }}
            </VBtn>
        </div>
    </VForm>
</template>

<style lang="scss" scoped>
.submit-button-wrapper {
    display: flex;
}

.submit-button {
    margin-inline-start: auto;
}
</style>