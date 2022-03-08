import axios from 'axios';
export default {
    infofun(config){
        let typelist = axios.create({
            baseURL:'https://api-hmugo-web.itheima.net/api/public/v1/categories',
            timeout:5000
        })
        return typelist(config)
    },
    infotwo(config){
        let typetwo = axios.create({
            baseURL:'https://dsshop.csdeshang.com/api/Goodsclass/index',
            timeout:5000
        })
        return typetwo(config)
    }
}