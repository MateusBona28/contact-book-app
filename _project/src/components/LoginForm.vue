<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  // actions
  methods: {
    updateEmailValue(e) {
      this.email = e.target.value
    },
    updatePasswordValue(e) {
      this.password = e.target.value
    },
    log() {
      console.log(this.email, this.password)
    }
  }
}
</script>

<template>
  <div class="container-formLogin">
    <form action="" class="formLogin">
      <div class="formLogin-inputDiv">
        <input ref="email" type="text" placeholder="Email" @change="(e) => {updateEmailValue(e)}">
      </div>
      <div class="formLogin-inputDiv">
        <input ref="password" type="password" placeholder="Senha" @change="(e) => {updatePasswordValue(e)}">
      </div>
      <button type="button" class="appGreenButton" @click="() => {log()}">Entrar</button>
    </form>
    <div class="greyline"></div>
    <div class="container-formLogin__createAccount">
      <button class="createAccountBtn" type="button">Criar nova conta</button>
    </div>
  </div>
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
    height: 2px;
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