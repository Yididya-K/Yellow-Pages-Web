<template>
  <v-app>
    <notifications group="http" position="top center" class="my-5" :max="5" />
   <Appbar/>

    <v-content>
 <router-view/>
    </v-content>
  </v-app>
</template>

<script>

 import Appbar from "./components/Appbar"
export default {
  name: "App", 
    components: {
     
     Appbar
    },
  data: () => ({
    //
  })
};
</script>
