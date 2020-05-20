<template>
  <li
    @click="contactClickHandler"
    class="contact"
    :class="{'contact--favorite':contactData.favorite}"
    tabindex="0"
  >
    <div class="contact__avatar">
      <img :src="contactData.avatar" alt="avatar" class="fitImg contact__avatar-img" />
    </div>
    <div class="contact__info">
      <p class="contact__name">{{contactData.name}}</p>
      <div class="contact__optional">
        <p class="contact__phone">
          <span class="contact__phone-number">{{contactData.phone}}</span>
          <a :href="`tel:${contactData.phone}`" @click.stop class="contact__phone-link">
            <img class="contact__phone-icon" src="src/assets/img/icons/phone.svg" alt />
          </a>
        </p>
        <p class="contact__email">{{contactData.email}}</p>
      </div>
    </div>
  </li>
</template>


<script>
export default {
  props: {
    contactData: Object
  },
  data() {
    return {};
  },
  methods: {
    contactClickHandler() {
      this.$emit("open-profile", this.contactData);
    }
  }
};
</script>