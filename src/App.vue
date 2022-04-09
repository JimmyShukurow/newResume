<template>
  <div id="app">
    <span class="profession">
      Software developer 
    </span>
    
    <div style="display:flex; justify-content:center">
        <div class="animeClass">
          <img class="photo" alt="Vue logo" src="./assets/photo.jpeg">
          <!-- menu items start here -->
          <img src="./assets/avatar.png" alt="menu1"  id="menu1"  class="menu-image " >
          <img src="./assets/avatar.png" alt="menu2"  id="menu2" class="menu-image  " >
          <img src="./assets/avatar.png" alt="menu3"  id="menu3"  class="menu-image " >
          <img src="./assets/avatar.png" alt="menu4"  id="menu4" class="menu-image  " >
          <img src="./assets/avatar.png" alt="menu5"  id="menu5" class="menu-image  " >
          <img src="./assets/github.png" alt="menu6"  id="menu6" class="menu-image  " >

          <!-- end of menu items -->
        </div>
    </div>
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 230px;
    left: 230px;
}
.animeClass {
  margin-top: 50px;
  width: 250px;
  height: 250px;
  position: relative;
}

.profession {
  font-size: 2rem;
  font-weight: 100;
  font-style: normal;
}

</style>

<style lang="scss">
 @import "./scss/background.scss";
</style>