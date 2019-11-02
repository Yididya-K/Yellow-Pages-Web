<template>
<div id="full_div">
  <Map />
</div>
</template>

<script>
import Map from "../components/Map" 
export default {
components:{
    Map
}
}
</script>

<style>
body {
  margin: 0px;}
  #full_div {
      width:900px;
      height:400px;
  position: absolute;
  overflow-x: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-left: 10%;
  margin-top: 2%;
}
  
</style>