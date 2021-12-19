<template>
  <div>
    <div v-for="country in countries" :key="country.alpha3Code">
      {{ country.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      this.$http.get("all").then((response) => {
        if (response.status == 200) {
          this.countries = response.data;
        }
      });
    },
  },
};
</script>

<style>
</style>