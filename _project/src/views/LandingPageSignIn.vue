<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
  name: 'LandingPage'
}
</script>

<template>
  <div class="container">
    <div class="container-appInfo">
      <h1 class="container-appInfo__title">Contact Book</h1>
      <span class="container-appInfo__description">
        O aplicativo de agenda que facilita a sua vida e a de seus contatos.
      </span>
    </div>
    <LoginForm />
  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #F0F2F5;
  }
  .container-appInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 400px;
  }

  .container-appInfo__title {
    color: #0E3B43;
    font-size: 42px;
  }

  .container-appInfo__description {
    font-size: 24px;
  }

</style>