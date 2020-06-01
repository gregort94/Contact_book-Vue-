<template>
  <div id="account">
    <finder @filtered="filteredData = $event" :sourceData="contactsData"></finder>
    <section class="contacts">
      <div class="contacts__logout"></div>
      <div class="container">
        <div class="contacts__block">
          <div class="contacts__letter"></div>
          <ul class="contacts__list">
            <contact
              v-for="(value, key) in filteredData"
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
import Contact from "./Contact";
import Profile from "./Profile";
import Finder from "./Finder";
import { mapGetters } from "vuex";
export default {
  components: {
    Contact,
    Profile,
    Finder
  },
  props: {
    contactsData: Array
  },
  data() {
    return {
      currentContact: false,
      filteredData: false
    };
  },
  computed: {},
  methods: {
    deleteContact(id) {
      const filteredDataIndex = this.filteredData.findIndex(contact => {
        return contact.id == id;
      });
      const contactsDataIndex = this.contactsData.findIndex(contact => {
        return contact.id == id;
      });
      this.contactsData.splice(contactsDataIndex, 1);
      this.filteredData.splice(filteredDataIndex, 1);
      this.currentContact = false;
    }
  },
  created() {
    this.filteredData = this.contactsData.slice();
  },
  watch: {
    // contactsData: {
    //   deep: true,
    //   handler() {
    //     this.filteredData = this.contactsData.slice();
    //   }
    // }
  }
};
</script>

<style lang="scss">
</style>
