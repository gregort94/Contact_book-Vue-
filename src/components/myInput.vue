<template>
  <div class="myInput__fieldset">
    <label :for="name" class="myInput__label">{{name}}</label>
    <input
      required
      :id="name"
      :class="{'myInput__input--invalid': invalid}"
      :placeholder="placeholder"
      :type="type"
      class="myInput__input"
      v-model="value"
      @invalid="invalid=true"
      @input="invalid=false"
    />
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "simple"
    }
  },
  data() {
    return {
      value: "",
      placeholders: {
        password: "Enter your password",
        email: "Enter your email"
      },
      invalid: false
    };
  },
  computed: {
    placeholder() {
      return this.placeholders[this.type];
    }
  },
  watch: {
    isValid() {
      this.$emit("validity-change", {
        isValid: this.isValid,
        index: this.index
      });
    }
  }
};
</script>

<style scoped lang="scss">
.myInput {
  &__fieldset {
    display: flex;
  }

  &__label {
    flex: 0 0 30%;
    font-weight: 800;
  }
  &__input {
    flex: 1 0 0;
    &::placeholder {
      font-size: 15px;
    }
    &--invalid {
      border: 2px solid red;
      border-radius: 3px;
    }
    &--invalid:focus {
      border: 2px solid red;
      outline: 2px solid red;
      border-radius: 3px;
    }
  }
}
</style>