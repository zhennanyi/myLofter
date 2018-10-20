<template>
	<section id="qwe">
		<main>
			<!--主导航动态图标-->
			<div class="publishbar" :class="issue[0]">
				<a href=""><img src="http://127.0.0.1:5000/img/homepage/header.jpg" alt=""></a>
				<a href=""></a>
				<a @click="pitchpic()"></a>
				<a href=""></a>
				<a href=""></a>
				<a href=""></a>
			</div>
			<!-- 设置发布图片模态框 -->
			<!-- 设置一个全屏框，用来实现遮罩层的效果 -->
			<div class="shades" :class="issue[1]">
			</div>
			<!-- 动态出现的图片模态框 -->
			<div class="picture" :class="issue[2]">
				<!--左侧用户头像模块-->
				<div class="head-img">
					<img src="http://127.0.0.1:5000/img/homepage/header.jpg" alt="">
				</div>
				<!-- 专用半角条 -->
				<div class="angle">
					<div>
					</div>
				</div>
				<div class=" picture-box">
					<!--上方文字-->
					<div class="pinter_2">
						<p>
							<a href="">One Day</a>
						</p>
					</div>
					<div class="dashed" :class="issue[4]">
						<!-- 选择图片选项 -->
						<form action="" enctype="multipart/form-data">
							<input id="pic" type="file" ref="uploadFile" @change="upload()" accept="image/gif, image/jpeg" />
						</form>
						<div @click="pitchfile()" class="addfile"></div>
						<!-- 在图片丧悬浮一个x按钮，用于删除图片 -->
						<div @mouseout="clearpic()" @mouseover="showpic()">
							<img src="" id="showpic">
							<span class="rotate" :class="delpic"></span>
							<span class="del" :class="delpic" @click="delpics(1)"></span>
						</div>
					</div>
					<!-- 选择图片后，添加另一个需要显示的输入框 -->
					<div class="dashedown" :class="issue[3]">
						<!-- 继续添加按钮 -->
						<div>
							<div></div>
						</div>
						<!-- <input type="text" > -->
						<textarea name="" id="" cols="30" rows="10" class="inputtext" v-model="workingarea.text"></textarea>
						<div>标签选择展示框</div>
						<div>隐藏的标签选项</div>
						<div>加入合集框</div>
						<input type="checkbox" name="vehicle" value="Car">允许他人转载自Lofter
						<div>一个下拉框和一个跳转链接</div>
					</div>
					<!--添加底栏，用户操作按钮 -->
					<div class="three-btn">
						<button @click="closepic()">取消</button>
						<button>预览</button>
						<button @click="issuestate()">发布</button>
						<button><select>
																																						<option value="volvo">现在发布</option>
																																						<option value="saab">自动发布</option>
																																						<option value="opel">定时发布</option>
																																						<option value="audi">保存为草稿</option>
																																						<option value="audi">仅自己可见</option>
																																					</select></button>
					</div>
				</div>
			</div>
			<!-- 用户发布动态，预先使用组件进行遍历数组生成 -->
			<div class="user-flow" v-for="(user,i) in user">
				<div class="image-flow">
					<!--左侧图片-->
					<div class="left_img imgbig">
						<img :src="user.pic" class="iimg">
					</div>
					<!--右侧文字-->
					<div class="right_text">
						<!-- 下方主要内容 -->
						<p>{{user.text}}</p>
					</div>
					<!--添加底栏，用户操作按钮 -->
					<div class="bom-button">
						<!-- 右侧操作按钮 -->
						<div>
							<!-- 重新弹出编辑的模态框 -->
							<a href="#" @click="redactuser()">编辑</a>
							<!-- 删除事件 -->
							<a href="#" @click="deluser(i)">删除</a>
							<!-- 评论和分享事件为所有动态共有 -->
							<a data-target="share">评论</a>
							<a @click="ment()">分享</a>
						</div>
					</div>
				</div>
			</div>
			<!--主动态内容，通过v-for循环生成-->
			<div class="user-flow" v-for="(item,i) in state">
				<!--左侧用户头像模块-->
				<div class="head-img">
					<img :src="item.head" alt="头像加载失败">
				</div>
				<!-- 右侧主要内容 -->
				<!-- 专用半角条 -->
				<div class="angle">
					<div :class="item.angle">
					</div>
				</div>
				<div class="image-flow" @mouseleave="mouse(i)" @mouseenter="enter(i)">
					<!--上方文字-->
					<div class="pinter_2">
						<p>
							<a href="">{{item.tally}}脚。</a>
						</p>
					</div>
					<!--左侧图片-->
					<!-- 移除掉left_img，则直接显示大图 -->
					<div class="imgbig" :class="item.bigimg[0]">
						<img :src="item.pic[0]" class="iimg" @click="enlargement(i)">
					</div>
					<!--右侧文字-->
					<!-- 添加上right_texts则改变文字样式 -->
					<div class="right_text" :class="item.bigimg[1]">
						<p>
							<a href="">{{item.title}}：</a>
						</p>
						<p>{{item.text}}
						</p>
					</div>
					<!--添加底栏，用户操作按钮 -->
					<div class="bom-button">
						<!-- 左侧标签 -->
						<!-- 此处应该隐藏几个div块，使用mouseenter移入事件，通过改变css样式，达到动画过渡的效果 -->
						<div>
							<!-- 新建一个div用于循环生成标签 -->
							<div v-for="(lable,z) in item.tallys">
								<!-- <span></span> -->
								<a href="#" @mouseenter="enterlable(i,z)" @mouseleave="mouselable(i,z)">{{lable.tally1}}</a>
								<!-- 用户悬浮框模板 -->
								<!-- 位置永远为相对位置，对应a标签后第一个元素 -->
								<div class="lable-one" :class="item.lablea[z]">
									<div>
										<img :src="pic" alt="" v-for="pic in lable.pics">
									</div>
									<div>
										<span></span>
										<!-- span中的内容，为a标签内的内容 -->
										<span class="t">{{lable.tally1}}
																																							</span>
									</div>
								</div>
							</div>
						</div>
						<!-- 右侧操作按钮 -->
						<div>
							<a href="">热度({{item.likenum}})</a>
							<a @click="share(i,0)">评论</a>
							<a @click="share(i,1)">分享</a>
							<a @click="ment(i)">{{item.recomment}}</a>
							<button class="heart" :class="item.like" @click="like(i)">
																																					</button>
						</div>
					</div>
				</div>
				<!-- 此处为用户评论下拉框,应该放在用户框内部 -->
				<div class="comment" :class="item.comment">
					<!-- 用户评论输入框 -->
					<div>
						<input type="text" v-model="workingarea.comment">
						<a @click="postComment(i)">发布</a>
					</div>
					<!-- 每个用户的评论，进行动态插入 -->
					<div v-for="(comment,i) in item.comments">
						<a href="">网瘾萝莉</a>
						<span>{{comment}}</span>
						<a href="">回复</a>
					</div>
					<!-- 最后收起按钮 -->
					<div>
						<span data-target="down">收起</span>
						<span id="aa"></span>
					</div>
				</div>
				<!-- 此处为用户分享页面 -->
				<ul class="last-icon" :class="item.share">
					<li v-for="i in 2">
						<a href="">
							<div class="aa">
								<img src="http://127.0.0.1:5000/img/erweima.png" alt="">
								<p>打开微信扫一扫</p>
							</div>
						</a>
						<span>微信</span>
					</li>
					<!-- <li>
						<a href="">
							<div class="aa">
								<img src="http://127.0.0.1:5000/img/erweima.png" alt="">
								<p>打开易信扫一扫</p>
							</div>
						</a>
						<span>易信</span></li> -->
					<li v-for="i in 4">
						<a href=""></a><span>新浪微博</span></li>
				</ul>
			</div>
		</main>
		<aside>
			<!--<div class="aside-one">-->
			<ul class="ul_one">
				<div class="email">
					<!-- 此处为经过session传递回来的值 -->
					<p>{{login}}</p>
					<p>{{login}}.Lofter.com</p>
				</div>
				<div class="pull"></div>
				<li v-for="i in 6">
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">文章</span>
					</a>
				</li>
				<!-- 喜欢  关注  通知  私信  个人主页设置 -->
			</ul>
			<!--</div>-->
			<div class="inset_img">
				<img src="http://127.0.0.1:5000/img/homepage/daren_plan.png" alt="">
			</div>
			<div class="aside-three">
				<a href="">
					<img src="http://127.0.0.1:5000/img/homepage/001.jpg" alt="">
				</a>
				<div class="zhuanti">
					<span class="ul_icon"></span>
					<span class="ul_a">更多专题</span>
				</div>
			</div>
			<div class="aside-four">
				<p>写给空气的标签</p>
				<p>2652参与</p>
				<div>
					<img src="http://127.0.0.1:5000/img/homepage/aside1.jpg" alt="" v-for="i in 4">
				</div>
			</div>
			<div class="zhuanti">
				<span class="ul_icon"></span>
				<span class="ul_a">更多专题</span>
			</div>
		</aside>
	</section>
</template>>
<script>
	export default {
		data() {
			return {
				// 每个用户的动态，内容为通过构造函数创建的一个实例对象
				// 用户发表动态后，将动态插入到最前面来  同时将发表的内容，发送到数据库
				user: [],
				// 用于绑定用户发布内容时的暂存变量
				workingarea: {
					text: "",
					comment: ""
				},
				// 图片编辑框class样式
				delpic: "",
				// 此为首页刷新所显示的内容，为后台请求回来的数据
				// 此表为动态表，跟用户个人动态表有所区别
				// 用户状态值存储
				login:"",
				state: [{
						head: "http://127.0.0.1:5000/img/homepage/header1.jpg",
						tally: "摄影精选：转载自:",
						pic: ["http://127.0.0.1:5000/img/user1.jpg"],
						title: "脚。",
						text: `乡愁这玩意儿，不管是被哪一种媒介表达出来，对于漂泊在外的游子，都有着难以言说的吸引力， 
																											也由于许多滥情的表达，它时常显得矫情又做作。
																											于我而言，故乡早已成为过去，那种熟悉感随着年月的更迭变得越来越陌生。
																											首先是我自己的身体变化，
																											例如现在在铁路上奔跑也不再是单步在跨，再如家里的房顶，
																											现在无需任何辅助工具就能轻易地爬上去…… 这种熟悉感太依赖于我身体与土地的互动。
																											其次是这块土地本身也发生了...`,
						// 用户的喜欢数  为每个用户所独有的,固定值  增加之后，需要更新到数据库中
						// 点击后，让请求到的值++，便于动态发送到页面上显示，
						// 同时，发送ajax请求，将改变后的值插入到数据库中
						likenum: 1,
						// 红心的样式变化   当前动态  对应当前用户的动态值，需要根据每个用户来确定
						like: "",
						recomment: "推荐",
						// 下拉框和分享框事件
						share: "",
						comment: "",
						// 显示全图事件
						bigimg: [{
							left_img: true
						}],
						// 用于控制动态折角样式class属性
						// 如果只有一个值，则直接通过此方式进行控制
						angle: "",
						// 当前动态所包含的评论内容，用数组保存，传递到后台服务器
						comments: [
							"第一眼以为看到了罗斯科 太好看了这个颜色"
						],
						// 标签悬浮事件
						lablea: [],
						tallys: [{
								tally1: "故乡在远方",
								//标签图片，存储在请求回来的对象中
								pics: [
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
								],
							},
							{
								tally1: "色彩",
								pics: [
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
								]
							}
						],
					},
					{
						head: "http://127.0.0.1:5000/img/homepage/header1.jpg",
						tally: "摄影精选：转载自:",
						pic: [
							"http://127.0.0.1:5000/img/homepage/flow1.jpg",
							"http://127.0.0.1:5000/img/homepage/flow2.jpg",
							"http://127.0.0.1:5000/img/homepage/flow3.jpg",
							"http://127.0.0.1:5000/img/homepage/flow4.jpg",
							"http://127.0.0.1:5000/img/homepage/flow5.jpg",
							"http://127.0.0.1:5000/img/homepage/flow6.jpg",
							"http://127.0.0.1:5000/img/homepage/flow7.jpg",
							"http://127.0.0.1:5000/img/homepage/flow8.jpg",
							"http://127.0.0.1:5000/img/homepage/flow9.jpg",
							"http://127.0.0.1:5000/img/homepage/flow10.jpg"
						],
						title: "脚。",
						text: `乡愁这玩意儿，不管是被哪一种媒介表达出来，对于漂泊在外的游子，都有着难以言说的吸引力， 
																																				
																																					其次是这块土地本身也发生了...`,
						// 当前动态的点赞数
						likenum: 1,
						// 红心的样式变化   当前动态  对应当前用户的动态值，需要根据每个用户来确定
						like: "",
						recomment: "推荐",
						angle: "",
						// 下拉框和分享框事件
						share: "",
						comment: "",
						// 显示全图事件
						bigimg: [{
							left_img: true
						}],
						// 当前动态所包含的评论内容，用数组保存，传递到后台服务器
						comments: [
							"第一眼以为看到了罗斯科 太好看了这个颜色"
						],
						// v-bind绑定一个不存在的值会导致整个页面不能显示
						lablea: [],
						// 标签数量
						tallys: [{
								tally1: "故乡在远方",
								//标签图片，存储在请求回来的对象中
								pics: [
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
								]
							},
							{
								tally1: "色彩",
								pics: [
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
									"http://127.0.0.1:5000/img/homepage/01.jpg",
								]
							}
						],
					}
				],
				// 设置图片模态框效果，设置变量控制class值，全局效果
				issue: [{ //原本网页的wirte-one
						issuetext: false,
						wirte: false,
					},
					{ //原本模态框的off
						issueoff: false
					},
					{ //原本的-on  用来显示模态框
						pictureon: false
					},
					// 设置发布框的二次拉长
					{
						dashedownshow: false
					},
					// 移除原本框的虚线边框
					{
						dashedborder: false
					}
				],
				// 存储用户推荐状态      前端页面保存不了状态，所有需要存储的数据，都应该插入到表中去
				// 比如一条新闻评论，包含的信息有  当前新闻的id、内容、  
				// 每条动态，都为一个构造函数的实例对象   有属性：当前动态的内容   当前内容所包含的标签  当前动态的id值
			};
		},
		methods: {
			// 图片发布框的显示隐藏事件
			pitchpic() {
				// 点击时，让后方的五个小图标背景变白
				this.issue[0].issuetext = true;
				// 给网页加上浅灰背景
				this.issue[1].issueoff = true;
				// 设定定时器，300毫秒后执行
				setTimeout(() => {
					// 后方的五个图标直接隐藏
					this.issue[0].issuetext = false;
					this.issue[0].wirte = true;
					// 让隐藏模态框显示出来
					this.issue[2].pictureon = true;
				}, 300);
			},
			// 设置用户点击分享时事件
			share(i, a) {
				// 根据传递进来的值判断更改哪个状态值
				if (a == 0) {
					if (this.state[i].comment == "") {
						this.state[i].comment = "show";
						this.state[i].share = "";
					} else {
						this.state[i].comment = "";
					}
				} else {
					if (this.state[i].share == "") {
						this.state[i].share = "show";
						this.state[i].comment = "";
					} else {
						this.state[i].share = "";
					}
				}
			},
			// 设置用户点击喜欢按钮时的操作
			like(i) {
				if (this.state[i].like == "") {
					this.state[i].likenum++;
					this.state[i].like = "like";
				} else {
					this.state[i].likenum--;
					this.state[i].like = "";
				}
			},
			// 设置用户点击推荐时事件
			ment(i) { //注意一些特殊的函数名
				if (this.state[i].recomment == "推荐") {
					this.state[i].recomment = "已推荐"
				} else {
					this.state[i].recomment = "推荐"
				}
			},
			pitchfile() {
				// 通过refs功能触犯input选择文件功能
				this.$refs.uploadFile.click();
			},
			upload() {
				// 表单元素值改变之后触犯的函数  上传文件后，文件
				var reads = new FileReader();
				let f = document.getElementById("pic").files[0];
				reads.readAsDataURL(f);
				var my = this; //主要注意this的指向问题
				reads.onload = function(e) {
					// 经过编码实现上传图片的预览
					document.getElementById('showpic').src = this.result;
					// 将图片存储到当前用户对象中
					my.workingarea.pic = this.result;
					// 设置其他相关class样式的变化,二次下拉和虚线框
					my.issue[3].dashedownshow = true
					my.issue[4].dashedborder = true
				};
			},
			// 设置清除事件,将发布框恢复到原本的样子
			clear() {
				this.workingarea.text = "";
				document.getElementById('showpic').src = "";
				// 设置其他相关class样式的变化,二次下拉和虚线框
				this.issue[3].dashedownshow = false
				this.issue[4].dashedborder = false
			},
			// 添加隐藏模态框点击事件
			closepic() {
				// 取消模态框的显示
				this.issue[2].pictureon = false;
				// 设置一次性定时器让图标显示出来
				setTimeout(() => {
					this.issue[0].wirte = false;
					this.issue[1].issueoff = false;
				}, 200);
				// 取消浅灰背景
				this.clear()
			},
			//设置用户发布动态事件
			issuestate() {
				// 创建发表图片时的构造函数
				// 内部存在四个方法,删除编辑，都添加为构造函数本身的方法
				class State {
					constructor(pic, text) {
						this.pic = pic;
						this.text = text;
						// 四个固定的值  写在标签中亦可
					}
					
				}
				// 创建动态的实例对象
				var issueone = new State(this.workingarea.pic, this.workingarea.text);
				// 在数组开头插入元素
				this.user.unshift(issueone)
				// 关闭发布框
				this.closepic();
				console.log(this.user)
				// 将发布框恢复成原样
				this.clear();
			},
			// 设置每条动态的评论事件
			postComment(i) {
				this.state[i].comments.unshift(this.workingarea.comment)
				this.workingarea.comment = ""
				// 想办法获取到当前登录用户的id
			},
			// 设置移入移除折角事件
			enter(i) {
				this.state[i].angle = "angle-a";
			},
			mouse(i) {
				this.state[i].angle = ""
			},
			// 设置图片点击放大事件
			enlargement(i) {
				if (this.state[i].bigimg[0] != undefined) {
					//点击图片时，如果非空值，则说明图片为小图
					this.state[i].bigimg = [] //此时清空数组，图片恢复到大图
					// 给数组中文字对应的class样式赋值
					this.state[i].bigimg[1] = {}
					this.state[i].bigimg[1].right_texts = true;
				} else { //  说明图片目前为大图，将数组对象class值更改回去
					console.log("执行了")
					this.state[i].bigimg[0] = {}
					this.state[i].bigimg[0].left_img = true;
					this.state[i].bigimg[1].right_texts = false;
				}
			},
			// 设置标签的悬停事件
			enterlable(i, z) { //z的作用为定位当前悬停的标签，用作函数的重载
				if (z == 0) {
					// 悬停的是第一个标签
	
					this.state[i].lablea = []
					this.state[i].lablea[z] = {};
					this.state[i].lablea[z].lablea = true
				} else if (z == 1) {
					// 悬停的是第二个标签

					this.state[i].lablea = []
					this.state[i].lablea[z] = {};
					this.state[i].lablea[z].lablea = true
				}
	
			},
			mouselable(i) {
				this.state[i].lablea = []

			},
			// 设置发布框图片移入移出显示操作按钮事件
			showpic() {
				this.delpic = "show";
			},
			clearpic() {
				this.delpic = "";
			},
			//设置清除图片
			delpics(i){
				if(i){
					document.getElementById('showpic').src = "";
					this.issue[4].dashedborder = false;
				}else{
					// 进行图片旋转
				}
			} ,
			// 设置动态的删除事件
			deluser(i){
				// 在删除前进行一个确认操作
				this.user.splice(i,1)
			}
		},
		mounted() {
			var url ='http://127.0.0.1:5000/user/test';
			(async ()=>{
				var res =await   this.$http.get(url)
				console.log(res.data[0].email)
				this.login=res.data[0].email
			})()
		}
	};
</script>

