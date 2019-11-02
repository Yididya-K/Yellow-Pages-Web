<template>
<v-container class="my-12">
    <v-card  width="400" class="mx-auto" mt-10>
  
<v-card-title>
    <h1 class="display-1">Register</h1>
</v-card-title>
<v-card-text>
    <v-form lazy-validation>
        <v-text-field v-model="username" label="Username"
        :rules="usernameRules"
        prepend-icon="mdi-account-circle"/>
          <v-text-field  v-model="email" label="Email"
          :rules="emailRules"
        prepend-icon="mdi-email"/>
       <v-text-field 
        :type="showPassword ? 'text':'password'"
        label="Password"
        prepend-icon="mdi-lock"
        :rules="passwordRules"
        :append-icon="showPassword ? 'mdi-eye' :'mdi-eye-off'"
        @click:append="showPassword=!showPassword"/>
          <v-text-field 
        :type="showPassword ? 'text':'password'"
        label="Confirm Password"
        :rules="passwordRules"
        v-model="password"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' :'mdi-eye-off'"
        @click:append="showPassword=!showPassword"/>
    </v-form>
</v-card-text>
    <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn color="success" @click="register()">Register</v-btn>
      
       
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
         usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'user name must be less than 10 characters',
      ],
        password:null,
        passwordRules:[
          v =>!!v || 'Pasword is required',
        ],
        email:null,
        emailRules: [
        v => !!v || ' E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        valid: true,
     
     
     
    }),
    methods:{
     async register(){
        await serviceAPI.register({username:this.username,password:this.password,email:this.email});
       this.$router.replace({path:"login"})

      }

    }
}
</script>