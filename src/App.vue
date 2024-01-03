<template>
  <div id="app">
    <router-link to="/">Strona Główna</router-link>
    <router-link to="/about">O Nas</router-link>
    <router-link to="/contact">Kontakt</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
