<template>
  <div class="tool-menu-panel">
    <el-button type="text">相册</el-button>
    <el-button type="text" @click="flyToGFHome">猪儿</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    flyToGFHome() {
      // let sphere = new Cesium.BoundingSphere(
      //   Cesium.Cartesian3.fromDegrees(108.2394, 34.5347),
      //   1e3
      // );
      // earth.camera.flyToBoundingSphere(sphere);
      earth.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(108.23944444444444, 34.53472222222222, 1e3),
        // orientation: {
        //   heading: Cesium.Math.toRadians(0),
        //   pitch: Cesium.Math.toRadians(-35.0),
        //   roll: 0.0
        // }
      });
    }
  }
};
</script>

<style>
.tool-menu-panel {
  position: absolute;
  left: 5px;
  top: 5px;
}
</style>