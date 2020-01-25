<template>

  <div>
    <div>
    <v-app-bar
      class="toolbarnav"
      
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
        <v-icon @click="LogoutRouter">mdi-logout-variant</v-icon>
      </v-btn>
      </v-app-bar>
    </div>

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

          <!-- <v-list-item>
            <v-list-item-title>กิจกรรมมหาวิทยาลัย</v-list-item-title>
          </v-list-item> -->

          <v-menu bottom :offset-x="offset">
      <template v-slot:activator="{ on }">
        <v-btn
          text
          dark
          v-on="on"
        >
          Dropdown
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in type"
          :key="index"
          @click="a"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

          <!-- <v-list-item>
            <v-menu
              offset-y
              content-class="dropdown-menu"
              transition="slide-y-transition">
              <v-btn
                slot="activator"
                color="success"
                text
                class="text-left"
              >
              Dropdown
              </v-btn>
              <v-card>
                <v-list dense>
                  <v-list-tile
                    v-for="notification in notifications"
                    :key="notification"
                  >
                  </v-list-tile>
                </v-list>
              </v-card>
          </v-menu>
          </v-list-item> -->

          <!-- <v-list-item>
            <v-list-item-title class="white--text"> Scan QRCode </v-list-item-title>
          </v-list-item> -->

          <v-list-item>
            <v-list-item-title class="white--text" @click="ChangeRouter"> เปลี่ยนรหัสผ่าน </v-list-item-title>
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
      // notifications: [
      //   'Mike, John responded to your email',
      //   'You have 5 new tasks',
      //   'You\'re now a friend with Andrew',
      //   'Another Notification',
      //   'Another One'
      // ],
      type: [
        { title: 'กิจกรรมวิชาการและวิชาชีพ' },
        { title: 'กิจกรรมกีฬาและนันทนาการ' },
        { title: 'กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม' },
        { title: 'กิจกรรมเสริมสร้างคุณธรรม จริยธรรม' },
        { title: 'กิจกรรมอนุรักษ์ศิลปวัฒนธรรม' }
      ],
      
      offset: true,
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
          this.$router.push({name: 'Changepasswordadmin'})
        },
        LogoutRouter(){
          this.$router.push({name: 'loginadmin'})
        },

        // change (val) {
        //   console.log('val', val)
        //   this.option = val
        // },
    
        // select () {
        // console.log('doing ', this.option)
        // }
    }
  }
</script>