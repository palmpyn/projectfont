<template>

  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>

      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon >mdi-logout-variant</v-icon>
      </v-btn>
      </v-app-bar>
      

<v-navigation-drawer
      v-model="drawer"
      app class = "indigo"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item>
            <v-list-item-title @click="ActivityRouter">กิจกรรมทั้งหมด</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>กิจกรรมมหาวิทยาลัย</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title> Scan QRCode </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="ChangeRouter"> เปลี่ยนรหัสผ่าน </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="CreatRouter"> สร้างกิจกรรม </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
        ActivityRouter () {
            this.$router.push({name: 'HomeAdmin'})
        },
        CreatRouter(){
          this.$router.push({name: 'InsertActivity'})
        },
        ChangeRouter(){
          this.$router.push({name: 'Changepassword'})
        }
    }
  }
</script>