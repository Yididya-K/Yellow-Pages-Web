<template>
  <div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 20%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true}">
          <div>
            Location for {{$route.query.serviceName}}
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker,  LTooltip } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 13,
      center: latLng(parseFloat(this.$route.query.lat), parseFloat(this.$route.query.lng)),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: [parseFloat(this.$route.query.lat), parseFloat(this.$route.query.lng)],
      currentZoom: 13,
      currentCenter: latLng(parseFloat(this.$route.query.lat), parseFloat(this.$route.query.lng)),
      showParagraph: false,
      mapOptions: {
        zoomControl:true,
        zoomSnap:true,
        attributionControl:true
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
  }
};
</script>