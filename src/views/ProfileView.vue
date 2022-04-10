<template>
  <div class="home">
    <v-container class = "main">
      <v-btn> click me </v-btn>
       <router-link to="/"> <v-btn> get back </v-btn>  </router-link> 
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.main{
  display: flex;
  justify-content: space-around;
}
a {
  text-decoration: none;
}
</style>

<style lang="scss" >
 @import "../scss/background.scss";
</style>
