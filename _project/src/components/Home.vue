<script>
import Header from './Header.vue';
import AccountInfo from './AccountInfo.vue';
import { useUserStore } from '../stores/userStore';
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'Home',
  components: { Header, AccountInfo },
  data() {
    return {
      showLoadedInfo: false,
      accountInfo: useUserStore(),
    }
  },
  async mounted() {
    this.accountInfo.id = VueJwtDecode.decode(this.accountInfo.token).sub

    await this.accountInfo.getUser()

    setTimeout(() => {
      this.showLoadedInfo = true
    }, 200)
  }
}
</script>

<template>
  <div>
  <Header></Header>
  <div class="content-divisor">
    <AccountInfo v-if="showLoadedInfo === true"/>
  </div>
  </div>
</template>

<style>
.content-divisor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: fit-content;
}
</style>