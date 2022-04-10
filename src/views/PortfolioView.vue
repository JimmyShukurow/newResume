<template>
  <div class="home">
    <v-container class="main">
      <header>
        <v-btn > click me </v-btn>
        <router-link to="/"> <v-btn> get back </v-btn> </router-link>
      </header>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Vue Example Project </v-card-title>

            <v-card-subtitle> 
              Project Done by Vue to demonstrate routes lorem imsasdasjdlajsdlasdl
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text> <a href="http://" target="_blank" rel="noopener noreferrer">Details</a>  </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
         <v-col cols="12" sm="4">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
         <v-col cols="12" sm="4">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
}
a {
  text-decoration: none;
  color: inherit;
}
.mycard {
  background-color: brown;
}
</style>

<style lang="scss" >
@import "../scss/background.scss";
</style>
