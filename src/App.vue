<template>
  <div id="app">
  <toolbar/>
    <router-view></router-view>
  <customer-service/>
  </div>
</template>

<script>
import toolbar from '@/components/toolbar'
import customerService from '@/components/customer-service'
export default {
  name: 'app',
  components: {
    toolbar,
    customerService
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
