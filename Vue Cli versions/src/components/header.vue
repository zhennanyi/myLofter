<template>
	<div class="mynav" @click="drop(8)">
		<div class="logo">
			<router-link to="/myhome" @click="test()" class="text1"><img src="http://127.0.0.1:5000/img/entrypage/hdlogo_2x.png"></router-link>
			<ul class="list-unstyled">
				<li v-for="item in nav">
					<router-link :to="item.url" class="text1">{{item.title}}</router-link>
				</li>
				<li>
					<!-- 设置点击之后收起下拉栏 -->
					<a href="#" class="text1" @click="drop(0)">更多</a>
				</li>
				<!--创建一个下拉菜单-->
				<div class="dropdown hide" :class="show[0]" id="bb">
					<ul class="pull_list">
						<li v-for="item in list" @click="drops()">
							<a></a>
							<router-link :to="item.url">{{item.title}}</router-link>
						</li>
					</ul>
				</div>
			</ul>
			<!--<div href="" class="icon1"></div>-->
			<!--创建一个下拉菜单-->
			<!-- 搜索框内容 -->
			<div class="input">
				<div class="icon1"></div>
				<input type="text" placeholder="搜索用户、标签" class="aaa" @click="drop(1)">
				<!-- 右侧new图标 -->
				<!-- <div class="icon2"></div> -->
				<!--创建一个下拉菜单-->
				<div class="dropdown search-box hide" :class="show[1]">
					<p>我的订阅</p>
					<!-- 通过v-for直接生产10个标签 -->
					<div v-for="i in 10">
						<span></span>
						<div>
							<p>自拍</p>
							<p>{{i}}3{{i}}篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: [
					// 数组中直接通过下标值存放class样式名
				],
				// 存放导航栏
				nav: [{
						url: "/myhome",
						title: "首页"
					},
					{
						url: "/myhome",
						title: "浏览"
					},
					{
						url: "/myhome",
						title: "APP"
					},
					{
						url: "/myhome",
						title: "话题"
					},
					{
						url: "/myhome",
						title: "达人"
					},
					{
						url: "/myhome",
						title: "设置"
					},
				],
				// 存放标签
				list: [{
						url: "/myhome",
						title: "寻找好友"
					},
					{
						url: "/",
						title: "导入导出"
					},
					{
						url: "/Artcart",
						title: "移动客户端"
					},
					{
						url: "/",
						title: "ART"
					},
					{
						url: "/myhome",
						title: "LOFTCam-用心创造滤镜"
					},
					{
						url: "/myhome",
						title: "UAPP-创建个人应用"
					},
					{
						url: "/myhome",
						title: "帮助个人反馈"
					},
					{
						url: "/entrypage",
						title: "退出"
					},
				]
			};
		},
		methods: {
			test() {
				console.log(75575445)
			},
			// ES6语法，代替arguments,res将所有参数放到一个数组中
			// drop(...res) {
			drop(i) {
				//否则，实现正常的下拉隐藏
				if (i < 3) {
					// 判断当前元素是否已经下拉
					if (this.show[i] != undefined) {
						this.show = []
						console.log(this.show[i])
					} else {
						this.show = []
						this.show[i] = {}
						this.show[i].show = true
						console.log(this.show)
					}
				} else {
					// this.show = []
					// 此处设定条件，当点击其他空白处时，清空数组
				}
			},
			drops() {
				this.show = []
			}
		}
	};
</script>
<style scoped>
	@import "../assets/css/module_header.css";
</style>