<template>
  <v-app-bar app color="white">
    <div class="d-flex align-center"><h2>Where in the world?</h2></div>
    <v-spacer></v-spacer>
    <v-btn text>
      <font-awesome-icon icon="fa-solid fa-moon" size="lg" />
      <span class="mr-2"> Dark Mode</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  position: fixed;
  padding: 20px 50px;
  justify-content: space-between;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-shadow: -3px 18px 27px -24px rgba(0, 0, 0, 0.38);
  box-shadow: -3px 18px 27px -24px rgba(0, 0, 0, 0.38);
}
.mode-toggle {
  margin-right: 100px;
}
.title {
  font-weight: 800;
  font-size: 3vh;
}
</style>