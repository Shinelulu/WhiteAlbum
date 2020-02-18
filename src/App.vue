<template>
  <div id="app">
    <earth-home></earth-home>
    <router-view v-if="isShow" />
  </div>
</template>

<script>
import EarthHome from "@/components/home/earthHome";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    EarthHome
  },
  computed: {
    ...mapState("aoi", {
      isShow: state => state.status.earthReady
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
