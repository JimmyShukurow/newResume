<template>
  <div class="home">
    <v-container class="main">
      <header>
        <a
          href="https://jimmyshukurow.github.io/Resume-Static/"
          target="_blank"
          rel="noopener noreferrer"
          ><v-btn> old resume </v-btn></a
        >
        <router-link to="/"> <v-btn> get back </v-btn> </router-link>
      </header>
      <v-row cols="8">
        <v-col cols="12" sm="4">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Vuex Example Project </v-card-title>

            <v-card-subtitle>
              Project done using vue to demonstrate Vuex and its benefits. Very
              little Project.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                <a
                  href="https://jimmyshukurow.github.io/Vuex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Details</a
                >
              </v-btn>
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
