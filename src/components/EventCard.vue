<template>
     <div class="card">       
         <h1> {{event.name}} </h1>        
         <img :src=event.img_url class="image">  
         <div class="buttons"> 
         <h4 v-if="event.attending==-1">Current Status: None</h4>
         <h4 v-else-if="event.attending==0">Current Status: Not Interested</h4>
         <h4 v-else-if="event.attending==1">Current Status: Going</h4>
         <h4 v-else>Current Status: Interested</h4>

         <router-link :to="{ name: 'event', params: { id:  event.id } }">Event Details</router-link>
         </div>
     </div>
</template>
<style>
.buttons {
  display: block;
}
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
  // methods: {
  //   register: function() {
  //     this.$emit("registration", this.event);
  //   }
  // }
};
</script>