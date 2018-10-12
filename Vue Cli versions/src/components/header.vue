<template>
	<div class="mynav" @click="drop(8)">
		<div class="logo">
			<router-link to="/myhome" class="text1"><img src="http://127.0.0.1:5000/img/entrypage/hdlogo_2x.png"></router-link>
			<ul class="list-unstyled">
				<li>
					<router-link to="/myhome" class="text1">首页</router-link>
				</li>
				<li>
					<router-link to="/cart" class="text1">浏览</router-link>
				</li>
				<li>
					<router-link to="/cart" class="text1">APP</router-link>
				</li>
				<li>
					<router-link to="/cart" class="text1">话题</router-link>
				</li>
				<li>
					<router-link to="/cart" class="text1">达人</router-link>
				</li>
				<li>
					<router-link to="/cart" class="text1">设置</router-link>
				</li>
				<li>
					<a href="#" class="text1" @click="drop(0)">更多</a>
				</li>
				<!--创建一个下拉菜单-->
				<div class="dropdown hide" :class="show[0]" id="bb">
					<ul class="pull_list">
						<li>
							<a></a>
							<router-link to="/cart">寻找好友</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/cart">导入导出</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/cart">移动客户端</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/">ART</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/cart">LOFTCam-用心创造滤镜</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/cart">UAPP-创建个人应用</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/cart">帮助及反馈</router-link>
						</li>
						<li>
							<a></a>
							<router-link to="/entrypage">退出</router-link>
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
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
						</div>
						<img src="http://127.0.0.1:5000/img/homepage/sm-1.jpg" alt="">
					</div>
					<div>
						<span></span>
						<div>
							<p>自拍</p>
							<p>739篇新文章</p>
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
				]
			};
		},
		methods: {
			// ES6语法，代替arguments,res将所有参数放到一个数组中
			// drop(...res) {
			drop(i) {
				//否则，实现正常的下拉隐藏
				if (i < 3) {
					// 判断当前元素是否已经下拉
					if (this.show[i] != undefined) {
						this.show=[]
						console.log(this.show[i])
					} else {
						this.show = []
						this.show[i] = {}
						this.show[i].show = true
						console.log(this.show)
					}
				}else{
					// 此处设定条件，当点击其他空白处时，清空数组
				}
			},
		}
	};
</script>
<style scoped>
	@import "../assets/css/module_header.css";
</style>