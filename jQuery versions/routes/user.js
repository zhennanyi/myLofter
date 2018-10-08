const express = require('express');
const pool = require('../pool.js');
const router = express.Router();
// 验证用户名是否可以注册
router.get('/checkedemail',(req,res)=>{
	var email=req.query.email;
	console.log(email);
	var sql='SELECT * FROM lofteruser WHERE email=?';
	pool.query(sql,[email],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("用户名已注册");
		}
		// else{
		// 	res.send("用户名可用")
		// }
	})
})
// 进行用户注册
router.post('/register',(req,res)=>{
	var email=req.body.email;
	var upwd=req.body.upwd;
	var sql='INSERT INTO lofteruser VALUES(NULL,NULL,NULL,?,?)';
	pool.query(sql,[email,upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send("注册成功");
		}else{
			res.send("注册失败")
		}
	})
})
// 进行用户登录
router.post('/login',(req,res)=>{
	var email=req.body.email;
	var upwd=req.body.upwd;
	var sql='SELECT * FROM lofteruser WHERE email=?';
	 pool.query(sql,[email],(err,result)=>{
		if(err) throw err;
		 if(result[0]==undefined){
			res.send("用户名不存在，请注册后再登录")
		 }else{
			var $upwd=result[0].upwd;
			console.log($upwd);
			if(result.length>0){
				if(upwd==$upwd){
					res.send("homepage.html")
				}else{
					res.send("密码输入错误，请重新输入")
				}
			}
		 }
	 })
	//res.redirect('http://www.codeboy.com..');
});

module.exports = router;  //导出路由