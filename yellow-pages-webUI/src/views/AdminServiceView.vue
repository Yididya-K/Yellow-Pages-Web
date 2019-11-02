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
                          <v-flex xs7 sm8 md9>
                              <v-card-title class="headline">{{service.name}}</v-card-title>

            <v-card-subtitle>{{service.detail}}</v-card-subtitle>

            <v-card-actions class="ml-0">
                 <v-btn text color="orange " :to="{path:'serviceDetail' ,query:{id:service.id,service:$route.query.service}}">View Detail</v-btn>
             <v-btn  :to="{path:'serviceEdit' ,query:{id:service.id,service:$route.query.service}}" class="ma-2"  rounded outlined color="success">
      <v-icon left>mdi-pencil</v-icon> Edit
    </v-btn>
        
             
     <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="ma-2"  rounded outlined color="error">
      <v-icon left>mdi-delete</v-icon> Delete
    </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Confirmation
        </v-card-title>

        <v-card-text>
          Are you sure you want to delete this post
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="deleteService(service.id)"
          >
            Delete
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
import serviceAPI from "../api/index";
export default {
    data: () => ({
    services:[],
    kk: 1
  }),
         async mounted(){
this.services = (await serviceAPI.all(this.$route.query.service)).data;
    },
    methods:{
        async deleteService(id){
            try{
                await serviceAPI.delete(this.$route.query.service,id);
                this.dialog = false;
                this.services = (await serviceAPI.all(this.$route.query.service)).data;
            }
            catch(e){
                this.$notify({
        type: "error",
        group: "http",
        title: "Error on delete",
        text: "try again"
      });
      this.dialog = false;

            }
        }
    }

}
</script>

