<template>
  <div class="home">
    <TableActivity />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TableActivity from '@/components/TableActivity'
export default {
  name: 'home',
  components: {
    // HelloWorld
    TableActivity
  }
}
</script>
