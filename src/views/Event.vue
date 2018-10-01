<template>
     <div class="card">       
         <h1> {{event.name}} </h1>        
         <img :src=event.img_url class="image">  
         <h4 v-if="event.attending==-1">Current Status: None</h4>
         <h4 v-else-if="event.attending==0">Current Status: Not Interested</h4>
         <h4 v-else-if="event.attending==1">Current Status: Going</h4>
         <h4 v-else>Current Status: Interested</h4>
         <p>{{event.description}}</p>
         <div class="buttons"> 
         <button @click="Interested" :event=event >Interested</button>
         <button @click="Going" :event=event >Going</button>
         <button @click="NotInterested" :event=event >Not Interested</button>
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
    Interested: function(event) {
      if (this.$data.event.attending == 2) this.$data.event.attending = -1;
      else this.$data.event.attending = 2;
    },
    Going: function() {
      if (this.$data.event.attending == 1) this.$data.event.attending = -1;
      else this.$data.event.attending = 1;
    },
    NotInterested: function() {
      if (this.$data.event.attending == 0) this.$data.event.attending = -1;
      else this.$data.event.attending = 0;
    }
  }
};
</script>