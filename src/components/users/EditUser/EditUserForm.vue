<script lang="ts">
import { isEqual } from 'lodash';

import { UserService } from '@/api/users/UsersService';
import { Gender } from '@/types/models/Users/Gender';
import { Status } from '@/types/models/Users/Status';
import { getEnumOptions } from '@/utils/getEnumOptions';
import type { GorestUser } from '@/types/models/Users/GorestUser';


export type EditUserFormValues = Omit<GorestUser, "id">

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                gender: Gender.Male,
                status: Status.Active
            } as EditUserFormValues,
            initialUser: {} as EditUserFormValues,
            isSubmitDisabled: true,
        }
    },

    computed: {
        genderOptions() {
            return getEnumOptions<Gender>(Gender, (label) => this.$t(label))
        },

        statusOptions() {
            return getEnumOptions<Status>(Status, (label) => this.$t(label))
        },
    },

    props: {
        userId: Number
    },

    emits: {
        'update:loading': (isLoading: boolean) => true,
        submit: () => true
    },

    methods: {
        async handleSubmit() {
            if (!this.userId) {
                return
            }

            this.$emit('update:loading', true)

            try {
                await UserService.update(this.userId, this.user)
                this.$emit("submit")
            } catch (error) {
                this.$toast.error(this.$t("unexpectedError", { cause: "while updating user" }))
            } finally {
                this.$emit('update:loading', false)
            }
        }
    },

    watch: {
        userId: {
            async handler(next) {
                if (next) {
                    this.$emit('update:loading', true)

                    try {
                        const user = await UserService.getById(next)
                        this.initialUser = { ...user }
                        this.user = user
                    } catch (error) {
                        this.$toast.error(this.$t("unexpectedError", { cause: "while fetching user" }))
                    } finally {
                        this.$emit('update:loading', false)
                    }
                }
            },
            immediate: true
        },
        user: {
            handler(next) {
                this.isSubmitDisabled = isEqual(next, this.initialUser)
            },
            deep: true
        }
    }
}
</script>

<template>
    <VForm @submit="handleSubmit" @submit.prevent>
        <VTextField variant="outlined" v-model="user.name" label="Name" />
        <VTextField variant="outlined" v-model="user.email" label="Email" type="email" />
        <VSelect variant="outlined" v-model="user.gender" :items="genderOptions" label="Gender" item-title="label"
            item-value="value" />
        <VSelect variant="outlined" v-model="user.status" :items="statusOptions" label="Status" item-title="label"
            item-value="value" />
        <div class="submit-button-wrapper">
            <VBtn type="submit" class="submit-button" :disabled="isSubmitDisabled">
                Submit
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