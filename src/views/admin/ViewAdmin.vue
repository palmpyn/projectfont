<template>
  <div>
    <NavbarAdmin />
          <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">รายละเอียดกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <v-btn icon right @click="isEditing = !isEditing">
                     <v-icon large v-if="isEditing" >mdi-close</v-icon>
                     <v-icon large v-else>mdi-pencil</v-icon>             
        </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    <v-container>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชื่อกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{title}}</p>
          <v-text-field v-if="this.isEditing==true" v-model="title" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ประเภทกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{type}}</p>
          <v-select :items="type" label="-" v-if="this.isEditing==true" dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ด้านกิจกรรม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{type}}</p>
          <v-select :items="type" v-if="this.isEditing==true" label="-" dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ปีการศึกษา</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{syear}}</p>
          <v-text-field v-if="this.isEditing==true" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">เทอม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{term}}</p>
          <v-select :items="term" v-if="this.isEditing==true" label="-" dense outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชั่วโมงที่ได้รับ</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{hour}}</p>    
          <v-text-field v-if="this.isEditing==true" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">วันที่</v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{datea}}</p>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            v-if="this.isEditing==true"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                :append-icon="'mdi-calendar'"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">เวลา</v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{time}}</p>
          <v-text-field v-if="this.isEditing==true" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">คำอธิบายเพิ่มเติม</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{detail}}</p>
          <v-textarea v-if="this.isEditing==true" outlined></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">สถานที่</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{place}}</p>
          <v-text-field v-if="this.isEditing==true" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">จำนวนคน</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left" v-if="this.isEditing==false">{{people}}</p>
          <v-text-field v-if="this.isEditing==true" outlined shaped></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <p class="text-sm-left">ชั้นปี</p>
        </v-col>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
         <p class="text-sm-left" v-if="this.isEditing==false">{{year}}</p>
          <v-checkbox v-text-field v-if="this.isEditing==true" label="ปี 1" ></v-checkbox>
          <v-checkbox v-text-field v-if="this.isEditing==true" label="ปี 2"></v-checkbox>
          <v-checkbox v-text-field v-if="this.isEditing==true" label="ปี 3"></v-checkbox>
          <v-checkbox v-text-field v-if="this.isEditing==true" label="ปี 4"></v-checkbox>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="6" xs="3" sm="3" md="6" lg="6" xl="6">
          <v-btn icon right @click="isEditing = !isEditing" @click.stop="dialog = true">
              <v-icon large v-if="this.isEditing==false" >mdi-delete-outline</v-icon>         
        </v-btn>
        </v-col>
      </v-row>
        <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">ต้องการลบกิจกรรม</v-card-title>
        <v-card-text>
          <v-form>
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

          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            ยกเลิก
          </v-btn>

          <v-btn
            color="success"
            text
            @click="dialog = false"
          >
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      <!-- <Googlemap /> -->
    </v-container>
  </div>
</template>


<script>
import NavbarAdmin from '@/components/NavbarAdmin'
// import Googlemap from '@/components/Googlemap'
export default {
  components:{
      NavbarAdmin,
      // Googlemap
  },
  data: () => ({
    title: "วันรพีรำลึก",
    type:"",
    syear:"",
    term:"",
    hour:"",
    datea:"",
    time:"",
    detail:"",
    place:"",
    people:"",
    isEditing: null,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    dialog: false
  }),
  methods: {
        save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
  }
};
</script>