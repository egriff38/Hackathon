<template>
  
  <div id="container">

    <!-- Top Bar -->
    <div id="banner_grid">
      <div id="banner_logo">
        <img src="../assets/img/logo.png">
      </div>
      <div id="banner_spacer"></div>
      <div id="banner_profile">
        <b>Welcome,</b>
        <div class="inline-block">
          <img src="../assets/img/profile.jpg" class="circle_img">
        </div>
        <div class="inline-block va_middle">Chavez, Hugo</div>
        <b> &#11167;</b>
        <b>|</b>
        <div class="inline-block">
          Log Out
        </div>

      </div>
    </div>

    <!-- Site Navigation -->
    <div id="nav_grid">
      <div id="nav_home" @click="redirect('Home')">
        <img src="../assets/img/icon_home.png" class="circle_icon">
        <br> Home
      </div>
      <div id="nav_repair">
        <img src="../assets/img/icon_repair.png" class="circle_icon">
        <br> Repair
      </div>
      <div id="nav_inventory" @click="redirect('Browse')">
        <img src="../assets/img/icon_inventory.png" class="circle_icon">
        <br> Inventory
      </div>
      <div id="nav_resources">
        <img src="../assets/img/icon_resources.png" class="circle_icon">
        <br> Resources
      </div>
      <div id="nav_approval">
        <img src="../assets/img/icon_approval.png" class="circle_icon">
        <br> Approval
      </div>
      <div id="nav_spacer"></div>
      <div id="nav_search"><input id="nav_search_box" type="text" placeholder="Inventory Search" class="fa fa-search" aria-hidden="true"></div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      items: [
        'Home',
        'Need Help',
        'Order things',
        'How do I',
        'Approval'
      ]
    }
  },
  methods: {
    redirect (item) {
      console.log(`redirecting to '${item}'`)
      if (item === 'Browse') this.$router.push('/Browse')
      if (item === 'Home') this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#container{
  margin-bottom: 15px;
}
body,
#banner_grid {
  margin: 0;
  padding: 0;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 16px;
}

#banner_grid,
#nav_grid {
  display: table;
  width: 100%;
  table-layout: fixed;
}

#banner_logo,
#banner_spacer,
#banner_profile {
  display: table-cell;
  text-align: left;
}

#banner_logo {
  padding: 0.5em;
}

#banner_profile {
  text-align: right;
  vertical-align: top;
  padding: 1em;
  font-size: 1.1rem;
  border-radius: 0.8em 0em 0em 0.8em;
  width: 24em;
}

#banner_profile div {
  color: rgb(51, 102, 187);
  cursor: pointer;
}

.va_middle {
  vertical-align: middle;
}

.inline-block {
  display: inline-block;
  vertical-align: middle;
}

.circle_img {
  border-radius: 50%;
  width: 50px;
  height: auto;
}

.circle_icon {
  width: 50px;
  height: auto;
}


#nav_grid {
  background-color: rgb(0, 124, 195);
  height: 3em;
}


#nav_grid div {
  display: table-cell;
  text-align: center;
  vertical-align: bottom;
  font-size: 1.1rem;
}

#nav_home,
#nav_repair,
#nav_inventory,
#nav_resources,
#nav_approval {
  width: 8rem;
  padding: 0.3em;
  border: 1px solid grey;
  cursor: pointer;
  color: #EEE;
  transition: background-color 0.5s;
}

#nav_home:hover,
#nav_repair:hover,
#nav_inventory,
#nav_resources:hover,
#nav_approval:hover {
  background-color: rgb(0, 94, 165);
  color: #FFF;
  transition: background-color 0.5s;
}

#nav_search {
  width: 396px;
  padding: 0.2em;
  padding-right: 1em;
  vertical-align: middle !important;
}

#nav_search_box {
  width: 100%;
  height: 3em;
  border-radius: 0.6em;
  padding: 0.4em;
  vertical-align: middle;
}

</style>
