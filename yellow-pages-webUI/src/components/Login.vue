<template>
<v-container class="my-12">
    <v-card  width="400" class="mx-auto" mt-10 :loading="loading">
  
<v-card-title>
    <h1 class="display-1"> Login</h1>
</v-card-title>
<v-card-text>
    <v-form>
        <v-text-field v-model="username" label="Username" type="text"
        prepend-icon="mdi-account-circle"/>
        <v-text-field 
        v-model="password"
        :type="showPassword ? 'text':'password'"
        label="Password"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' :'mdi-eye-off'"
        @click:append="showPassword=!showPassword"/>
    </v-form>
    <v-divider></v-divider>
</v-card-text>
    <v-card-actions>
        <v-btn to="/register" color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="login() ">Login</v-btn>
    </v-card-actions>
        </v-card>
</v-container>

</template>
<script>
import serviceAPI from '../api/index'
export default {
    data:()=>({
        showPassword: false,
        username:null,
        password:null,
        loading:false
    }),
    methods:{
        async login(){
            try{
                this.loading =true;
            const data = (await serviceAPI.login({username:this.username,password:this.password})).data;
            localStorage.setItem('token',data.id);
            this.loading=false;
            this.$router.replace({path:"adminHome"});
             this.$forceUpdate();}
           
            catch(e){
                this.$notify({
        type: "error",
        group: "http",
        title: "Error on loggin",
        text: "mske sure username and password is correct"
      });
      this.loading =false;

            }
        }
    }
}
</script>

  