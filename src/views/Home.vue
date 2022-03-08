<template>
  <div class="home">

      <home-one slot="homesonsl" path="/home">
      
      </home-one>

      <home-one slot="about" path="/about">
            
      </home-one>


      <div v-for="item in shopinfors" :key="item.cat_id">
        <li>{{item.cat_name}}</li>

      </div>

  </div>
</template>

<script>
// @ is an alias to /src

import HomeOne from '../components/home/homeone.vue'
import About from './About.vue'
export default {
  name: 'Home',
  data(){
    return{
      active:0,
      shopinfors:[],
      items:[{text:'1'},{text:'分组2'}],
    }
  },
  created(){
     this.shopinfo()
  },
  methods:{
    shopinfo(){
      this.$infofun({
        URL:''
      }).then((res)=>{
        this.shopinfors = res.data.message
      })
    },
    shopinforone(){
      this.shopinfors.forEach(element => {
        
      });
    }
  },
  components: {
    HomeOne,
    About
  }
}
</script>
<style scoped>

*{
  margin: 0;
  padding: 0;
}
.home{
  background-color: aquamarine;
}
</style>
