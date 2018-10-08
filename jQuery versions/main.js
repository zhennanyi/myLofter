const express = require('express');
const bodyparser = require('body-parser');
const user = require('./routes/user.js');//引入用户模块
var app = express();
app.listen(5000,()=>{
	console.log("服务器创建成功")
});


app.use(express.static('./static'));

app.use(bodyparser.urlencoded({
	extended:false
}));
//管理路由,把用户模块挂载到某一个url下面
app.use('/user',user);