<template>
<v-container class="my-12 ">
<v-card class="mx-12" :loading="loading">
  <v-container class="mr-10">
 <v-card-title>
    <h1 class="display-1">Upload Service</h1>
</v-card-title>
<v-row justify="space-between">
      <v-col
        cols="12"
        md="4"
      >
<v-card-text>   
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="website"
     
      label="Webiste"
    ></v-text-field>
 <v-text-field
      v-model="phone"
     
      label="Phone-no"
    ></v-text-field>
    <v-textarea
      v-model="description"
      label="Description"
    ></v-textarea>


    <v-select
      v-model="category"
      :items="select"
      :rules="[v => !!v || 'category is required']"
      label="Category"
      required
    ></v-select>
     <div class="text-center">
    <v-rating v-if="category ===select[2]" v-model="rating"></v-rating>
  </div>
      </v-form>
</v-card-text>
</v-col>
  <v-col cols="12"
        md="7" >
        <v-card-subtitle>
            <h2>location</h2>
        </v-card-subtitle>
        
     <v-row > 
          <v-col cols="12" sm="6">  
    <v-text-field width="40px"
    v-model="lng"
      
     
      label="longtiude"
    ></v-text-field>
          </v-col>
           <v-col cols="12" sm="6">
   <v-text-field width="40px"
      
     
      label="latitude"
      v-model="lat"
    ></v-text-field>
           </v-col>
     </v-row>
<v-layout justify-center>
     <v-img :src="img" height="200" width="200" contain></v-img></v-layout>
<v-file-input @change="changeImage()" v-model="files" prepend-icon="mdi-camera" show-size counter multiple label="File input"></v-file-input>   
<v-divider></v-divider>

    
<v-spacer></v-spacer>
<v-card-actions>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="upload()"
    >
      upload
    </v-btn>

   
    
</v-card-actions>
  </v-col>

</v-row>
  </v-container>
</v-card>
</v-container>
</template>
<script>
import axios from 'axios';
import serviceAPI from '../api'
  export default {
    data: () => ({
      valid: true,
      name:null,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      website:null,
      description:null,
      phone:null,
      rating:0,
      category: null,
      lng:null,
      lat:null,
      files:[],
      imageFile:'',
      loading:false,
      select: [
        'Banks',
        'Health',
        'Resturants',
        'Schools',
      ],
      checkbox: false,
    }),

    methods: {
     changeImage(){
      this.img = URL.createObjectURL(this.files[0]);
    },

      
      async upload(){
        if (this.$refs.form.validate()) {
          try{
             this.loading = true;
        const data = (await serviceAPI.create(this.category,{name:this.name,website:this.website,desc:this.description,phone:this.phone,rating:this.rating, location:{lng:this.lng,lat:this.lat}})).data;
        let formData = new FormData();
        formData.append('image',this.files[0]);
        //eslint-disable-next-line
        console.log(this.imageFile);
        const upload  = (await axios.post(`http://localhost:3000/api/Attachments/images/upload?access_token=${localStorage.getItem('token'
        )}`,formData,{headers:{'Content-Type':'multipart/from-data'}})).data;
        await serviceAPI.update(this.category,data.id,{imageUrl:`http://localhost:3000/api/Attachments/images/download/${upload.result.files.image[0].name}`})
        this.$router.replace({path:"adminHome"})
        this.loading = false;
        }
        catch(e){
          this.loading = false;
          this.$notify({
        type: "error",
        group: "http",
        title: "Error posting service",
        text: "try again later"
      });
        }
        }
      },
     
     
    },
  }
</script>