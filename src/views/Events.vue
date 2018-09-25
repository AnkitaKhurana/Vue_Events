<template>
<div>
<h1>Events</h1> 
<div class="outer">
        <dir v-for="event in events" :key="event.id" > 
           <EventCard :event="event" @registration="handleregistration"/>
        </dir>
        </div>
        </div>
</template>

<style>
.outer {
  display: flex;
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
      events: json
    };
  },
  components: {
    EventCard
  },
  methods: {
    handleregistration: function(event) {
      if (event.attending == true) {
        event.attending = false;
      } else {
        event.attending = true;
      }
     this.events[event.id].attending = event.attending ;
    }
  }
};
</script>