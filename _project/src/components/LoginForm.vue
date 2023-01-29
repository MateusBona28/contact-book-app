<script>
import ModalRegister from '../components/ModalRegister.vue'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: "",
      password: "",
      openRegisterModal: false,
    }
  },

  methods: {
    updateEmailValue(e) {
      this.email = e.target.value
    },
    updatePasswordValue(e) {
      this.password = e.target.value
    },
    log() {
      console.log(this.email, this.password)
    },
    changeRegisterModalDisplay() {
      this.openRegisterModal = !this.openRegisterModal
      console.log(this.openRegisterModal)
    },
  },
  components: { ModalRegister }
}
</script>

<template>
  <div class="container-formLogin">
    <form action="" class="formLogin">
      <div class="formLogin-inputDiv">
        <input type="text" placeholder="Email" @change="(e) => {updateEmailValue(e)}">
      </div>
      <div class="formLogin-inputDiv">
        <input type="password" placeholder="Senha" @change="(e) => {updatePasswordValue(e)}">
      </div>
      <button type="button" class="appGreenButton" @click="() => {log()}">Entrar</button>
    </form>
    <div class="greyline"></div>
    <div class="container-formLogin__createAccount">
      <button class="createAccountBtn" type="button" @click="() => {changeRegisterModalDisplay()}">Criar conta</button>
    </div>
  </div>
  <ModalRegister v-if="openRegisterModal === true" :changeRegisterModalDisplay="changeRegisterModalDisplay" />
</template>

<style>
  .container-formLogin {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 350px;
    height: 350px;

    border-radius: 6px;

    background-color: #fff;

    box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.23);
  }

  .formLogin {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    padding: 25px;
    padding-top: 0px;
    gap: 15px;
  }

  .formLogin-inputDiv {
    display: flex;
    flex-direction: column;
    width: 100% ;
  }

  .greyline {
    width: 85%;
    height: 1px;
    margin-left: auto;
    margin-right: auto;

    background-color: #c4c5c7;
  }

  .createAccountBtn {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;

    height: 40px;
    width: 50%;
    font-weight: 500;
    font-size: 18px;

    border: solid 1.5px #0B0D0D;
    border-radius: 6px;
    color: #0B0D0D;
    background-color: #fff;
  }

  .createAccountBtn:hover {
    cursor: pointer;

    background-color: #0B0D0D;
    color: #fff;
  }

</style>