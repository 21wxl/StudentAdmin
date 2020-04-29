/* 启动入口文件(主文件) */
const express = require('express'),
    //mongoose内以来自动有mongodb,所以不需要再次安装或引入mongodb
      mongoose = require('mongoose'),
      cookieSession = require('cookie-session');

//连接数据库 端口不需要写，最后的反斜杠是操作的数据库名称
mongoose.connect('mongodb://localhost/sm',{useNewUrlParser:true,useUnifiedTopology:true});

//起服务
let app = express();
//设置模板引擎
app.set('view engine','ejs');
//使用session
app.use(cookieSession({
    name  :'sess_id',
    keys : ['key1'],
    maxAge : 30 * 60 * 1000 //30min
}))
//路径清单:


//处理静态资源请求:
app.use(express.static('public'));

//监听端口
app.listen(3000);
console.log('服务器已经启动 端口号为3000')