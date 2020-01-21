<template>
    <div>
        <NavbarSt />
    <v-container>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>ชื่อ</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="first"
                  shape
                  outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>นามสกุล</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="last"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>เพศ</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="sex"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>ศาสนา</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="religion"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>รหัสนักศึกษา</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="idst"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>สาขา</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="branch"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>ชั้นปี</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="year"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>รหัสบัตรประชาชน</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="idcard"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>โรคประจำตัว</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="idcard"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>อาหารที่แพ้</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="idcard"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <v-subheader>ยาที่แพ้</v-subheader>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                  v-model="idcard"
                ></v-text-field>
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
    data: () => ({
      first: 'John',
      //last: 'Doe',
    }),
  }
</script>