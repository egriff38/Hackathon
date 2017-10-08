
<script>
import { Slide } from 'vue-carousel'
import Carousel from './Carousel'
export default {
  name: 'suggestion-carousel',
  props: ['title', 'suggestions'],
  components: {
    Slide,
    Carousel
  },
  computed: {
    sugg () {
      return this.suggestions.split(' ').map(s => s.replace(/\//g, ' '))
    }
  }
}
</script>
<template>
  <b-card class='parent'><h3>{{title}}</h3>
  <hr>
  <carousel perPage='5'><Slide v-for='s in sugg'><b-card class='child'><p v-if='s=="iPhone"'><router-link to='/products/iPhone'>{{s}}</router-link></p><p v-else>{{s}}</p></b-card></Slide></carousel> 
  </b-card>

</template>

<style scoped>
.parent {
  width:95%;
  margin: 20px 20px;
  height: 220px;
  background-color: #B3E5FC
}
p{
  margin-right: 5px; 
  width: 10rem;
  font-size: 10pt !important;
  height: 100%;
}
.child{
  margin-left:10px;
}
</style>
