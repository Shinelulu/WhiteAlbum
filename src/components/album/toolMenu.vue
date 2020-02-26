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
      let validLocation = this.justifyPositionWgs84ToGcj02(
        108.23944444444444,
        34.53472222222222
      );
      earth.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          validLocation[0],
          validLocation[1],
          1e3
        )
        // orientation: {
        //   heading: Cesium.Math.toRadians(0),
        //   pitch: Cesium.Math.toRadians(-35.0),
        //   roll: 0.0
        // }
      });
    },
    justifyPositionWgs84ToGcj02(lon, lat) {
      if (this.out_of_china(lon, lat)) {
        return [lon, lat];
      } else {
        let ee = 0.00669342162296594323;
        let radius = 6378245.0;
        let dlat = this.transformlat(lon - 105.0, lat - 35.0);
        let dlon = this.transformlon(lon - 105.0, lat - 35.0);
        let radlat = (lat / 180.0) * Math.PI;
        let magic = Math.sin(radlat);
        magic = 1 - ee * magic * magic;
        let sqrtmagic = Math.sqrt(magic);
        dlat =
          (dlat * 180.0) / (((radius * (1 - ee)) / (magic * sqrtmagic)) * Math.PI);
        dlon = (dlon * 180.0) / ((radius / sqrtmagic) * Math.cos(radlat) * Math.PI);
        let mglat = lat + dlat;
        let mglon = lon + dlon;
        return [mglon, mglat];
      }
    },
    transformlat(lon, lat) {
      var ret =
        -100.0 +
        2.0 * lon +
        3.0 * lat +
        0.2 * lat * lat +
        0.1 * lon * lat +
        0.2 * Math.sqrt(Math.abs(lon));
      ret +=
        ((20.0 * Math.sin(6.0 * lon * Math.PI) +
          20.0 * Math.sin(2.0 * lon * Math.PI)) *
          2.0) /
        3.0;
      ret +=
        ((20.0 * Math.sin(lat * Math.PI) +
          40.0 * Math.sin((lat / 3.0) * Math.PI)) *
          2.0) /
        3.0;
      ret +=
        ((160.0 * Math.sin((lat / 12.0) * Math.PI) +
          320 * Math.sin((lat * Math.PI) / 30.0)) *
          2.0) /
        3.0;
      return ret;
    },

    transformlon(lon, lat) {
      var ret =
        300.0 +
        lon +
        2.0 * lat +
        0.1 * lon * lon +
        0.1 * lon * lat +
        0.1 * Math.sqrt(Math.abs(lon));
      ret +=
        ((20.0 * Math.sin(6.0 * lon * Math.PI) +
          20.0 * Math.sin(2.0 * lon * Math.PI)) *
          2.0) /
        3.0;
      ret +=
        ((20.0 * Math.sin(lon * Math.PI) +
          40.0 * Math.sin((lon / 3.0) * Math.PI)) *
          2.0) /
        3.0;
      ret +=
        ((150.0 * Math.sin((lon / 12.0) * Math.PI) +
          300.0 * Math.sin((lon / 30.0) * Math.PI)) *
          2.0) /
        3.0;
      return ret;
    },
    out_of_china(lon, lat) {
      return (
        lon < 72.004 || lon > 137.8347 || lat < 0.8293 || lat > 55.8271 || false
      );
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