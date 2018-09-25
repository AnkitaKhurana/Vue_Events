<template>
     <div class="card">       
         <h1> {{event.name}} </h1>        
         <img :src=event.img_url class="image">  
         <div class="buttons"> 
         <h4>Registration Status: {{event.attending}}</h4>
         <!-- <button :disabled="!{buttonStatus: event.attending}" @click="register" :event="event" >Register</button>  
         <button :disabled="{buttonStatus: event.attending}" @click="register" :event="event" >Deregister</button> -->
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
  },
  // methods: {
  //   register: function() {
  //     this.$emit("registration", this.event);
  //   }
  // }
};
</script>