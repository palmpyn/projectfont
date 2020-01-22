<template>
    <div>
        <NavbarAdmin />
        <v-row>
            <v-col>
                รายชื่อนักศึกษาที่ลงทะเบียน
            </v-col>
            <v-col>
                <button @click="printData">Print me</button>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <TableSt />
    </div>
</template>
<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import TableSt from '@/components/TableSt'
export default {
    components: {
        NavbarAdmin,
        TableSt
    },
//     methods:{
//   printData()
//   {
//     var divToPrint= this.$refs.printTable
//     newWin= window.open("");
//     newWin.document.write(divToPrint.outerHTML);
//     newWin.print();
//     newWin.close();
//   }
//     },
}
</script>