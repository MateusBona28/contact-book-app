<script>
export default {
  name: 'Header'
}
</script>

<template>
  <div class="header-container">
    <h1>Contact Book</h1>
    <button>Login</button>
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

</style>