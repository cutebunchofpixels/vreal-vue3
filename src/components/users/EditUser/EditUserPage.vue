<script lang="ts">
import EditUserCard from './EditUserCard.vue';

export default {
  components: {
    EditUserCard
  },

  methods: {
    handleSubmit() {
      this.$router.push('/users')
    }
  },

  computed: {
    currentRoute() {
      return this.$router.currentRoute.value
    },

    userId() {
      return Number(this.currentRoute.params.id)
    }
  },

}
</script>

<template>
  <div class="edit-user-wrapper" v-focus-first>
    <h1>{{ $t('editUser') }}</h1>
    <EditUserCard :userId="userId" @submit="handleSubmit" />
  </div>
</template>

<style lang="scss" scoped>
.edit-user-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
}
</style>