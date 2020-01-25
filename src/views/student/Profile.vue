<template>
    <div>
        <NavbarSt />
    <v-container>
        <v-btn icon right @click="isEditing = !isEditing">
                     <v-icon large v-if="isEditing" >mdi-close</v-icon>
                     <v-icon large v-else>mdi-pencil</v-icon>             
        </v-btn>
        <v-row>
            <v-col cols="6" sm="3">
                <p >ชื่อ</p >
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{first}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="first"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col cols="6" sm="3">
                <p >นาสกุล</p >
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{last}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="last"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>เพศ</vp>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{sex}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="sex"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>ศาสนา</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{religion}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="religion"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>รหัสนักศึกษา</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{st_id}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="st_id"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>สาขา</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{branch}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="branch"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>ชั้นปี</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{year}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="year"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>รหัสบัตรประชาชน</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{idcard}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="idcard"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>โรคประจำตัว</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{disease}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="disease"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>อาหารที่แพ้</p>
            </v-col>
            <v-col cols="6" sm="3">
                <v-text-field
                    <p v-if="this.isEditing==false"> {{food_allergic}}</p>
                    v-if="this.isEditing==true"
                    v-model="food_allergic"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="3">
                <p>ยาที่แพ้</p>
            </v-col>
            <v-col cols="6" sm="3">
                <p v-if="this.isEditing==false"> {{be_allergic}}</p>
                <v-text-field
                    v-if="this.isEditing==true"
                    v-model="be_allergic"
                    shape
                    outlined
                ></v-text-field>
            </v-col>
        </v-row> -->
        <v-spacer></v-spacer>
        <v-row v-if="this.isEditing==true">
            <v-col cols="12" sm="3">
                <v-btn
                    color="success"
                    @click="save"
                >
                บันทึก
                </v-btn>
            </v-col>
            <v-col cols="12" sm="3">
                <v-btn
                    color="error"
                    @click="save"
                >
                ยกเลิก
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
  export default {
    methods: {
        save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
    components : {
        NavbarSt
    },
    data: () => ({
      isEditing: null,
      hasSaved: false,
      first: 'John',
      last: ' ',
      sex: '',
      religion: '',
      st_id:'',
      branch: '',
      year:'',
      idcard:'',
      disease:'',
      food_allergic:'',
      be_allergic:'',

    }),
  }
</script>