<template>
  <div class="overlay" @click.self="$emit('close')">
    <form @submit.prevent="saveChange" class="profile">
      <div class="profile__top">
        <div class="profile__avatar">
          <img class="fitImg" alt :src="contactData.avatar" />
        </div>
        <div class="profile__star">
          <input
            ref="favorite"
            id="favorite"
            type="checkbox"
            class="inputControl profile__star-input"
            :checked="contactData.favorite"
          />
          <label for="favorite" class="profile__star-label">
            <img src="src/assets/img/icons/star.svg" alt />
          </label>
        </div>
        <button @click="$emit('close')" type="button" class="btn profile__close"></button>
        <button
          @click="$emit('delete-contact', contactData.id)"
          type="button"
          class="btn profile__delete"
        ></button>
        <button type="submit" class="btn profile__save"></button>
        <div ref="saveMessage" class="profile__message">Saved !</div>
      </div>
      <div class="profile__bottom">
        <div class="profile__fieldset profile__fieldset--name">
          <input
            required
            class="profile__input"
            ref="name"
            id="name"
            type="text"
            :value="contactData.name"
            @input="checkNameValidity"
          />
        </div>
        <div class="profile__fieldset profile__fieldset--phone">
          <label for="phone" class="profile__label">Phone</label>
          <input
            ref="phone"
            id="phone"
            type="phone"
            class="profile__input"
            :value="contactData.phone"
          />
        </div>
        <div class="profile__fieldset profile__fieldset--email">
          <label for="email" class="profile__label">Email</label>
          <input
            ref="email"
            id="email"
            type="email"
            class="profile__input"
            :value="contactData.email"
          />
        </div>
        <fieldset class="profile__address">
          <legend>address</legend>
          <div class="profile__fieldset profile__fieldset--city">
            <label for="country" class="profile__label">Country</label>
            <input
              ref="country"
              id="country"
              type="text"
              class="profile__input"
              :value="contactData.address.country"
            />
          </div>
          <div class="profile__fieldset profile__fieldset--state">
            <label for="state" class="profile__label">State</label>
            <input
              ref="state"
              id="state"
              type="text"
              class="profile__input"
              :value="contactData.address.state"
            />
          </div>
          <div class="profile__fieldset profile__fieldset--city">
            <label for="city" class="profile__label">City</label>
            <input
              ref="city"
              id="city"
              type="text"
              class="profile__input"
              :value="contactData.address.city"
            />
          </div>
        </fieldset>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  props: ["contactData"],
  data() {
    return {};
  },
  methods: {
    saveChange() {
      this.contactData.name = this.$refs.name.value;
      this.contactData.phone = this.$refs.phone.value;
      this.contactData.email = this.$refs.email.value;
      this.contactData.address.country = this.$refs.country.value;
      this.contactData.address.state = this.$refs.state.value;
      this.contactData.address.city = this.$refs.city.value;
      this.contactData.favorite = this.$refs.favorite.checked;

      this.showMessage();
    },
    showMessage() {
      this.$refs.saveMessage.classList.add("profile__message--visable");
      setTimeout(() => {
        this.$refs.saveMessage.classList.remove("profile__message--visable");
      }, 1000);
    },
    checkNameValidity(e) {
      const isValid = /^[A-Za-z0-9]+$/.test(e.target.value);
      if (!isValid) {
        e.target.value = "";
        e.target.placeholder = "enter in english please";
      }
    }
  }
};
</script>

<style>
</style>