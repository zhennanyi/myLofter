const express = require('express');
const bodyparser = require('body-parser');
const user = require('./routes/user.js'); //引入用户模块
const session = require("express-session"); //引入session
var app = express();


const cors = require("cors");
// 2.2允许哪个地址跨域访问
app.use(cors({
	origin: ["http://localhost:8080"],
	credentials: true
}));

app.listen(5000, () => {
	console.log("服务器创建成功")
});

app.use(express.static('./static'));
// 使用session
app.use(session({
	secret: '随机字符串',
	resave: false,
	saveUninitialized: true
}))


app.use(bodyparser.urlencoded({
	extended: false
}));
//管理路由,把用户模块挂载到某一个url下面
app.use('/user', user);