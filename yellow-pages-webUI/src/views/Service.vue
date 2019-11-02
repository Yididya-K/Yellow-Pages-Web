<template>
  <v-container>
       <v-text><h1>{{$route.query.service}}</h1></v-text>
      <v-layout row wrap>
          <v-flex xs12 v-for="(service,index) in services" :key="index">
              <v-card class="my-2 mx-auto"> 
                  <v-container fluid>

                      <v-layout row>
                         <v-flex xs5 sm4 md3> 
                              <v-img
   height="150"
      :src="service.imageUrl"
    ></v-img>
                          </v-flex>
                          <v-flex xs7 sm8 md9 >
                              <v-card-title class="headline">{{service.name}}</v-card-title>

            <v-card-subtitle>{{service.desc}}</v-card-subtitle>

            <v-card-actions class="ml-0">
                
              <v-btn text color="orange " :to="{path:'serviceDetail' ,query:{id:service.id,service:$route.query.service}}">View Detail</v-btn>
            </v-card-actions>

                          </v-flex>
                      </v-layout>
                  </v-container>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import serviceAPI from '../api/index';
export default {
data: () => ({
    services:[]
  }),
    async mounted(){
this.services = (await serviceAPI.all(this.$route.query.service)).data;
    }
}
</script>

<style>

</style>