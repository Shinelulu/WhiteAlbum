<template>
  <div class="location-test"></div>
</template>

<script>
export default {
  mounted() {
    //this.flyToChina();
  },
  methods: {
    flyToChina() {
      earth.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0),
        duration: 5
      });
    }
  }
};
</script>

<style>
.location-test {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 30px;
  width: 30px;
  background-color: chocolate;
}
</style>