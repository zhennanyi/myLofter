<template>
    <div id="entrypage">
        <!-- 网页登录主页面 -->
        <!-- 添加移入移出事件，设定鼠标悬停后停止定时器 -->
        <nav @mouseleave="mouse()" @mouseenter="enter()">
            <!-- 背景轮播图模块 -->
            <div class="wrap" id="aa">
                <!-- 通过后台请求图片来完成图片轮播，实现黑色淡入淡出效果 -->
                <img :src="bannerView" alt="图片加载失败" :class="shade">
            </div>
            <div class="low-right">
                <a href="">背景作品来自：oneDay</a>
                <a class="arrow arrow_left" @click="next(1)"></a>
                <a class="arrow arrow_right" @click="next()"></a>
            </div>
            <!-- 主内容模块 -->
            <div id="center1">
                <!-- 大logo -->
                <div id="logo">
                    <img src="http://127.0.0.1:5000/img/entrypage/login-logo.png">
                </div>
                <!-- 上方导航文字 -->
                <!--创建一个胶囊导航-->
                <ul class="nav nav-pills inp_text list-unstyled">
                    <li class="nav-item "><a href="#login_left" class="nav-link" data-toggle="pill" @click="clear()">注册</a></li>
                    <!-- 通过a标签上的href上的id名，在点击时查找到对应的元素，修改其index值，达到显示的目的，并同时给当前标签加上active-->
                    <li class="nav-item "><a href="#login_center" class="nav-link active" data-toggle="pill">登录</a></li>
                    <li class="nav-item "><a href="#login_right" class="nav-link" data-toggle="pill">下载APP</a></li>
                </ul>
                <!-- 登录框模块 -->
                <div id="login">
                    <!--创建需要隐藏的块-->
                    <div class="tab-content">
                        <!-- 注册模块 -->
                        <div id="login_left" class="tab-pane">
                            <div class="inp_left">
                                <p>
                                    <input class="regbox" type="email" id="email_" @blur="check(0)" placeholder="邮箱/手机号码" v-model="uname">
                                    <span id="verify"></span>
                                </p>
                                <p>
                                    <input class="regbox" type="password" id="upwd_" placeholder="请填写8-16位用户密码" v-model="upwd" @blur="check()">
                                </p>
                                <div class="btn">
                                    向右滑动填充拼图
                                </div>
                                <p class="regbox_text">
                                    <input class="regbox  btn btn-primary" type="button" value="注册" @click="register()">
                                </p>
                            </div>
                            <span class="wire">
                                                                                    						</span>
                            <span class="wiretext">
                                                                                    							或
                                                                                    						</span>
                            <div class="inp_right">
                                <a href="#" class="inp_a1">手机账号登录</a>
                                <a href="#" class="inp_a2">微博账号登录</a>
                                <a href="#" class="inp_a3">腾讯QQ登录</a>
                                <a href="#" class="inp_a4">微信登录</a>
                            </div>
                        </div>
                        <!-- 登录模块 -->
                        <div id="login_center" class="tab-pane active">
                            <div class="inp_left">
                                <p>
                                    <input class="regbox" placeholder="常用邮箱/网易邮箱" v-model="uname">
                                </p>
                                <p>
                                    <input type="password" class="regbox" placeholder="密码" v-model="upwd">
                                </p>
                                <div class="btn">
                                    向右滑动填充拼图
                                </div>
                                <p class="regbox_text">使用
                                    <a href="" class="wangyi">网易账号管家</a>，全面保护您的账号！</p>
                                <p>
                                    <input type="button" value="登录" class="regbox btn btn-primary" @click="login()">
                                </p>
                                <p class="regbox_text">
                                    <input type="checkbox" id="" value="">
                                    <a href="">十天内免登录</a>
                                    <a href="">忘记密码?</a>|
                                    <a href="">找回密码</a>
                                </p>
                            </div>
                            <span class="wire">
                                                                                    						</span>
                            <span class="wiretext">
                                                                                    							或
                                                                                    						</span>
                            <!-- 右侧第三方社交按钮 -->
                            <div class="inp_right">
                                <a href="#" class="inp_a1">手机账号登录</a>
                                <a href="#" class="inp_a2">微博账号登录</a>
                                <a href="#" class="inp_a3">腾讯QQ登录</a>
                                <a href="#" class="inp_a4">微信登录</a>
                            </div>
                        </div>
                        <!--右侧APP二维码-->
                        <div id="login_right" class="tab-pane">
                            <!--左侧文字-->
                            <div class="r_text">
                                <p>iPhone版</p>
                                <p>iPad版</p>
                                <p>Android版</p>
                            </div>
                            <!--中间链接-->
                            <div class="r_btn">
                                <a href=""></a>
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                            <!--右侧大二维码-->
                            <div class="lg_icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="sec">
            <h2 class="htwo">随性的记录方式</h2>
            <p class="p6">方便地记录照片、文字、音乐、视频、适用于iPhone、iPad和Android移动客户端及PD端，</p>
            <p class="p6">让你随时随地的记录与分享。</p>
            <div class="sec_img">
                <img src="http://127.0.0.1:5000/img/entrypage/ipad.jpg">
            </div>
            <div class="six">
                <div class="six_a">
                    <div class="six_icon1"></div>
                    <h3 class="six_h">自动同步</h3>
                    <p class="p7">方便同步你的内容到新浪微博，QQ空间等社交</p>
                    <p class="p7">网络，还可以分享到微信，易信聊天和朋友</p>
                    <p class="p7">圈。</p>
                </div>
                <div class="six_a">
                    <div class="six_icon2"></div>
                    <h3 class="six_h">高质量图片</h3>
                    <p class="p7">使用无损图片压缩技术，上传图片保留高质量</p>
                    <p class="p7">细节，当你手机处于wifi网络，将自动加载全</p>
                    <p class="p7">高清图片</p>
                </div>
            </div>
        </div>
        <div id="d3">
            <h2 class="htwo">发现有共同爱好的人</h2>
            <p class="p6">LOFTER汇聚了百万的摄影、胶片玩家，绘画及动漫爱好者，并不断衍生出更多的兴趣圈子，无论是设计、</p>
            <p class="p6">艺术科技、时尚、旅行、读书、电影评论都有精彩的人与内容不断产出。</p>
            <div class="d3_img">
                <img src="http://127.0.0.1:5000/img/entrypage/quanzi.jpg">
            </div>
            <div class="six">
                <div class="six_a">
                    <div class="six_icon3"></div>
                    <h3 class="six_h">推荐算法</h3>
                    <p class="p7">通过你的喜欢、关注，标签的使用情况，推荐</p>
                    <p class="p7">出更多你感兴趣的人与内容</p>
                </div>
                <div class="six_a">
                    <div class="six_icon4"></div>
                    <h3 class="six_h">精彩话题</h3>
                    <p class="p7">任何人都可以发起与参与话题，征集作品发现</p>
                    <p class="p7">有趣的人，还可以通过客户端参加有趣的贴纸话题</p>
                </div>
            </div>
        </div>
        <div id="d4">
            <h2 class="htwo">彰显个性的个人主页</h2>
            <p class="p6">已经拥有234套风格各异的个人主页模板，而且这些模板可以轻松的完成自定义样式及导航，</p>
            <p class="p6">让你的个人主页变得与众不同，提供了10套移动端浏览器适配模板，当使用手机浏览器访问主页时，也如此优雅。</p>
            <div>
                <img src="http://127.0.0.1:5000/img/entrypage/blog-1.jpg">
                <img src="http://127.0.0.1:5000/img/entrypage/blog-2.jpg">
                <img src="http://127.0.0.1:5000/img/entrypage/blog-5.jpg">
            </div>
        </div>
        <div id="d5">
            <h2 class="htwo">轻巧的移动LOFTER</h2>
            <p class="p6">通过iPhone、iPad版及Android版客户端，体验LOFTER的快捷、漂亮、有趣，童工多重试下最热的贴纸，</p>
            <p class="p6">让你的相片分享增加乐趣，还可以在移动端查看附近的人。</p>
            <p class="p6">
                <a href="">马上下载</a>
            </p>
            <div class="d5_img">
                <img src="http://127.0.0.1:5000/img/entrypage/mobilelofter.jpg">
            </div>
            <div class="six">
                <div class="six_a">
                    <div class="six_icon5"></div>
                    <h3 class="six_h">查找附近的同好</h3>
                    <p class="p7">通过移动端的定位功能，发现附近有趣的人。</p>
                </div>
                <div class="six_a">
                    <div class="six_icon6"></div>
                    <h3 class="six_h">独有的贴纸</h3>
                    <p class="p7">提供丰富、有趣、限量贴纸，参与贴纸类主题</p>
                    <p class="p7">话题，让手机摄影更有趣、好玩。</p>
                </div>
            </div>
        </div>
        <div class="bottom_strip">
            <h2>LOFTER - 让兴趣，更有趣</h2>
            <div class="d6_img">
                <p>
                    <a href="#" class="d6_a1">手机注册</a>
                    <a href="#" class="d6_a2">新浪微博注册</a>
                    <a href="#" class="d6_a3">腾讯QQ注册</a>
                    <a href="#" class="d6_a4">微信注册</a>
                </p>
            </div>
        </div>
        <div class="bottom_strip suspend" :class="strips">
            <p>
                <a href="#">手机注册</a>
                <a href="#">新浪微博注册</a>
                <a href="#">腾讯QQ注册</a>
                <a href="#">微信注册</a>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //获取用户账号密码
                uname: "",
                upwd: "",
                // 获取输入框内容的两种方法  ref  v-model  
                // 保存轮播图数据  图片中要带有作者的信息，并且带有作者主页链接
                banner: [
                    "http://127.0.0.1:5000/img/entrypage/2.jpg",
                    "http://127.0.0.1:5000/img/entrypage/9.jpg",
                    "http://127.0.0.1:5000/img/entrypage/1.jpg",
                    "http://127.0.0.1:5000/img/entrypage/7.jpg",
                    "http://127.0.0.1:5000/img/entrypage/4.jpg",
                ],
                // 创建一个唯一数据用来扎实轮播图页
                bannerView: "",
                x: "",
                shade: {
                    // 图片的淡入淡出效果
                    shades: true,
                },
                strips: {
                    // 新增一个切换底部导航条的值
                    strips: false
                },
                // 初始化两个定时器
                t: null,
                m: null,
                // 创建一个对象用来保存验证状态状态
                pass: {
                    uname:false,
                    upwd:false
                }
            };
        },
        props: ["oop"],
        mounted() {
            this.$store.commit('change', 8)
            // 添加一个滚动事件
            window.addEventListener('scroll', this.handleScroll);
            // console.log(this.$root)
        },
        methods: {
            handleScroll() {
                // 获取当前总页面高度
                var height = document.body.scrollHeight
                // document.documentElement.scrollTop;    document.body.scrollTop;  多个方法用于检测不同浏览器的兼容性
                // 获取当前已经滚动的高度
                var scrollTop = window.pageYOffset;
                console.log(scrollTop)
                // 已经滑动的高度   有bug，需要考虑不同分辨率屏幕下滑时的屏幕高度
                if (scrollTop > 1090 && scrollTop < height - 1200) {
                    this.strips.strips = true;
                } else {
                    this.strips.strips = false;
                }
            },
            // 进行非空验证
            // blue失去焦点事件
            // foucs  获取焦点事件
            // 绑定共用清除函数，在点击登录或者注册跳转时，清除框中内容
            clear() {
                this.uname = "";
                this.upwd = "";
            },
            check(i) {
                if (i == 0) {
                    // 进行正则表达式验证，必须输入邮箱或者合法手机号码
                    var phonereg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                    var emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    // 如果密码等于空
                    if (this.uname == "") {
                        this.$toast({
                            message: "用户名不能为空", //提示框显示消息
                            position: "center", //位置
                            duration: 1000, //持续时间(毫秒)
                            // className:"mytoast",//自定义样式
                            // iconClass:"mytip"   //自定义图标
                        });
                        // 如果没有通过正则表达式验证
                    } else if (!phonereg.test(this.uname) && !emailreg.test(this.uname)) {
                        this.$toast("邮箱或手机号码格式不正确")
                    }else{ //说明密码验证通过
                        this.pass.uname=true
                    }
                // 进行用户密码正则判断，
                } else {
                    var pwdreg = /^[A-Za-z0-9\.\-\_]{8,16}$/;
                    // 如果密码为空
                    if (this.upwd == "") {
                        this.$toast("用户密码不能为为空")
                        // 如果没有通过正则
                    } else if (!pwdreg.test(this.upwd)) {
                        this.$toast("用户密码不能小于8位或大于16位")
                    }else{
                        this.pass.upwd=true
                    }
                }
            },
            // 进行注册
            register() {
                // 如果账号或者密码不满足规范，则阻止注册
                if (this.pass.uname == true&&this.pass.upwd==true) {
                    var url = 'http://127.0.0.1:5000/user/register'
                    console.log(123)
                    this.$http.post(url,
                        this.$qs.stringify({
                            uname: this.uname,
                            upwd: this.upwd
                        })
                    ).then(response => {
                        console.log(response.data);
                    })
                    this.uname = "",
                    this.upwd = "",
                     this.$toast("注册成功")
                }else{
                    this.$toast("用户密码不能小于8位或大于16位")
                }
            },
            // 进行登录
            // 定义登录成功后跳转函数
            goto() {
                this.$router.push("/myhome")
            },
            login() {
                var url = 'http://127.0.0.1:5000/user/login'
                this.$http.get(url, {
                    params: {
                        uname: this.uname,
                        upwd: this.upwd
                    }
                }).then(response => {
                    if (response.data == "1") {
                        //登录成功后，进行页面跳转
                             this.$toast({
                            message: "登录成功", 
                            position: "center", //位置
                            duration: 700, //持续时间(毫秒)
                        });
                        setTimeout(()=>{
                            this.goto();
                        },800)
                    } else {
                        // 提示用户账号或密码错误
                        this.$toast(response.data)
                    }
                })
                // 错误捕获
                // .catch(function(error) {
                //     console.log(error);
                // });
            },
            // 通过参数进行重载执行不同的操作
            next(i) {
                this.shade.shades = false;
                if (i) { //执行切换上一张
                    if (this.x == 0) {
                        this.x = 4
                    } else {
                        this.x--
                    }
                    this.bannerView = this.banner[this.x]
                } else { //执行切下一张
                    if (this.x == 4) {
                        this.x = 0
                    } else {
                        this.x++
                    }
                    this.bannerView = this.banner[this.x]
                }
                this.shade.shades = true;
            },
            // mouseleave  鼠标移出事件   此方法不会冒泡到父元素
            // mouseout，mouseover会触发冒泡事件
            mouse() {
                this.m = setInterval(() => {
                    this.next();
                }, 3500)
            },
            // mouseenter  鼠标移入事件
            enter() {
                clearInterval(this.m)
            }
        },
        // 创建钩子函数确定轮播图第一张显示的图片
        created() {
            // 将所有轮播图的第一张赋给当前视图轮播图
            this.x = 0
            this.bannerView = this.banner[this.x]
            // this.banner[index]
            //每隔2s清除图片样式，确保下次点击时是淡入淡出效果
            this.t = setInterval(() => {
                this.shade.shades = false;
            }, 2000)
            this.m = setInterval(() => {
                this.next();
            }, 3500)
        },
    };
</script>

<style scoped>
    @import "../assets/css/entry.css";
</style>

