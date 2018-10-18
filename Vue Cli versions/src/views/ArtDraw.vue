   <!-- 一级字组件，整个框画列表 -->
<template>
	<div id="draw">
		<div class="drawnav">
			<a>框画</a>
			<span class="active">全部</span>
			<span>摄影</span>
			<span>绘画</span>
		</div>
		<!--需要隐藏切换的块-->
		<div class="drawlist">
			<div class="row m-auto">
				<!-- 进行遍历循环生成标签 -->
				<div class="col-sm-3 p-1" v-for="(score,i) in draw">
					<div class="img_box  aa">
						<!-- 图片为动态加载 -->
						<!-- <router-link to="/details"></router-link> 采用函数形式跳转 -->
						<!-- 路由传参，暂时采用传递当前商品下标的形式，后续如果是请求数据，则发送当前商品的lid查询 -->
						<img :src="score.pic" alt="图片加载失败" @click="btn_click(i)">
					</div>
					<!-- 作者和标题为动态加载 -->
					<!-- 使用过滤器限制字数 -->
					<p><a href="#">{{score.title|title(6)}}</a></p>
					<p><a href="#">{{score.author}}</a></p>
				</div>
			</div>
		</div>
		<!-- 使用element组件创建分页导航栏 -->
		<div class="block">
			<el-pagination  @current-change="getdraw({page:pno})" @prev-click="getdraw({i:1})" @next-click="getdraw({i:2})" :current-page.sync="pno" pager-count=5 :page-size=1 layout="prev, pager, next, jumper" :total=20>
			</el-pagination>
		</div>
	</div>
</template>
<script>
	import coldraw from "@/components/arthome/drawing/coldraw.vue";
	export default {
		data() {
			return {
				draw: [],
				// 初始化一个当前页码值
				pno: 1,
				// 获取总页码值
				countpage: "",
				// 创建一个数组用作分页选择的遍历
				pagelist: [],
			};
		},
		mounted() {
			this.getdraw({});
		},
		methods: {
			// 设定组件函数 
			//设定分页查询请求函数，每次点击时确定发送的页面，从后台进行分页查询显示
			getdraw({
				i,
				page
			}) { //使用参数解构方式，达到传递不同的参数
				//i的作用为实现函数重载，判断点击的时上一页还是下一页
				if (i) {
					console.log(page)
					if (i.i == 1) { //点击上一页按钮
						if (this.pno > 1) {
							this.disabled = []
							this.pno--;
						} else {
							this.pno = 1;
							this.disabled[0] = 1
						}
					} else { //点击下一页按钮
						if (this.pno < this.countpage) {
							this.disabled = []
							this.pno++;
						} else {
							this.pno = this.countpage
							this.disabled[1] = 1
						}
					}
				}
				// 直接使用分页跳转
				if (page) {
					this.pno = page;
					console.log(this.pno)
				}
		
				//发送ajax请求
				(async() => {
					var url = "http://127.0.0.1:5000/draw/drawlist";
					var res = await this.$http
						.get(url, {
							params: {
								pno: this.pno,
								// 服务器端已经设定默认请求16条
								// paggSize:16
							}
						})
				
					console.log(res.data.msg.data)
					this.countpage = res.data.msg.pageCount;
					this.draw = res.data.msg.data;
					console.log(999)
					// .then(response => {
					// 	// 请求回来的页码总数
					// 	this.countpage = response.data.msg.pageCount;
					// 	// 请求回来的数据
					// 	this.draw = response.data.msg.data;
					// });
				})()
	
			}
		}
	};
</script>
<style scoped>
	@import "../assets/css/ART_soldnote.css";
	div.block {
		margin: 30px 0;
		text-align: center;
	}
</style>

