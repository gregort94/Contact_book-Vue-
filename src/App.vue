<template>
  <div id="app">
    <a href="auth.html">auth</a>
    <section class="contacts">
      <div class="container">
        <div class="contacts__block">
          <div class="contacts__letter"></div>
          <ul class="contacts__list">
            <contact
              v-for="(value, key) in contactsData"
              :key="key"
              :contact-data="value"
              @open-profile="openProfile($event)"
            ></contact>
          </ul>
        </div>
      </div>
    </section>
    <profile @close="currentContact = false" v-if="currentContact" :contact-data="currentContact"></profile>
  </div>
</template>

<script>
import { getContactsData } from "./js/backend";
// import { renderContacts } from "./js/renderContacts";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { log } from "util";
export default {
  components: {
    contact: Contact,
    profile: Profile
  },
  data() {
    return {
      contactsData: false,
      currentContact: false
    };
  },
  methods: {
    openProfile(currentContact) {
      this.currentContact = currentContact;
    }
  },
  created() {
    getContactsData().then(resolve => {
      this.contactsData = resolve;
    });
  }
};
</script>

<style lang="scss">
</style>
