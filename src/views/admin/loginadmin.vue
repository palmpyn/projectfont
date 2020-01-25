<template>
    <div>    
        <h2>เข้าสู่ระบบ</h2>
        <v-row>
            <v-col>  
        <v-form>
          <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    shape
                    outlined
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    shape
                    outlined
            ></v-text-field>
        </v-form>
        </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" @click="LoginRouter">เข้าสู่ระบบ</v-btn>
    </div>
</template>
<script>
export default {
    methods:{
        LoginRouter(){
            this.$router.push({name:"HomeAdmin"})
        }
    },
    data: ()=>({
        show1: false
    })
}
</script>