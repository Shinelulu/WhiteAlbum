import Vue from "vue";
import Vuex from "vuex";
import aoi from "./aoi";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        aoi
    }
});
