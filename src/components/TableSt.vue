<template>
  <div>
    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      :height="height"
    >
      <template v-slot:default >
        <table border="1" cellpadding="3" ref="printTable">
        <thead >
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">รหัสนักศึกษา</th>
            <th class="text-left">สาขา</th>
            <th class="text-left">ชั้นปี</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.st_id }}</td>
            <td class="text-left">{{ item.branch }}</td>
            <td class="text-left">{{ item.year }}</td>
          </tr>
        </tbody>
        </table>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dense: false,
      fixedHeader: true,
      height: 300,
      desserts: [
        {
          name: 'Frozen Yogurt',
          st_id: 159,
          branch: 'วิทยาการคอม',
          year: 2
        },
        {
          name: 'Ice cream sandwich',
          st_id: 237,
          branch: 'c;f]hv,',
          year: 1
        },
        {
          name: 'Eclair',
          st_id: 262,
          branch: ';yl',
          year: 4
        },
        {
          name: 'Cupcake',
          st_id: 305,
        },
        
      ],
    }),
  }
</script>