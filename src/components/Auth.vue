<template>
  <div class="auth" id="auth">
    <form id="authForm" ref="authForm" @submit.prevent="authRequest" class="auth__form" action="#">
      <div class="auth__fieldset">
        <label for="name" class="auth__label">Name</label>
        <input v-model="name" id="name" name="name" class="auth__input" />
      </div>
      <div class="auth__fieldset">
        <label for class="auth__label">Password</label>
        <input v-model="password" name="password" id="password" class="auth__input" />
      </div>
      <button class="auth__btn" type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    authRequest() {
      const formData = { name: this.name, password: this.password };
      this.$store.dispatch("getData", formData);
    }
  }
};
</script>

<style scoped lang="scss">
.auth {
  min-height: 100vh;
  padding: 300px 0px 0px 0px;
  &__form {
    max-width: 500px;
    border: 1px solid #000;
    position: relative;
    padding: 0 0 45px 0;
    margin: 0 auto;
  }
  &__fieldset {
    display: flex;
    margin: 15px;
  }
  &__label {
    flex: 0 0 30%;
    font-weight: bold;
  }
  &__input {
    flex: 1 0 0;
  }
  &__btn {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
  &__message {
    transition: all 0.3s ease-in 0s;
    opacity: 0;
    color: rgb(207, 47, 47);
    position: absolute;
    bottom: 15px;
    left: 100px;
    font-size: 20px;
    &--visable {
      opacity: 1;
    }
  }
}
</style>
