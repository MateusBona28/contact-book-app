<script>
import axios from 'axios'

export default {
  name: 'ModalRegister',
  props: {
    changeRegisterModalDisplay: Function
  },

  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phones: "",
    }
  },

  methods: {
    updateFullnameValue(e) {
      this.fullName = e.target.value
    },
    updateEmailValue(e) {
      this.email = e.target.value
    },
    updatePasswordValue(e) {
      this.password = e.target.value
    },
    updateConfirmPasswordValue(e) {
      this.confirmPassword = e.target.value
    },
    updatePhonesValue(e) {
      this.phones = e.target.value
    },
    register() {
      const data = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        phones: [this.phones],
      }

      axios.post('http://localhost:3000/accounts', data)
      .then((res) => {
        console.log(res.data)
        this.changeRegisterModalDisplay()
      })
      .catch((err) => {console.log(err)})
    },
  }
}
</script>

<template>
  <div class="transparentModalBackground">
    <form action="" class="registerForm">
      <div class="rowSpaceDiv">
        <h2>Criar conta</h2>
        <span class="closeModalBtn" @click="() => {changeRegisterModalDisplay()}">X</span>
      </div>
      <input type="text" placeholder="Nome" @change="(e) => {updateFullnameValue(e)}" />
      <input type="text" placeholder="Email" @change="(e) => {updateEmailValue(e)}" />
      <input type="password" placeholder="Senha" @change="(e) => {updatePasswordValue(e)}" />
      <input type="password" placeholder="Confirmar senha" @change="(e) => {updateConfirmPasswordValue(e)}" />
      <input type="text" placeholder="Telefone" @change="(e) => {updatePhonesValue(e)}" />
      <button type="button" class="appGreenButton" @click="() => {register()}">Cadastrar</button>
    </form>
  </div>
</template>

<style>
  .transparentModalBackground {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    position: fixed;
    top: 0px;
    left: 0px;

    background-color: rgba(0, 0, 0, 0.4);
  }

  .registerForm {
    display: flex;
    flex-direction: column;

    width: 300px;
    height: 450px;

    border-radius: 6px;

    background-color: #fff;

    gap: 15px;

    padding: 20px;
  }

  .rowSpaceDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .closeModalBtn {
    font-weight: 500;
    font-size: 16px;
  }

  .closeModalBtn:hover {
    cursor: pointer;
  }

</style>