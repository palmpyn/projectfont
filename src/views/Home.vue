<template>
  <div class="home">
    <Navbar />
    <TableActivity />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TableActivity from '@/components/TableActivity'
import Navbar from '@/components/Navbar'
export default {
  name: 'home',
  components: {
    // HelloWorld
    TableActivity,
    Navbar
  }
}
</script>
