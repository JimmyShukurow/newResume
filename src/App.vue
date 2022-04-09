<template>
  <div id="app">
    <span class="profession">
      Software Engineer & Developer 
    </span>
    
    <div style="display:flex; justify-content:center">
        <div class="animeClass">
          <img class="photo" alt="Vue logo" src="./assets/photo.jpeg">
          <!-- menu items start here -->
          <div id="menu1"  class="menu-image " > <a href="#" class="fa fa-telegram"></a> </div>
          <div id="menu2" class="menu-image  "> <a href="#" class="fa fa-twitter"></a> </div>
          <div id="menu3"  class="menu-image "> <a href="https://github.com/JimmyShukurow" target="_blank" class="fa fa-github"></a>  </div>
          <div id="menu4" class="menu-image  "> <a href="https://www.linkedin.com/in/jemshit-shukurov/"  target="_blank" class="fa fa-linkedin"></a></div>
          <div id="menu5" class="menu-image  ">  <a href="https://vimeo.com/573308795" target="_blank" class="fa fa-vimeo"></a> </div>
          <div id="menu6" class="menu-image  ">  <a href="https://www.youtube.com/channel/UCBM_vaLi6Ir-PEFu5gv5CKg" target="_blank" class="fa fa-youtube-play"></a> </div>
          <!-- end of menu items -->
        </div>
    </div>
     <v-row class="extra">
        <v-btn>  <navigation-link url="/profile"> Profile </navigation-link>  </v-btn>
        <v-btn> <a href="http://" target="_blank" rel="noopener noreferrer">Resume</a>  </v-btn>
      </v-row>
  </div>
</template>

<script>
import forexport from '@/js/animate';
export default {
  name: 'App',
  components: {
  },
  mounted() {
      forexport.menuOpen();
  }
}
</script>

<style>
/* @import "./scss/socialmedia.css"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid gray;
}
.menu-image{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 230px;
  left: 230px;
}
.animeClass {
  margin-top: 150px;
  width: 250px;
  height: 250px;
  position: relative;
}

.profession {
  font-size: 2rem;
  font-weight: 100;
  font-style: normal;
}
.fa {
  padding: 10px;
  font-size: 30px;
  /* width: 30px; */
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa-telegram {
  background: #229ED9;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-github {
  background: #0e0d0d;
  color: white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa-vimeo {
  background: #45bbff;
  color: white;
}
.fa-youtube-play {
  background: #bb0000;
  color: white;
}

.extra {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: none;
}
</style>

<style lang="scss">
 @import "./scss/background.scss";
</style>