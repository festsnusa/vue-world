<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
  },
};
</script>

<style>
body {
  font-family: "Nunito Sans", sans-serif;
  padding: 0;
  margin: 0;
}
main {
  margin-top: 100px;
  padding: 0 5%;
}
</style>
