<template>
  <div >
    <NavbarSt />
    <TableActivity />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TableActivity from '@/components/TableActivity'
import NavbarSt from '@/components/NavbarSt'
export default {
  name: 'homest',
  components: {
    // HelloWorld
    TableActivity,
    NavbarSt
  }
}
</script>
