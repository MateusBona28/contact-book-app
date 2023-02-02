<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      localStorage.clear()
      history.go('/login')
    }
  }
}
</script>

<template>
  <div class="header-container">
    <h1 class="title">Contact Book</h1>
    <div class="header-container__btnContainer">
      <button type="button" class="appGreenButton" @click="() => { logout() }" >Sair</button>
    </div>
  </div>
</template>

<style>
  .header-container {
    display: flex;
    max-width: 100vw;
    height: 80px;
    padding-left: 100px;
    padding-right: 100px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
  }

  .header-container__btnContainer {
    width: 80px;
  }

  .title {
    color: #0E3B43;;
  }

</style>