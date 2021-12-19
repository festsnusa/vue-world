<template>
  <div class="card">
    <div><img :src="flag" :alt="name" height="200" /></div>
    <div class="card_content">
      <div class="card_title">{{ name }}</div>
      <div><b>Population: </b>{{ population | numberFormatter }}</div>
      <div><b>Region: </b>{{ region }}</div>
      <div><b>Capital: </b>{{ capital }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flag: { type: String, default: null },
    name: { type: String, default: "NA" },
    population: { type: Number, default: 0 },
    region: { type: String, default: "NA" },
    capital: { type: String, default: "NA" },
  },
};
</script>

<style>
.card {
  width: 300px;
  margin-top: 30px;
  border-radius: 4px;
  -webkit-box-shadow: -3px 0px 27px -10px rgba(0, 0, 0, 0.37);
  box-shadow: -3px 0px 27px -10px rgba(0, 0, 0, 0.37);
}
.card_content {
  padding: 20px;
  font-size: 14px;
  font-weight: 300;
}
.card_title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}
.card img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: cover;
  object-position: 50% 100%;
}
</style>