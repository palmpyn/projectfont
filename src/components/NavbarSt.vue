<template>

  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-btn
          icon v-on="on"
          @click.stop="drawer = !drawer"
        >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>

      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="LogoutRouter">mdi-logout-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell-alert-outline</v-icon>
      </v-btn>
      </v-app-bar>
      <v-row justify="space-around">
      <v-col cols="12">

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
          active-class="deep-purple--text text--accent-4"
        >

          
          <!-- <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn  text v-on="on">Open Dialog</v-btn>
        
      </template>
      <v-card>
        <v-card-title class="headline">RMUTP ACTIVITY</v-card-title>
        <v-card-text>
          <v-form>
          <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    shape
                    outlined
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1"   @click="dialog = false">เข้าสู่ระบบ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
        
          <v-list-item>
            <v-list-item-title @click="ProfileRouter"> โปร์ไฟล์ </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="HomeRouter">กิจกรรมทั้งหมด</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>กิจกรรมมหาวิทยาลัย</v-list-item-title>
          </v-list-item>

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

          <v-list-item>
            <v-list-item-title @click="QRRouter"> คิวอาร์โค้ด </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="ChangepasswordRouter"> เปลี่ยนรหัสผ่าน </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="TranscriptRouter"> ทรานสคริปกิจกรรม </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

</v-col>
</v-row>
    
  </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      dialog: false,
      show1: false,
    type: [
        { title: 'กิจกรรมวิชาการและวิชาชีพ' },
        { title: 'กิจกรรมกีฬาและนันทนาการ' },
        { title: 'กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม' },
        { title: 'กิจกรรมเสริมสร้างคุณธรรม จริยธรรม' },
        { title: 'กิจกรรมอนุรักษ์ศิลปวัฒนธรรม' }
      ],
    history:[
        { title: 'กิจกรรมที่บันทึก' },
        { title: 'กิจกรรมที่ลงทะเบียน' },
        { title: 'กิจรรมที่เคยเข้าร่วม' },
      ],
      offset: true,  
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
        ProfileRouter(){
            this.$router.push({name: "Profile"})
        },
        HomeRouter () {
            this.$router.push({name: "homest"})
        },
        ChangepasswordRouter(){
          this.$router.push({name: 'Changepassword'})
        },
        LogoutRouter(){
          this.$router.push({name: 'home'})
        },
        QRRouter(){

        },
        TranscriptRouter(){

        },
    }
  }
</script>