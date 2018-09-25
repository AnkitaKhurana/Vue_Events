<template>
     <div class="card">       
         <h1> {{event.name}} </h1>        
         <img :src=event.img_url class="image">  
         <h4>Have you registetered for the event yet? {{event.attending}} </h4>
         <p>{{event.description}}</p>
         <div class="buttons"> 
         <button @click="register" :event=event >Register/Deregister</button>
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
import json from "@/data.json";
import EventCard from "@/components/EventCard";
export default {
  name: "events",
  data: function() {
    return {
      title: "Application",
      event: json[this.$route.params.id - 1]
    };
  },
  components: {
    EventCard
  },
  methods: {
    register: function() {
      if (this.$data.event.attending == true) {
        this.$data.event.attending = false;
      } else {
        this.$data.event.attending = true;
      }
    }
  }
};
</script>