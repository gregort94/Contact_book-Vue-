<template>
  <div id="account">
    <finder @filtered="contactsData = $event" v-if="contactsData" :users="sourceData"></finder>
    <section class="contacts">
      <div class="contacts__logout">
        <router-link to="/">Log out</router-link>
      </div>
      <div class="container">
        <div class="contacts__block">
          <div class="contacts__letter"></div>
          <ul class="contacts__list">
            <contact
              v-for="(value, key) in contactsData"
              :key="key"
              :contact-data="value"
              @open-profile="currentContact = $event"
            ></contact>
          </ul>
        </div>
      </div>
    </section>
    <profile
      @delete-contact="deleteContact($event)"
      @close="currentContact = false"
      v-if="currentContact"
      :contact-data="currentContact"
    ></profile>
  </div>
</template>

<script>
import { getContactsData } from "../js/backend";
import Contact from "./Contact";
import Profile from "./Profile";
import Finder from "./Finder";
export default {
  components: {
    Contact,
    Profile,
    Finder
  },
  data() {
    return {
      sourceData: false,
      currentContact: false,
      contactsData: false
    };
  },
  computed: {},
  methods: {
    deleteContact(id) {
      const index = this.contactsData.findIndex(contact => {
        return contact.id == id;
      });
      this.contactsData.splice(index, 1);
      this.sourceData.splice(index, 1);
      this.currentContact = false;
    }
  },
  created() {
    getContactsData().then(resolve => {
      this.sourceData = resolve;
      this.contactsData = resolve.slice();
    });
  }
};
</script>

<style lang="scss">
</style>
