<script lang="ts">
import { Gender } from '@/types/models/Users/Gender';
import { Status } from '@/types/models/Users/Status';
import { getEnumOptions } from '@/utils/getEnumOptions';

export default {
    data() {
        return {
            name: '',
            email: '',
            gender: '',
            status: '',
        }
    },

    computed: {
        genderOptions() {
            return getEnumOptions<Gender>(Gender, (label) => this.$t(label))
        },

        statusOptions() {
            return getEnumOptions<Status>(Status, (label) => this.$t(label))
        }
    },

    props: {
        userId: Number
    },

    watch: {
        userId: {
            handler(next, prev) {
                if (next) {
                    this.name = String(Math.random())
                }
            },
            immediate: true
        }
    }
}
</script>

<template>
    <VForm>
        <VTextField variant="outlined" v-model="name" label="Name" />
        <VTextField variant="outlined" v-model="email" label="Email" type="email" />
        <VSelect variant="outlined" v-model="gender" :items="genderOptions" label="Gender" item-title="label"
            item-value="value" />
        <VSelect variant="outlined" v-model="status" :items="statusOptions" label="Status" item-title="label"
            item-value="value" />
        <div class="submit-button-wrapper">
            <VBtn type="submit" class="submit-button">
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