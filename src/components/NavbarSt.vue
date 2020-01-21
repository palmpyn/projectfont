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
        <v-icon>mdi-logout-variant</v-icon>
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

          
          <v-dialog v-model="dialog" persistent max-width="290">
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
    </v-dialog>
        
          <v-list-item>
            <v-list-item-title> โปร์ไฟล์ </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>กิจกรรมทั้งหมด</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>กิจกรรมมหาวิทยาลัย</v-list-item-title>
          </v-list-item>


          <v-list-item>
            <v-list-item-title> QRCode </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title> เปลี่ยนรหัสผ่าน </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title> Transcript </v-list-item-title>
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
      
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>