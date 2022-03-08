const path = require("path")
        function resolve(dir) {
            return path.join(__dirname, dir);
        }
        
        // 修改完配置文件，要重启！！！
        module.exports = {
            chainWebpack: config => {
                config.resolve.alias
                // set方法需要的是一个绝对路径
                    .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
                    .set('components', resolve('src/components'))
                    .set('views', resolve('src/views'))
                    .set('assets', resolve('src/assets'))
                    .set('network', resolve('src/network'))
                    }}