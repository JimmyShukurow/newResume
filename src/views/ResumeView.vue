<template>
  <div id="about">
    <v-container>
      <h1>Jemshit Shukurov</h1>
      <h3>Backend Developer</h3>

      <div class="buttons">
        <router-link to="/"> <v-btn> get back </v-btn> </router-link>
        <a href="#" @click.prevent="openResume" > <v-btn > Open Resume in pdf  </v-btn> </a> 
      </div>
       
    </v-container>
  </div>
</template>
<script>
export default {
  methods:{
    openResume() {
      window.open("resume.pdf", "_blank");
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
</style>
