<template>
    <div>
        <NavbarAdmin />
        <v-row>
            <v-col class="center">กิจกรรมทั้งหมด
            </v-col>
        </v-row>
        <TableActivityAdmin />
    </div>
</template>
<script>
import NavbarAdmin from '@/components/NavbarAdmin'
import TableActivityAdmin from '@/components/TableActivityAdmin'
export default {
    name: 'HomeAdmin',
    components: {
        NavbarAdmin,
        TableActivityAdmin
    }
}
</script>