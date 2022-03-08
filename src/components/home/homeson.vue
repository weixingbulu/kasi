<template v-slot:sheji> 
    <div class="homeson">
        <div class="toubox">
                     <div style="width:10px;height:10px"></div>
            <div class="backgrounbox">
                <div class="touxiang">
                     <img src="../../assets/tka.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="toubox">
                     
        </div>
    </div>
   
</template>

<script>
// import Home from '../../views/Home.vue'
import HomeOne from './homeone.vue'
export default {
    name:'HomeSon',
    data(){
        return {
            
        }
    },
    components:{
        HomeOne
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
img{
    width: 44px;
    height: 44px;
    /* object-fit: contain; */
    object-fit: scale-down;
    display: inline-block;
}
.homeson{
    width: 200px;
    height: 1000px;
    background-color: rgba(0, 0, 255, 0.144);
}
.touxiang{
    width: 44px;
    height: 44px;
    border-radius: 50px ;
    overflow: hidden;
    /* background-color: rgba(255, 255, 255, 0.596); */
}
.backgrounbox{
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-left: 10px;
    /* box-shadow: 0px 0px 50px rgb(255, 255, 255); */
    justify-content: center;
    /* background-color: rgba(255, 255, 255, 0.529); */
}
.toubox{
    width: 75px;
    height: 75px;
    background: rgb(140, 250, 241);
    border-radius: 0 0 30px 0;
}
    
</style>