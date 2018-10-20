const express = require('express');
const pool = require('../pool.js');
// 引入mokc数据
const router = express.Router();
// 验证用户名是否可以注册
router.get('/checkedemail', (req, res) => {
	var email = req.query.email;
	console.log(email);
	var sql = 'SELECT * FROM lofteruser WHERE email=?';
	pool.query(sql, [email], (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.send("用户名已注册");
		}
		// else{
		// 	res.send("用户名可用")
		// }
	})
})
// 进行用户注册
router.post('/register', (req, res) => {
	var email = req.body.uname;
	var upwd = req.body.upwd;
	console.log(email, upwd)
	// 创建session对象
	var sql = 'INSERT INTO lofteruser VALUES(NULL,NULL,NULL,?,?)';
	pool.query(sql, [email, upwd], (err, result) => {
		if (err) throw err;
		console.log(result);
		if (result.affectedRows > 0) {
			res.send("注册成功");
		} else {
			res.send("注册失败")
		}
	})
})
// 进行用户登录
router.get('/login', (req, res) => {
	var email = req.query.uname;
	var upwd = req.query.upwd;
	var sql = 'SELECT * FROM lofteruser WHERE email=?';
	pool.query(sql, [email], (err, result) => {
		if (err) throw err;
		if (result[0] == undefined) {
			res.send("用户名不存在，请注册后再登录")
		} else {
			// 在用户登录时，给当前用户的session中一个属性分配一个值，当用户再次进行其他的操作时
			// 可以通过session的值去查询出当前用户的信息，比如通过现在session的值，去查询数据库当中是否有相应的值，判断用户的登录状态
			req.session.lid = result[0].lid;
			console.log(req.session.lid)
			// 应该打印req.session
			console.log()
			var $upwd = result[0].upwd;
			if (result.length > 0) {
				if (upwd == $upwd) {
					res.send("1")
				} else {
					res.send("密码输入错误，请重新输入")
				}
			}
		}
	})
});
// 写一个新的路由测试sission的用处
router.get("/test", (req, res) => {
	// 此req.session被存储在客户端的cookie中，在当前页面没有被注销的情况下，下次访问时，值会被保存
	if (!req.session.lid == "") {
		var lid = req.session.lid;
		console.log(lid)
		var sql = 'select email FROM lofteruser WHERE lid=?';
		pool.query(sql, [lid], (err, result) => {
			if (result.length > 0) {
				res.send(result)
			}
		})
	} else {
		res.send("用户尚未登录")
	}
})
router.get("/tests", (req, res) => {
	// 此req.session被存储在客户端的cookie中，在当前页面没有被注销的情况下，下次访问时，值会被保存
	if(!req.session.lid==undefined){
		res.send("用户未登陆")
	}else{
		req.session.lid="";
		res.send("注销成功")
	}
})

module.exports = router; //导出路由