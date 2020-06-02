<template>
  <aside class="letters">
    <ul class="letters__list">
      <li class="letters__item" v-for="(value, letter) in alphabetObject" :key="letter">
        <a
          :href="`#${letter}`"
          class="letters__link"
          :class="{'letters__link--existing': value}"
        >{{letter}}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { arr_EN } from "../js/data";
import { log } from "util";
export default {
  props: {
    existingLetters: Array
  },
  data() {
    return {
      alphabetArray: arr_EN,
      alphabetObject: {}
    };
  },
  methods: {},
  created() {
    this.alphabetArray.forEach(letter => {
      this.$set(this.alphabetObject, letter, false);
    });
    this.existingLetters.forEach(letter => {
      this.alphabetObject[letter] = true;
    });
  },
  watch: {
    existingLetters() {
      for (const key in this.alphabetObject) {
        this.alphabetObject[key] = false;
      }
      this.existingLetters.forEach(letter => {
        this.alphabetObject[letter] = true;
      });
    }
  }
};
</script>