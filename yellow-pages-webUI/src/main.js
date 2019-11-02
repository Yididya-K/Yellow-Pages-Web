import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";
import { Icon } from 'leaflet'
import "leaflet.icon.glyph";

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
Vue.config.productionTip = false;
Vue.use(Notifications);
export default new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

