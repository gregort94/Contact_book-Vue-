<template>
  <section class="finder">
    <input v-model="value" type="text" class="finder__input" />
    <p class="finder__message finder__message--hidden">Nothing find</p>
  </section>
</template>

<script>
export default {
  props: {
    users: Array
  },
  data() {
    return {
      value: "",
      dubouceId: ""
    };
  },
  methods: {},
  watch: {
    value() {
      if (this.dubouceId) {
        clearTimeout(this.dubouceId);
      }
      this.dubouceId = setTimeout(() => {
        const filteredUsers = this.users.filter(user => {
          const value = this.value.toLowerCase();
          return user.name.toLowerCase().indexOf(value) + 1;
        });
        this.$emit("filtered", filteredUsers);
      }, 500);
    }
  }
};
</script>

<style lang="scss">
</style>
