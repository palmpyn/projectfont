<template>
    <div>
        <NavbarSt />
    <v-container>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>รหัสผ่านเดิม</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required ]"
                    :type="show1 ? 'text' : 'password'"
                    name="oldpassword"
                    
                    @click:append="show1 = !show1"
                ></v-text-field>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>รหัสผ่านใหม่</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    name= "newpssword"
                    hint="At least 8 characters"
                    @click:append="show2 = !show2"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader> ยืนยันรหัสผ่าน </v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    name="confirmpassword"
                    hint="At least 8 characters"
                    @click:append="show3 = !show3"
                ></v-text-field>
            </v-col>
        </v-row> -->
        <v-row>
            <v-col cols="6" sm="3">
                <v-btn color="success">ยืนยัน</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-btn color="error">ยกเลิก</v-btn>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
  export default {
    components : {
        NavbarSt
    },
    data () {
      return {
        show1: false,
        //show2: false,
        //show3: false,
         rules: {
           required: value => !!value || 'Required.',
        //   min: v => v.length >= 8 || 'Min 8 characters',
        //   emailMatch: () => ('The email and password you entered don\'t match'), 
         },
      }
    },
  }
</script>