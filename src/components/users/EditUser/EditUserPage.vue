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

    userId(): number {
      return Number(this.currentRoute.params.id)
    }
  },

}
</script>

<template>
  <div class="edit-user-wrapper">
    <h1>Edit user</h1>
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