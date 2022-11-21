<template>
  <div>
    <nav>
      <img src="./assets/logo.png" alt=""><br>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <br>
        <li><router-link to="/about">About</router-link></li>
        <br>
        <li><router-link to="/roger">Roger</router-link></li>
      </ul>



      <br>

    </nav>

  </div>

  <router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  display: flex;
}
  /*margin-top: 60px;*/
  ul li{
    list-style-type: none;
  }
.homestyle{
  width:65%;
  border: 3px solid #0d8032;
}

  a{
    padding: 5px;
  }
</style>
