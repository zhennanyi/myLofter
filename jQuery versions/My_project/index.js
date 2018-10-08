// console.log('this is myproject');
// 使用Node+Express创建web服务器
//  接收客户端htt请求（req），输出http相应（res）
const http =require('http');
const express =require('express');
var app=express();
const port = 1234; // 1-65535
 var server=http.createServer(app);//创建web服务器
server.listen(port,()=>{
    console.log('Server listening on',port)
});

//争对客户端的不同请求，输出不同的响应消息
app.get('/',(req,res)=>{
    res.send('welcome to tongyu`s homepage');
});