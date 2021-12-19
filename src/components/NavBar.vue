<template>
  <nav class="navbar">
    <div class="title">Where in the world?</div>
    <div class="mode-toggle">
      <font-awesome-icon icon="fa-solid fa-moon" size="lg" /> Dark Mode
    </div>
  </nav>
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