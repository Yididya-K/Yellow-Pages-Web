<template>
<div>
        <v-row align="center" justify="center">
    <v-img
      src="../assets/hannah-busing-0BhSKStVtdM-unsplash.jpg"
   
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="100%"
      max-height="250"
    ></v-img>
  </v-row>
  <v-container>
<v-row justify="space-around mt-10" >
  <v-tooltip right>
     <template v-slot:activator="{ on }">
        <span v-for="(service,index) in services" :key="index">
         <v-btn  :to="service.link" class="mx-2" fab dark x-large color="yellow" >
      <v-icon color="black" dark>mdi-{{service.icon}}</v-icon>
    </v-btn>  
    <h3 class="ml-5 mt-2">{{service.icon}}</h3>
        </span>
      </template>
      <span>Right tooltip</span>
    </v-tooltip>
  
  </v-row>
  </v-container>
  <v-spacer></v-spacer>
  <v-row justify="center">
   <v-img
      src="../assets/3d_sunflowers-1920x1080.jpg"
      aspect-ratio="1"
      class="grey lighten-2 mx-2 mt-10"
      max-width="300"
      max-height="180"
      
    ></v-img>
<v-card  color="yellow" width="400" class="mx-2 mt-10">
    <v-card-text class="font-weight-bold" >
      <p >Welcome to yellow pages
        small buisness directory where you can find your what you are looking for
      </p>
    </v-card-text>
  </v-card>
  </v-row>
</div>
</template>

<script>
export default {
  data: () => ({
    services:[{icon:'bank',link:'adminService?service=Banks'},{icon:'hospital',link:'adminService?service=Health'},{icon:'food',link:'adminService?service=Resturants'},{icon:'school',link:'adminService?service=Schools'}]
  })
};
</script>
