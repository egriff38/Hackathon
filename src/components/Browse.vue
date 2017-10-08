<template>
    <div class="main">
        <h1>Browse Items</h1>
        <b-container fluid>
        <b-row>
        <b-col cols='8'>
          <suggestion-carousel title="Favorites/Saved Items" suggestions='Adobe/Reader Onboarding Facets MiFi Tablet Visio International/Plane/Pass ID/Card Work/At/Home Mustard Printer'></suggestion-carousel>
          <suggestion-carousel title="Reccommended by Order History" suggestions='Mouse Keyboard iPhone Work/At/Home Facets Form/504 ID/Card Microsoft/Office Building/Access HeadSet Sandwich IR/scanner'></suggestion-carousel>
        </b-col>
        <b-col cols='4'><b-card title='Shopping Cart' border-variant="info"><b-list-group><b-list-group-item>iPhone</b-list-group-item>
        <b-list-group-item>iPad</b-list-group-item>
        <b-list-group-item>iWatch</b-list-group-item></b-list-group></b-card></b-col>
        </b-row>
        </b-container>
        <div class='browse'>
          <b-card v-for='(item,i) in items' class='subitem' :title='item.name' bg-variant='primary' border-variant="secondary" :img-src='`/static/${i}.png`' @click="redirect(item.name)"></b-card>
        </div>
    </div>
</template>

<script>
import items from '@/data/groups.json'
import suggCar from './suggestionCarousel'
export default {
  name: 'browse',
  data () {
    return {items}
  },
  methods: {
    redirect (item) {
      console.log(`redirecting to '${item}'`)
      if (item === 'iPhone') this.$router.push('/products/iPhone')
    }
  },
  components: {
    'suggestion-carousel': suggCar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .browse{
      display: grid;
      width: 85%;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 8px;
      margin: auto auto 20px;
      
    }
    .item{
      display: inline-block;
      background-color: lightgray;
      border-radius: 8px;
      padding-bottom: 1em;
    }
    .item > h4 {
      padding-top: 1em;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      margin-top:0px;
      padding-bottom: 1em;
      margin-bottom: 5px;
      background-color: #03A9F4;

    }
    .main{
      margin-bottom: 60px;
    }
</style>
