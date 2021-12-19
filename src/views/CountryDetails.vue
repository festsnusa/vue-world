<template>
  <v-container>
    <v-row
      ><v-col
        ><v-btn color="white" class="btn"
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
                <b>Native Name: </b>{{ country.population | numberFormatter }}
              </div>
              <div>
                <b>Population: </b>{{ country.population | numberFormatter }}
              </div>
              <div><b>Region: </b>{{ country.region }}</div>
              <div><b>Sub Region: </b>{{ country.region }}</div>
              <div><b>Capital: </b>{{ country.capital }}</div>
            </v-col>
            <v-col md="6">
              <div>
                <b>Top Level Domain: </b
                >{{ country.population | numberFormatter }}
              </div>
              <div>
                <b>Currencies: </b>{{ country.population | numberFormatter }}
              </div>
              <div><b>Languages: </b>{{ country.region }}</div>
            </v-col>
            <v-col md="12">
              Border Countries:
              <div clas></div>
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
  },
};
</script>

<style>
</style>