<template>
  <div class="home">
    <v-container class="main">
      <header>
        <a href="https://jimmyshukurow.github.io/Resume-Static/" target="_blank"
          ><v-btn> old resume </v-btn></a
        >
        <router-link to="/"> <v-btn> get back </v-btn> </router-link>
      </header>

      <!-- These all are Vue Fun project -->

      <h1>Spring Boot Projects</h1>
      <br />

      <v-row cols="8" class="rows">
        <v-col
          cols="12"
          sm="4"
          v-for="(springBootProject, index) in springBootProjects"
          :key="index"
        >
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> {{ springBootProject.title }}</v-card-title>

            <v-card-subtitle>
              {{ springBootProject.description }}
            </v-card-subtitle>

            <v-card-actions>
             
              <v-spacer></v-spacer>
              <a :href="springBootProject.githubLink" target="_blank">
                <v-btn text> Github </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- End Of Vue Fun project -->
      <!-- These all are Vue Fun project -->

      <h1>Vue Fun Projects</h1>
      <br />

      <v-row cols="8" class="rows">
        <v-col
          cols="12"
          sm="4"
          v-for="(vueProject, index) in vueProjects"
          :key="index"
        >
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> {{ vueProject.title }}</v-card-title>

            <v-card-subtitle>
              {{ vueProject.description }}
            </v-card-subtitle>

            <v-card-actions>
              <a :href="vueProject.details" target="_blank">
                <v-btn text> Details </v-btn>
              </a>
              <v-spacer></v-spacer>
              <a :href="vueProject.githubLink" target="_blank">
                <v-btn text> Github </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- End Of Vue Fun project -->

      <!-- These all are JavaFX fun projects -->
      <h1>JavaFX Fun Projects</h1>
      <br />

      <v-row cols="8" class="rows">
        <v-col
          cols="12"
          sm="4"
          v-for="(javafxProject, index) in javafxFunProjects"
          :key="index"
        >
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              {{ javafxProject.title }}</v-card-title
            >

            <v-card-subtitle>
              {{ javafxProject.description }}
            </v-card-subtitle>

            <v-card-actions>
              <a :href="javafxProject.details" target="_blank">
                <v-btn text> Details </v-btn>
              </a>
              <v-spacer></v-spacer>
              <a :href="javafxProject.githubLink" target="_blank">
                <v-btn text> Github </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- End of JavaFX projects -->

      <!-- These all are Laravel Fun project -->
      <h1>Laravel Fun Projects</h1>
      <br />
      <v-row cols="8" class="rows">
        <v-col
          cols="12"
          sm="4"
          v-for="(laravelFunProject, index) in laravelFunProjects"
          :key="index"
        >
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              {{ laravelFunProject.title }}</v-card-title
            >

            <v-card-subtitle>
              {{ laravelFunProject.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>
              <a :href="laravelFunProject.githubLink" target="_blank">
                <v-btn text> Github </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- End of Laravel Fun project -->

      <!-- These all are Laravel Serious project -->
      <h1>Laravel Projects</h1>
      <br />
      <v-row cols="8">
        <v-col
          cols="12"
          sm="4"
          v-for="(laravelProject, index) in laravelProjects"
          :key="index"
        >
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              {{ laravelProject.title }}</v-card-title
            >

            <v-card-subtitle>
              {{ laravelProject.description }}
            </v-card-subtitle>

            <v-card-actions>
              <a :href="laravelProject.details" target="_blank">
                <v-btn text> Details </v-btn>
              </a>
              <v-spacer></v-spacer>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn text v-on="on"> Github </v-btn>
                </template>
                <h1>Top tooltip</h1>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- End of Laravel Serious project -->
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data: () => ({
    vueProjects: [
      {
        title: "Vuetify Example Project",
        description: "E-commerce web app  done using VUE and VUETIFY. Goin on.",
        details: "https://vue-ecommerce-phi.vercel.app/#/",
        githubLink: "https://github.com/JimmyShukurow/VueEcoomerce",
      },
      {
        title: "Vuex Example Project",
        description:
          "Project done using vue to demonstrate Vuex and its benefits. Very little Project.",
        details: "https://jimmyshukurow.github.io/Vuex/",
        githubLink: "https://github.com/JimmyShukurow/Vuex",
      },
      {
        title: "Vue Test Project",
        description:
          "Project done using vue to demonstrate axios and its usage with javascript promises. Check it out ",
        details: "https://jimmyshukurow.github.io/VueProject/",
        githubLink: "https://github.com/JimmyShukurow/VueProject",
      },
      {
        title: "Vue Admin Panel (Not Finished)",
        description:
          "This is an admin panel which is planned to use in all my Vue projects. Actually its not going well ...",
        details: "https://vue-admin-panel.vercel.app/#/",
        githubLink: "https://github.com/JimmyShukurow/VueAdminPanel",
      },
    ],
    javafxFunProjects: [
      {
        title: "JavaFX Knight question solution",
        description: "This is math question's solution with JavaFX and GRADLE.",
        details: "https://vimeo.com/704160634",
        githubLink: "https://github.com/JimmyShukurow/Chess-question",
      },
      {
        title: "JavaFX Vector Field App",
        description: "This is a fun project showing Math and Geometry uses in JavaFX.",
        details: "https://vimeo.com/695343876",
        githubLink: "https://github.com/JimmyShukurow/VectorField",
      },
    ],
    springBootProjects: [
      {
        title: "Todo Project With GRADLE ",
        description: "This Project is done by using Spring boot and GRADLE",
        details: "#",
        githubLink: "https://github.com/JimmyShukurow/SpringTodoWithRestApi",
      },
      {
        title: "Simple CRUD With MAVEN ",
        description: "This Project is done by using Spring boot and Maven, it is a simple Sudent CRUD system",
        details: "#",
        githubLink: "https://github.com/JimmyShukurow/SpringTodoWithRestApi",
      },
      {
        title: "Spring boot JWT with MAVEN ",
        description: "This is JWT example for spring security with access token and refresh token",
        details: "#",
        githubLink: "https://github.com/JimmyShukurow/SpringSecurityJWT",
      },
    ],
    laravelFunProjects: [
      {
        title: "Cumhuriyet Kargo",
        description: "This Project is done using Laravel and Jquery.",
        details: "#",
        githubLink: "https://github.com/JimmyShukurow/CumhuriyetKargo",
      },
      {
        title: "Generation Tree",
        description: "This Project is done using Laravel and Jquery.",
        details: "#",
        githubLink: "https://github.com/JimmyShukurow/shukurupler.denastiyasy",
      },
      {
        title: "Admin Panel",
        description: "This Project is done using Laravel.",
        details: "#",
        githubLink: "https://github.com/JimmyShukurow/adminpanel",
      },
    ],

    laravelProjects: [
      {
        title: "Perpa Expo Laravel",
        description:
          "This Project is done using Laravel and Jquery. But I cant share codes, because of privacy policy",
        details: "https://perpaexpo.com/",
        githubLink: "#",
      },
      {
        title: "Travelshop Booking Laravel",
        description:
          "This Project is done using Laravel and Vue. But I cant share codes, because of privacy policy",
        details: "https://travelshopbooking.com/",
        githubLink: "#",
      },
      {
        title: "Ageenta Laravel",
        description:
          "This Project is done using Laravel and React. But I cant share codes, because of privacy policy",
        details: "https://www.ageenta.com",
        githubLink: "#",
      },
      {
        title: "Second Hand Car Laravel",
        description:
          "This Project is done using Laravel and React. But I cant share codes, because of privacy policy",
        details: "https://incirogluikincielbirinci.com/",
        githubLink: "#",
      },
    ],
  }),
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
.rows {
  margin-bottom: 75px;
}
</style>

<style lang="scss" >
@import "../scss/background.scss";
</style>
