<template>
  <div class="myInput__fieldset">
    <label class="myInput__label">
      {{name}}
      <i :class="activeClass"></i>
    </label>
    <input
      :placeholder="placeholder"
      :type="type"
      class="myInput__input"
      v-model="value"
      @input="firstTouch = false"
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
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      value: "",
      regExpressions: {
        name: /^[ a-zA-Z ]{2,30}$/,
        phone: /^[ 0-9 ]{7,14}$/,
        simple: /^[\w\d]{1,20}$/,
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      },
      placeholders: {
        password: "Min 8 chars, 1 letter and 1 num:",
        email: "Enter your email"
      },
      classes: {
        invalidIconClass: "invalid fas fa-exclamation-circle",
        validIconClass: "valid fas fa-check-circle"
      },
      firstTouch: true
    };
  },
  computed: {
    regExp() {
      return this.regExpressions[this.type];
    },
    placeholder() {
      return this.placeholders[this.type];
    },
    isValid() {
      return this.regExp.test(this.value);
    },
    activeClass() {
      if (this.firstTouch) {
        return "";
      }
      if (this.isValid) {
        return this.classes.validIconClass;
      } else {
        return this.classes.invalidIconClass;
      }
    }
  },
  methods: {},
  watch: {
    isValid() {
      this.$emit("validity-change", {
        isValid: this.isValid,
        index: this.index
      });
    }
  },
  created() {}
};
</script>

<style lang="scss">
.myInput {
  &__fieldset {
    display: flex;
  }

  &__label {
    flex: 0 0 30%;
    font-weight: 800;
    .valid {
      color: rgb(8, 124, 18);
    }
    .invalid {
      color: rgb(207, 47, 47);
    }
  }

  &__input {
    flex: 1 0 0;
    &::placeholder {
      font-size: 15px;
      overflow: auto;
    }
  }
}
</style>