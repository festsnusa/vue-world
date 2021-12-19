<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    "
  >
    <div v-for="country in countries" :key="country.alpha3Code">
      <country-card v-bind="country"></country-card>
    </div>
  </div>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";
export default {
  components: {
    "country-card": CountryCard,
  },
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