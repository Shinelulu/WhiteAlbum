<template>
  <div id="earth-main-panel"></div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  mounted() {
    this.initEarth();
  },
  methods: {
    ...mapMutations("aoi", ["setEarthReady"]),
    initEarth() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMGEzMzc1Ni0wODMxLTQyY2MtODZkZC1mNGE1MjQ1MTYyMmMiLCJpZCI6ODQ1NCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MTk2OTAwM30.AQqkmed4H2zqHmb-Z4ZxIYeBu0KNSiadgDHtmQv9wDY";
      earth = new Cesium.Viewer("earth-main-panel", {
        terrainProvider: Cesium.createWorldTerrain({
          requestWaterMask: true,
          requestVertexNormals: true //光照信息
        }),
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
          // 地图模式1
          // url: "https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}&scale=1&ltype=11",
          // 地图模式2
          url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
          // 卫星模式
          // url: "https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
          // tilingScheme: new Cesium.WebMercatorTilingScheme()
          // minimumLevel: 1,
          // maximumLevel: 20
        }),
        animation: false,
        timeline: false,
        baseLayerPicker: false,     //隱藏基礎影像選擇
        // fullscreenButton: false,
        navigationHelpButton: false
      });
      earth.scene.globe.enableLighting = true;
      this.setEarthReady();
    }
  }
};
</script>

<style>
#earth-main-panel {
  position: absolute;
  background-color: aquamarine;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.cesium-widget-credits {
  display: none !important;
  visibility: hide !important;
}
</style>