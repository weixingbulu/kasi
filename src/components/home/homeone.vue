<template v-slot:sheji> 
   <div class="homeone" @click="homeidclick()">
     <slot name="hoemsonsl">
        <home-son></home-son>
     </slot>

     <slot name="aboutson">
           22222222
     </slot>
</div>
   
</template>

<script>
import Home from '../../views/Home.vue'
import HomeSon from './homeson.vue'
export default {
    name:'HomeOne',
    props:{
        path:{
            type:String
        }
    },
    data(){
        return {
            homeid:this.path
        }
    },
    methods:{
        homeidclick(){
            // console.log(this.homeid)
            this.$router.push(this.homeid)
        }
    },
    components:{
        Home,
        HomeSon
    }
}
</script>
