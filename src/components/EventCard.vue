<template>
     <div class="card">       
         <h1> {{event.name}} </h1>        
         <img :src=event.img_url class="image">        
     </div>
</template>


<style>
.image {
  height: 200px;
  width: 200px;
}
</style>

<script>
export default {
  props: {
    event: Object
  }
};
</script>