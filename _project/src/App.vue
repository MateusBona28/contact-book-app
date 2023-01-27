<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
  * {
    margin: 0px;
    padding: 0px; 
    transition: 0.4s;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  input {
    padding-left: 10px;
    border: solid 1.5px #9e9898;
    border-radius: 6px;
    height: 48px;
    
    font-size: 18px;
  }

  .appGreenButton {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 40px;

    border: solid 1.5px #0E3B43;
    color: #0E3B43;
    background-color: #fff;
    border-radius: 6px;

    font-weight: 500;
    font-size: 18px;
  }

  .appGreenButton:hover {
    cursor: pointer;
    color: #fff;
    background-color: #0E3B43;
  }
</style>
