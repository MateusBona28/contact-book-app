<script>
import { useUserStore } from '../stores/userStore';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'AccountInfo',
  data() {
    return {
      accountInfo: useUserStore(),
    }
  },
  methods: {
    log() {
      console.log(this.accountInfo.user)
    }
  },
  async mounted() {
  },
}
</script>

<template>
  <div class="divteste">
    <h2>Suas informações</h2>
    <button type="button" @click="() => { log() }">teste</button>
    <span>{{ this.accountInfo.user.fullName }}</span>
    <span>{{ this.accountInfo.user.email }}</span>
    <span>{{ this.accountInfo.user.contacts[0].contact.phones[0].ddd }}</span>
    <span>{{ this.accountInfo.user.contacts[0].contact.phones[0].number }}</span>
  </div>
</template>

<style>
  .divteste {
    height: 400px;
    width: 200px; 
  }
</style>