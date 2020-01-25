<template>
  <div>
  <NavbarSt />
  <v-container>
      <v-row>
        <v-col>
          <p class="text-sm-left">รายละเอียดกิจกรรม</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ชื่อกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{title}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ประเภทกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{type}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ด้านกิจกรรม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{type}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ปีการศึกษา</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{syear}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">เทอม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{term}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ชั่วโมงที่ได้รับ</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{hour}}</p>    
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">วันที่</v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{date}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">เวลา</v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{time}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">คำอธิบายเพิ่มเติม</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{detail}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">สถานที่</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{place}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">จำนวนคน</p>
        </v-col>
        <v-col cols="6" sm="3">
          <p class="text-sm-left" >{{people}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="3">
          <p class="text-sm-left">ชั้นปี</p>
        </v-col>
        <v-col cols="6" sm="3">
         <p class="text-sm-left" >{{year}}</p>
        </v-col>
      </v-row>
      </v-container>
    </div>
</template>
<script>
import NavbarSt from '@/components/NavbarSt'
export default {
  components:{
    NavbarSt,
  },
  data: () => ({
    title: "วันรพีรำลึก",
    type:"",
    syear:"",
    term:"",
    hour:"",
    date:"",
    time:"",
    detail:"",
    place:"",
    people:"",
  })
};
</script>