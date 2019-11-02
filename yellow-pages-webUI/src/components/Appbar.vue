<template>
<div>
 <v-app-bar app color="yellow ">
        
      <v-toolbar-title v-if="!token" class="headline text-uppercase">
          <v-btn to="/" text>
        <span><v-icon left>mdi-book</v-icon>Yellow</span>
        <span class="font-weight-light">pages</span>
          </v-btn>
      </v-toolbar-title>
      <v-toolbar-title v-if="token" class="headline text-uppercase">
          <v-btn to="/adminHome" text>
        <span><v-icon left>mdi-book</v-icon>Yellow</span>
        <span class="font-weight-light">pages</span>
          </v-btn>
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
        <v-btn  v-if="token" to="/serviceUpload" class="ma-2"  text color="black">
      <v-icon left>mdi-upload</v-icon>Upload
    </v-btn>
        <v-btn v-if="token " class="ma-2" @click="logout()" text color="black">
      <v-icon left>mdi-logout</v-icon>Logout
    </v-btn>

     <v-btn v-if="!token ||login" to="/login" class="ma-2" text color="black">
      <v-icon left>mdi-login</v-icon>Login
    </v-btn>
        
    </v-app-bar>
  
</div>
    </template>
<script>
export default {
    data: () => ({
      login:false,
    }),
     methods:{
        async logout(){
           localStorage.removeItem('token');
              this.login=true;
            this.$router.replace('/');
            this.$destroy();
        }
    },
    computed:{
      token(){
        return localStorage.getItem('token');
      }
    }
}
</script>