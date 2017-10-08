<template>
  <div class="main">
    <h1>iPhone</h1>
    <b-form @submit="onSubmit">
      <div class='carousel-wrapper'>
        <Carousel perPage='1' navigationEnabled=true minSwipeDistance=1000>
          <Slide>
            <b-form-group label="Recipient Name:" label-for="Recipient">
              <b-form-input id="Recipient" type="text" v-model="form.name" required placeholder="Last Name, First"></b-form-input>
              </b-form-group>
            <b-form-group label="Recipient Manager:" label-for="Manager">
              <b-form-input id="Manager" type="text" v-model="form.manager" required placeholder="Last Name, First"></b-form-input>
            </b-form-group>
            
            <b-container><b-row><b-col><b-form-group label="Cost Center:" label-for="Cost">
              <b-form-select id="Cost" :options="payments" required disabled v-model="form.payment"></b-form-select>
            </b-form-group></b-col>
            <b-col></b-col><b-form-group label="Atn Cost Center:" label-for="Att">
              <b-form-input id="Att" type="text" v-model="form.Atn"></b-form-input>
            </b-form-group></b-row></b-container>            
          </Slide>
          <Slide>
            <b-form-group label="Phone Company Selector" label-for='Company'><b-form-select :options="companies" v-model='form.company'></b-form-select></b-form-group>
            <b-container>
              <b-row>
                <b-col>
                  <b-form-group label="Service Contract" label-for='Contract'><b-form-select :options="phoneOpts['Service Contract']"></b-form-select></b-form-group>
                  <b-form-group label="Upgrade / Replacement" label-for='Upgrade'><b-form-select :options="phoneOpts['Upgrade / Replacement']"></b-form-select></b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Phones" label-for='Phones'><b-form-select :options="phoneOpts['Phones']"></b-form-select></b-form-group>
                  <b-form-group label="Accessories" label-for='Accessories'><b-form-select :options="phoneOpts['Accessories']"></b-form-select></b-form-group>
                </b-col>                
              </b-row>
              <b-row><b-form-textarea style='width:100%':rows="3" :max-rows="6"></b-form-textarea></b-row>
            </b-container>
          </Slide>
          <Slide>
            <b-card class='text-center' bg-variant="success" title='You qualify for an upgrade'></b-card>
            <b-card class='text-center' bg-variant="warning">By purchasing today you are agreeing to our <a href="#">terms of services</a>.</b-card>
            <div style="right:-1300px;bottom:7px;position:fixed;"><b-button variant="primary" size='lg' style='right:7px;bottom:7px'>Submit</b-button></div>
            </b-row>
          </Slide>
        </Carousel>
      </div>
    </b-form>
  </div>
</template>

<script>
import { Slide } from 'vue-carousel'
import Carousel from './carousel'
import phoneOpts from '@/data/iPhone_fields'

export default {
  name: 'checkout',
  data () {
    return {
      form: {
        manager: '',
        name: '',
        payment: 'default',
        company: null,
        atn: ''
      },
      payments: [
        { text: 'CHASE CREDIT **** **** **** 1234', value: 'default' },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      companies: [
        { text: 'Company', value: null },
        'Att', 'Verizon', 'T-Mobile', 'Sprint'
      ],
      phoneOpts
    }
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-wrapper{
  text-align: left;
  width: 50%;
  margin: auto auto 20px;
}
</style>
