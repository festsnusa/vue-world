<template>
  <v-container>
    <v-row>
      <v-col v-for="country in countries" :key="country.alpha3Code" md="4">
        <country-card v-bind="country"></country-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";

export default {
  name: "Home",
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
