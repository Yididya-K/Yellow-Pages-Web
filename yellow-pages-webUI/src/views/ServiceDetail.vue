<template>
<v-row justify="space-between">
    
  <v-card
 
    class="mx-auto my-12"
    max-width="600"
  >
      <v-img
        width="100%"
      height="250"
      :src="data.imageUrl"
    ></v-img>
    <v-card-title>{{data.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
        v-if="$route.query.service === 'Resturants'"
          :value="parseFloat(data.rating)"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div v-if="$route.query.service ==='Resturants'" class="grey--text ml-4">{{data.rating}}</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">
       <router-link :to="data.website"> {{data.website}}</router-link>
      </div>

      <div>{{data.desc}}</div>
      <div class="mt-5">
      <v-icon left>mdi-phone</v-icon>{{data.phone}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    

    <v-card-actions>
      <v-btn
        color="orange"
        text
        :to="`serviceLocation?serviceName=${data.name}&lat=${data.location.lat}&lng=${data.location.lng}`"
      >
        <v-icon> mdi-map-marker</v-icon> see on map
      </v-btn>
    </v-card-actions>
  </v-card>
    
    
</v-row>
</template>
<script>
import serviceAPI from '../api/index'
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      data:null,
    }),
    async mounted(){
        this.data = (await serviceAPI.get(this.$route.query.service,this.$route.query.id)).data
    },

    methods: {
     
    },
  }
</script>