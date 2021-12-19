<template>
  <v-container>
    <v-row
      ><v-col
        ><v-btn color="white" class="btn" @click="goBack"
          ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
        ></v-col
      ></v-row
    >
    <v-row>
      <v-col md="6">
        <v-img :src="country.flag"></v-img>
      </v-col>
      <v-col md="6">
        <div class="d-flex align-center" style="height: 100%">
          <v-row>
            <v-col md="12">
              <h2>{{ country.name }}</h2>
            </v-col>
            <v-col md="6">
              <div>
                <b>Native Name: </b
                >{{ country.nativeName ? country.nativeName : "NA" }}
              </div>
              <div>
                <b>Population: </b>{{ country.population | numberFormatter }}
              </div>
              <div><b>Region: </b>{{ country.region }}</div>
              <div><b>Sub Region: </b>{{ country.subregion }}</div>
              <div><b>Capital: </b>{{ country.capital }}</div>
            </v-col>
            <v-col md="6">
              <div>
                <b>Top Level Domain: </b
                ><span v-for="domain in country.topLevelDomain" :key="domain">{{
                  domain
                }}</span>
              </div>
              <div>
                <b>Currencies: </b
                ><span
                  v-for="currency in country.currencies"
                  :key="currency.code"
                  >{{ country.name }}</span
                >
              </div>
              <div><b>Languages: </b>{{ country.region }}</div>
            </v-col>
            <v-col md="12">
              <div class="mr-1">
                Border Countries:
                <span>
                  <v-btn
                    class="mr-2 mb-2"
                    v-for="border in country.borders"
                    @click="getBorder(border)"
                    :key="border"
                    >{{ border }}</v-btn
                  >
                </span>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      country: {},
      code: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$route.params.code) {
        let data = atob(this.$route.params.code);
        this.code = data;
        this.getCountryDetails();
      }
    },
    getCountryDetails() {
      this.$http
        .get(`alpha/${this.code}`)
        .then((response) => {
          if (response.status == 200) {
            const data = response.data;
            this.country = data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goBack() {
      this.$router.push({
        name: "Home",
      });
    },
    getBorder(border) {
      this.code = border;
      this.getCountryDetails();
    },
  },
};
</script>

<style>
</style>