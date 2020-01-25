<template>
  <div>
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default >
        <thead >
        <tr>
            <th class="text-left">ชื่อกิจกรรม</th>
            <th class="text-left">วันที่</th>
            <th class="text-left">จำนวนคน</th>
            <th class="text-left">รายละเอียดกิจกรรม</th>
            <!-- <th class="text-left">บันทึกกิจกรรม</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.time }}</td>
            <td class="text-left">{{ item.people }}</td>
            <td class="text-left">
                <v-btn icon >
                    <v-icon @click="ViewRouter">mdi-file-document-box-outline</v-icon>
                </v-btn>
            </td>
            <!-- <td>
                <v-btn icon class="text-left" @click="isEditing = !isEditing">
                     <v-icon large v-if="isEditing">mdi-star</v-icon>
                     <v-icon large v-else>mdi-star-outline</v-icon>
                     
                </v-btn>
            </td> -->
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
  export default {
  methods: {
      save() {
      },
      ViewRouter(view){
            this.$router.push({name: "viewst"})
            console.log(view)
        },
    },
    data: () => ({
      dense: false,
      fixedHeader: true,
      isEditing: null,
      desserts: [
       {
          name: 'โครงการปฐมนิเทศภายในคณะวิทยาศาสตร์และเทคโนโลยี',
          time: '12 กุมภาพันธ์ 2563',
          people: 24/120,
        },
        {
          name: 'วันรพีรำลึก ประจำปี 2563',
          time: '12 กุมภาพันธ์ 2563',
          people: 24/120,
        },
      ],
    }),
  }
</script>