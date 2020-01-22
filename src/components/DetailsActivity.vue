<template>
    <v-container>
        <div>
            <v-row>
                <v-col>
                    <p class="text-sm-left">รายละเอียดกิจกรรม</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="text-sm-left">ชื่อกิจกรรม : 
                        <v-text-field
                            v-model="title" 
                            readonly  
                        ></v-text-field>
                    </p>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
export default {
    data: ()=>({
        title: 'วันรพีรำลึก'
    })
}
</script>