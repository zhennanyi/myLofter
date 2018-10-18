const express = require('express');
const pool = require('../pool.js');
const router = express.Router();

router.get("/details",(req,res)=>{
	var id=req.query.id;
	var sql="SELECT pic,id,title,author FROM picurl WHERE id=?"
	pool.query(sql,[id],(err,result)=>{
			if (err) throw err;
			res.send(result)
	})
})

router.get("/drawlist", (req, res) => {
//1参数 pno pageSize
var pno = req.query.pno; //当前页面
var pageSize = req.query.pageSize; //页大小
//2设置参数默认值
if (!pno) {
	pno = 1;
}
if (!pageSize) {
	pageSize = 12;
}
// 此路由为商品首页
// 需求  刷新页面时，首页加载8条数据，点击全部或者搜索时，一页加载16条数据，并且具备分页跳转功能
// 请求全部数据
//4创建两条sql发送  总记录数
//4.1创建空对象保存返回数据
var obj = {
	pno: pno,
	pageSize: pageSize
};
//4.2创建变量保存（sql语句完成）进度
var progress = 0;
//查询所有内容 
var sql = "SELECT count(id) as c FROM picurl";
pool.query(sql, (err, result) => {
	if (err) throw err;
	var pageCount = Math.ceil(result[0].c / pageSize); //算出一共几页
	//  将总页数保存到对象中
	obj.pageCount = pageCount; //保存总页数  
	progress += 50; //记录当前进度
	//  
	if (progress == 100) { //二条sql完成
		res.send({
			msg: obj
		}); //发送结果
	}
})
//创建第二条sql发送 当前页面内容   进行分页查询
var sql = " SELECT id,pic,title,author";
sql += " FROM picurl";
sql += " LIMIT ?,?"
// 查询起点
var offset = parseInt((pno - 1) * pageSize); //start = (页码-1)*count
// 查询终点
pageSize = parseInt(pageSize);
pool.query(sql, [offset, pageSize], (err, result) => {
	if (err) throw err;
	// 将分页查询出来的内容保存到对象中
	obj.data = result; //保存当前页内容
	progress += 50; //进度加50
	if (progress == 100) { //如果二条sql语句全部完成
		res.send({
			msg: obj
		}) //发送
	}
})
});
module.exports = router; //导出路由