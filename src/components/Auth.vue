<template>
  <div class="auth" id="auth">
    <form @submit.prevent="login" class="auth__form" action="#">
      <my-input
        @validity-change="validityChange($event.index, $event.isValid)"
        :index="0"
        class="auth__input"
        name="Email"
        type="email"
      ></my-input>
      <my-input
        @validity-change="validityChange($event.index, $event.isValid)"
        :index="1"
        class="auth__input"
        name="Password"
        type="password"
      ></my-input>
      <button class="auth__btn" type="submit">Log in</button>
      <div
        :class="{'auth__message--visable': message}"
        class="auth__message"
      >Complete the fields correctly !</div>
    </form>
  </div>
</template>

<script>
import myInput from "./myInput";
export default {
  components: {
    myInput
  },
  data() {
    return {
      inputsValidity: [false, false],
      valid: "",
      message: false
    };
  },
  computed: {},
  methods: {
    login() {
      const sum = this.inputsValidity.reduce(
        (sum, current) => sum + current,
        0
      );
      if (sum == this.inputsValidity.length) {
        window.location.hash = "/account";
      } else {
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 2000);
      }
    },
    validityChange(index, isValid) {
      this.inputsValidity[index] = isValid;
    }
  },
  watch: {},
  created() {}
};
</script>

<style lang="scss">
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
  &__input {
    margin: 15px;
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
