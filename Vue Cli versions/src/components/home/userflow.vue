<template>
	<section id="qwe">
		<main>
			<!--主导航动态图标-->
			<div class="publishbar">
				<a href=""><img src="http://127.0.0.1:5000/img/homepage/header.jpg" alt=""></a>
				<a href=""></a>
				<a data-toggle="picture"></a>
				<a href=""></a>
				<a href=""></a>
				<a href=""></a>
			</div>
			<!-- 设置发布图片模态框 -->
			<!-- 设置一个全屏框，用来实现遮罩层的效果 -->
			<div class="shade">
			</div>
			<div class="picture">
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
					<div class="dashed">
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</div>


					<!--添加底栏，用户操作按钮 -->
					<div class="three-btn">
						<button data-dismiss="picture">取消</button>
						<button>预览</button>
						<button>发布</button>
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
			<!-- 图片模态框 -->

			<!--主动态内容-->

			<div class="user-flow">
				<!--左侧用户头像模块-->
				<div class="head-img">
					<img src="http://127.0.0.1:5000/img/homepage/header1.jpg" alt="">
				</div>
				<!-- 右侧主要内容 -->
				<!-- 专用半角条 -->
				<div class="angle">
					<div>

					</div>
				</div>
				<div class="image-flow">
					<!--上方文字-->
					<div class="pinter_2">
						<p>
							<a href="">摄影精选：转载自：脚。</a>
						</p>
					</div>

					<!--左侧图片-->
					<div class="left_img imgbig" data-toggle="bigimg">
						<img src="http://127.0.0.1:5000/img/user1.jpg" class="iimg">
					</div>
					<!--右侧文字-->
					<div class="right_text" data-toggle="text">
						<p>
							<a href="">脚。：</a>
						</p>
						<p>乡愁这玩意儿，不管是被哪一种媒介表达出来，对于漂泊在外的游子，都有着难以言说的吸引力， 也由于许多滥情的表达，它时常显得矫情又做作。
							于我而言，故乡早已成为过去，那种熟悉感随着年月的更迭变得越来越陌生。首先是我自己的身体变化，
							例如现在在铁路上奔跑也不再是单步在跨，再如家里的房顶，现在无需任何辅助工具就能轻易地爬上去…… 这种熟悉感太依赖于我身体与土地的互动。其次是这块土地本身也发生了...
						</p>
					</div>
					<!--添加底栏，用户操作按钮 -->
					<div class="bom-button">
						<!-- 左侧标签 -->
						<!-- 此处应该隐藏几个div块，使用mouseenter移入事件，通过改变css样式，达到动画过度的效果 -->
						<div>
							<span></span>
							<a href="" data-toggle="suspend" class="aaaa">故乡在远方</a>
							<!-- 用户悬浮框模板 -->
							<!-- 位置永远为相对位置，对应a标签后第一个元素 -->
							<div class="lable-one">
								<div>
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
								</div>
								<div>
									<span></span>
									<!-- span中的内容，为a标签内的内容 -->
									<span class="t">

									</span>
								</div>
							</div>
							<a href="" data-toggle="suspend">色彩</a>
							<div class="lable-one">
								<div>
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
								</div>
								<div>
									<!-- span中的内容，为a标签内的内容 -->
									<span></span>
									<span class="t">

									</span>
								</div>
							</div>


						</div>
						<!-- 右侧操作按钮 -->
						<div>
							<a href="">热度(1)</a>
							<a data-target="down">评论

							</a>
							<a data-target="share">分享</a>
							<a data-toggle="recomment">推荐</a>
							<button class="nlike heart">

							</button>


						</div>

					</div>


				</div>
				<!-- 此处为用户评论下拉框,应该放在用户框内部 -->
				<div class="comment">
					<!-- 用户评论输入框 -->
					<div>
						<input type="text">
						<a>发布</a>
					</div>
					<!-- 每个用户的评论，进行动态插入 -->
					<div>
						<a href="">网瘾萝莉</a>
						<span>第一眼以为看到了罗斯科 太好看了这个颜色</span>
						<a href="">回复</a>
					</div>
					<!-- 最后收起按钮 -->
					<div>
						<span data-target="down">收起</span>
						<span id="aa"></span>
					</div>
				</div>


				<!-- 此处为用户分享页面 -->
				<ul class="last-icon">
					<li><a href="">
							<div class="aa">

								<img src="http://127.0.0.1:5000/img/erweima.png" alt="">
								<p>打开微信扫一扫</p>
							</div>
						</a>
						<span>微信</span>
					</li>
					<li><a href="">
							<div class="aa">
								<img src="http://127.0.0.1:5000/img/erweima.png" alt="">
								<p>打开易信扫一扫</p>
							</div>
						</a>
						<span>易信</span></li>
					<li><a href=""></a><span>新浪微博</span></li>
					<li><a href=""></a><span>QQ空间</span></li>
					<li><a href=""></a><span>百度贴吧</span></li>
					<li><a href=""></a><span>我的主页</span></li>
				</ul>
			</div>






			<!-- 下方为重复内容 -->
			<div class="user-flow">
				<!--左侧用户头像模块-->
				<div class="head-img">
					<img src="http://127.0.0.1:5000/img/homepage/header1.jpg" alt="">
				</div>
				<!-- 右侧主要内容 -->
				<!-- 专用半角条 -->
				<div class="angle">
					<div>

					</div>
				</div>
				<div class="image-flow">
					<!--上方文字-->
					<div class="pinter_2">
						<p>
							<a href="">摄影精选：转载自：脚。</a>
						</p>
					</div>

					<!--左侧图片-->
					<div class="left_img imgbig" data-toggle="bigimg">
						<img src="http://127.0.0.1:5000/img/homepage/flow1.jpg" class="iimg">
						<span>查看大图</span>
						<img src="http://127.0.0.1:5000/img/homepage/flow2.jpg" class="iimg">
						<span>查看大图</span>
						<img src="http://127.0.0.1:5000/img/homepage/flow3.jpg" class="iimg">
						<span>查看大图</span>
						<img src="http://127.0.0.1:5000/img/homepage/flow4.jpg" class="iimg">
						<span>查看大图</span>
						<img src="http://127.0.0.1:5000/img/homepage/flow5.jpg" class="iimg">
						<span>查看大图</span>
						<img src="http://127.0.0.1:5000/img/homepage/flow6.jpg" class="iimg">
						<span>查看大图</span>
						<img src="http://127.0.0.1:5000/img/homepage/flow7.jpg" class="iimg">
						<img src="http://127.0.0.1:5000/img/homepage/flow8.jpg" class="iimg">
						<img src="http://127.0.0.1:5000/img/homepage/flow9.jpg" class="iimg">
						<img src="http://127.0.0.1:5000/img/homepage/flow10.jpg" class="iimg">
					</div>
					<!--右侧文字-->
					<div class="right_text" data-toggle="text">
						<p>
							<a href="">脚。：</a>
						</p>
						<p>乡愁这玩意儿，不管是被哪一种媒介表达出来，对于漂泊在外的游子，都有着难以言说的吸引力， 也由于许多滥情的表达，它时常显得矫情又做作。
							于我而言，故乡早已成为过去，那种熟悉感随着年月的更迭变得越来越陌生。首先是我自己的身体变化，
							例如现在在铁路上奔跑也不再是单步在跨，再如家里的房顶，现在无需任何辅助工具就能轻易地爬上去…… 这种熟悉感太依赖于我身体与土地的互动。其次是这块土地本身也发生了...
						</p>
					</div>
					<!--添加底栏，用户操作按钮 -->
					<div class="bom-button">
						<!-- 左侧标签 -->
						<!-- 此处应该隐藏几个div块，使用mouseenter移入事件，通过改变css样式，达到动画过度的效果 -->
						<div>
							<span></span>
							<a href="" data-toggle="suspend" class="aaaa">故乡在远方

							</a>
							<!-- 用户悬浮框模板 -->
							<!-- 位置永远为相对位置，对应a标签内的第一个元素 -->
							<div class="lable-one">
								<div>
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
								</div>
								<div>
									<span></span>
									<!-- span中的内容，为a标签内的内容 -->
									<span class="t">

									</span>
								</div>
							</div>

							<a href="" data-toggle="suspend">色彩

							</a>
							<div class="lable-one">
								<div>
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
									<img src="http://127.0.0.1:5000/img/homepage/01.jpg" alt="">
								</div>
								<div>
									<!-- span中的内容，为a标签内的内容 -->
									<span></span>
									<span class="t">

									</span>
								</div>
							</div>


						</div>
						<!-- 右侧操作按钮 -->
						<div>
							<a href="">热度(1)</a>
							<a data-target="down">评论</a>
							<a data-target="share">分享</a>
							<a data-toggle="recomment">推荐</a>
							<button class="nlike heart">

							</button>


						</div>

					</div>


				</div>
				<!-- 此处为用户评论下拉框,应该放在用户框内部 -->
				<div class="comment">
					<!-- 用户评论输入框 -->
					<div>
						<input type="text">
						<a>发布</a>
					</div>
					<!-- 每个用户的评论，进行动态插入 -->
					<div>
						<a href="">网瘾萝莉</a>
						<span>第一眼以为看到了罗斯科 太好看了这个颜色</span>
						<a href="">回复</a>
					</div>
					<!-- 最后收起按钮 -->
					<div>
						<span data-target="down">收起</span>
						<span id="aa"></span>
					</div>
				</div>


				<!-- 此处为用户分享页面 -->
				<ul class="last-icon">
					<li><a href="">
							<div class="aa">

								<img src="http://127.0.0.1:5000/img/erweima.png" alt="">
								<p>打开微信扫一扫</p>
							</div>
						</a>
						<span>微信</span>
					</li>
					<li><a href="">
							<div class="aa">
								<img src="http://127.0.0.1:5000/img/erweima.png" alt="">
								<p>打开易信扫一扫</p>
							</div>
						</a>
						<span>易信</span></li>
					<li><a href=""></a><span>新浪微博</span></li>
					<li><a href=""></a><span>QQ空间</span></li>
					<li><a href=""></a><span>百度贴吧</span></li>
					<li><a href=""></a><span>我的主页</span></li>
				</ul>
			</div>


		</main>


		<aside>

			<!--<div class="aside-one">-->
			<ul class="ul_one">
				<div class="email">
					<p>One Day</p>
					<p>OneDaykk.Lofter.com</p>
				</div>
				<div class="pull"></div>


				<li>
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">文章</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">喜欢</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">关注</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">通知</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">私信</span>
					</a>
				</li>
				<li>
					<a href="">
						<span class="ul_icon"></span>
						<span class="ul_a">个人主页设置</span>
					</a>
				</li>
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
					<img src="http://127.0.0.1:5000/img/homepage/aside1.jpg" alt="">
					<img src="http://127.0.0.1:5000/img/homepage/aside1.jpg" alt="">
					<img src="http://127.0.0.1:5000/img/homepage/aside1.jpg" alt="">
					<img src="http://127.0.0.1:5000/img/homepage/aside1.jpg" alt="">
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
	data(){
		return{
			
		}
	}
}
</script>

