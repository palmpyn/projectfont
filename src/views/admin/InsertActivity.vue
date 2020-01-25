<template>
<v-form>
    <div>
        <NavbarAdmin />
        <v-container >
            <v-row>
                <v-col cols="6" sm="3">
                    ชื่อกิจกรรม
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    ด้านกิจกรรม
                </v-col>
                <v-col cols="6" sm="3">
                    <v-select
                        :items="type"
                        label="-"
                        dense
                        outlined
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    ประเภทกิจกรรม
                </v-col>
                <v-col cols="6" sm="3">
                    <v-select
                        :items="type"
                        label="-"
                        dense
                        outlined
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    ปีการศึกษา
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    เทอม
                </v-col>
                <v-col cols="6" sm="3">
                    <v-select
                        :items="term"
                        label="-"
                        dense
                        outlined
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    ชั่วโมงที่ได้รับ
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    วันที่
                </v-col>
                <v-col cols="6" sm="3">
                    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
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
                <v-col cols="6" sm="3">
                    เวลา
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    คำอธิบายเพิ่มเติม
                </v-col>
                <v-col cols="6" sm="3">
                    <v-textarea outlined>
                    </v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    สถานที่
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    จำนวนคน
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field
                        outlined
                        shaped
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="3">
                    กำหนดชั้นปี
                </v-col>
                <v-col cols="6" sm="3">
                    <v-checkbox class="mx-2" label="ปี 1"></v-checkbox>
                    <v-checkbox class="mx-2" label="ปี 2"></v-checkbox>
                    <v-checkbox class="mx-2" label="ปี 3"></v-checkbox>
                    <v-checkbox class="mx-2" label="ปี 4"></v-checkbox>
                </v-col>
            </v-row>
            <!--upload file -->
            <!-- <v-row>
                <v-col cols="6" sm="3">
                    ไฟล์กำหนดการ
                </v-col>
                <v-col cols="6" sm="3">
                      <v-file-input
    v-model="files"
    color="deep-purple accent-4"
    counter
    label="File input"
    multiple
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    outlined
    :show-size="1000"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
                </v-col>
            </v-row> -->
            <v-row>
                <v-col cols="6" sm="3">
                    <v-btn 
                     color="success"
                    >สร้างกิจกรรม </v-btn>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-btn 
                     color="error"
                    > ยกเลิก </v-btn>
                </v-col>
            </v-row>
            
        </v-container>
        <button @click="pushRouter">pagehome</button>
    </div>
</v-form>
</template>
<script>
import NavbarAdmin from '@/components/NavbarAdmin'
export default {
    components : {
        NavbarAdmin,
    },
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        type: [
            'กิจกรรมวิชาการและวิชาชีพ',
            'กิจกรรมกีฬาและนันทนาการ',
            'กิจรรมบำเพ็ญประโยชน์หรือรักษาสิ่งแวดล้อม',
            'กิจกรรมเสริมสร้างคุณธรรม จริยธรรม',
            'กิจกรรมอนุรักษ์ศิลปวัฒนธรรม',
        ],
        term: [
            '1',
            '2'
        ],
        files: [],
    }),
    methods: {
        pushRouter () {
            this.$router.push({name: 'home'})
        }
    }

}
</script>