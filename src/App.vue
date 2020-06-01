<template>
  <div id="app">
    <auth v-if="!contactsData"></auth>
    <account v-if="contactsData" :contacts-data="contactsData"></account>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Auth from "@/components/Auth.vue";
import Account from "@/components/Account.vue";
export default {
  components: {
    Auth,
    Account
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["contactsData"])
  }
};
</script>
