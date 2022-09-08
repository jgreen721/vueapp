<template>
  <div class="home-header p-3 bg-danger text-light d-flex align-items-center justify-content-between p-3">
    <h1>{{ msg }}</h1>
    <p @click="this.$store.dispatch('logout')" class="absolute text-dark ms-5">logout</p>
  </div>
</template>


<script>
export default {
  name:"AppHeader",
  props:{
    msg:String
  }
}
</script>

