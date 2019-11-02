import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: '#FBC02D',
        secondary: '#8c9eff',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  }
});

