<template>
  <div class="main">
    <h4 @click='collapse' class="active">Need Help?</h4>
    <div :class='{active:isActive}' class="feedback"></div>
    <input :class='{active:isActive}' value='type to begin speaking...'>
    </div>
</template>

<script>
export default {
  name: 'customer-service',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    collapse () {
      this.isActive ^= true
    }
  }
}
</script>

<style scoped>
.main{
    position: fixed;
    width:25em;
    background-color:#03A9F4;
    border: 1px blue solid;
    bottom:10px;
    right:10px;
    border-radius: 6px;
    box-shadow: 4px 4px teal;
    transition: height 0.3s;
    }
.feedback{
  background-color: #fff;
  width: 80%;
  height: 20em;
  margin-left:auto;
  margin-right: auto;
  margin-bottom: 5px;
}
.main > :not(.active){
  display: none;
  height:0px;
}
input{
  width: 80%;
  margin-bottom: 5px;
}
</style>
