<template>
    <div class="mydetails">
        <div class="g-box">
            <div class="my-product">
                <!--商品简介图片-->
                <div class="abbr-box">
                    <!-- 动态切换class名 -->
                    <div class="abbr" :class="proClass.borderClass">
                        <img :src="product[i].pic" alt="">
                    </div>
                </div>
                <!--商品简介文字-->
                <div class="abbr-text">
                    <!-- 作品标题 -->
                    <!-- 应该通过点击时获取到的商品id动态加载 -->
                    <p>{{product[i].title}}</p>
                    <p>作者：{{product[i].author}}</p>
                    <!-- 根据不同的选择，改变左侧画框的css样式 -->
                    <p>请选择画框颜色</p>
                    <!-- 两个颜色选择框 -->
                    <div class="box-color">
                        <span @click="pitch(0)">
                                                                    <!-- 内嵌span为选中小图标 -->
                                                                    <a  :class="proClass.brown">
                                                                    </a>
                                                                </span>
                        <span @click="pitch(1)">
                                                                    <a  :class="proClass.black">
                                                                    
                                                                    </a>
                                                                </span>
                    </div>
                    <!-- 选择商品规格 -->
                    <p>请选择画框尺寸</p>
                    <!-- 三个选项，对应不同的内容 -->
                    <div class="spec">
                        <div>
                            <span @click="size('lg')">大
                                                                        <a :class="spec.lg">
                                                                        
                                                                        </a>
                                                                        </span>
                            <span @click="size('md')"> 中
                                                                        <a :class="spec.md">
                                                                        
                                                                        </a>
                                                                    </span>
                            <span @click="size('sm')">小
                                                                        <a :class="spec.sm">
                                                                        
                                                                        </a></span>
                        </div>
                        <div class="test">
                            <span>外框：{{spec.size.bor}}</span><br>
                            <span>图片：{{spec.size.pic}}</span>
                        </div>
                    </div>
                    <!-- 价格根据不同的商品进行改变 -->
                    <!-- 动态加载 -->
                    <h5>价格{{spec.sum}}元</h5>
                    <!-- 需要添加事件 -->
                    <div class="cart-button" @click="cart()">加入购物车</div>
                    <!-- 下方为6个分享按钮图标 -->
                    <p>分享到</p>
                    <div class="last-icon">
                        <a href="">
                            <div class="aa">
                                <img src="http://127.0.0.1:5000/img/erweima.png" alt="">
                                <p>打开微信扫一扫</p>
                            </div>
                        </a>
                        <a href="">
                            <div class="aa">
                                <img src="http://127.0.0.1:5000/img/erweima.png" alt="">
                                <p>打开易信扫一扫</p>
                            </div>
                        </a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
                <!--商品详情图片-->
                <div class="image-flow">
                    <img src="http://127.0.0.1:5000/img/ART/001.jpg" alt="">
                    <img src="http://127.0.0.1:5000/img/ART/002.jpg" alt="">
                    <img src="http://127.0.0.1:5000/img/ART/003.jpg" alt="">
                    <div class="h-title">
                        <p>
                            《异变——肤浅》
                        </p>
                        <p>
                            异变开始，人们开始“肤浅”了。
                        </p>
                        <img src="http://127.0.0.1:5000/img/ART/004.jpg" alt="">
                    </div>
                    <div>
                        <p> copy此作品由创作者提供100%高清原图授权</p>
                        <span><img src="http://127.0.0.1:5000/img/touxiang.png" alt=""></span>
                        <p>bian大刀</p>
                        <a href="#" class="last-button">返回顶部购买</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 设置一个全屏框，用来实现遮罩层的效果 -->
        <div class="shade" :class="shoping.shade">
        </div>
        <h1>模态框</h1>
        <!-- 下方为模态框 -->
        <div class="modal-off" :class="shoping.modal">
            <div class="modal-header">
                <span>加入购物车</span>
                <button class="close" type="button" @click="closecart()">x</button>
            </div>
            <div class="modal-body">
                <span id="gou"></span>
                <span>商品已加入购物车</span>
            </div>
            <div class="modal-footer">
                <!-- 查看购物车进行页面跳转及添加商品 -->
                <!-- 从商品主页上接受到一个i值，为当前商品对应的下标 -->
                <a @click="closecart(i)">
                    <router-link to="/cart">查看购物车</router-link>
                </a>
                <a @click="closecart()">继续选购</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 通过商品点击跳转时，在跳转链接上绑定商品的id，并且在路由中
                // 设置:接住传递回来的值，再在此页面上，通过$route.parme接住
                // 传递回来的值，通过这个值，发送ajax请求
                // 可尝试bus进行数据共享
                // 假设为查询回来的数据，需要动态填充到页面上
                product: [{
                        lid: 1,
                        pic: "http://127.0.0.1:5000/img/8888.jpg",
                        title: "陪伴是最长情的告白",
                        author: "儿童插画师-MO",
                    },
                    {
                        lid: 2,
                        pic: "http://127.0.0.1:5000/img/box-drawing/01.jpg",
                        title: "陪伴是告白",
                        author: "儿童插画师-MO",
                    },
                    {
                        lid: 3,
                        pic: "http://127.0.0.1:5000/img/box-drawing/04.jpg",
                        title: "陪伴是最长情的告白",
                        author: "儿童插画师-MO",
                    },
                    {
                        lid: 3,
                        pic: "http://127.0.0.1:5000/img/box-drawing/04.jpg",
                        title: "陪伴是最长情的告白",
                        author: "儿童插画师-MO",
                    },
                    {
                        lid: 3,
                        pic: "http://127.0.0.1:5000/img/box-drawing/04.jpg",
                        title: "陪伴是最长情的告白",
                        author: "儿童插画师-MO",
                    }
                ],
                // 动态获取回来的数据
                duct: {},
                // 商品边框、右边商品class判断
                proClass: {
                    brown: {
                        pitch: false,
                    },
                    black: {
                        pitch: true
                    },
                    borderClass: {
                        bordera: false
                    },
                },
                // 三个规格
                spec: {
                    lg: {
                        pitch: true,
                    },
                    md: {
                        pitch: false,
                    },
                    sm: {
                        pitch: false,
                    },
                    // 对应的外框尺寸
                    size: {
                        bor: "72x55cm",
                        pic: "51x34cm"
                    },
                    // 对应的金额核算
                    sum: 295,
                },
                // 遮罩层和弹出框class设置
                shoping: {
                    modal: {
                        "modal-on": false
                    },
                    shade: {
                        show: false
                    }
                },
                // cartData: [
                //     title=this.product[i].title,
                //     author= this.product[i].author,
                //     sizeBor= this.spec.size.bor,
                //     sezePic= this.spec.size.pic,
                //     price= this.spec.sum
                // ]
          
            }
        },
        created() {
                  // 需要打包发送到购物车的信息
                  console.log(123);
            // 直接通过bus总线获取数据
            // 挂载完成后，给bug添加一个add自定义事件，并定义事件处理函数
            // 第一次刷新时，未进入这个页面，所以当前bus的add事件还未添加，进入一次后，则已经创建了此事件
            // this.bus.$on("add", this.handler)
        },
        // 接受home商品页面通过路由传递过来的参数
        props: ["i"],
        // 添加页面上的点击事件
        methods: {
            // 接收传递回来的商品数据
            // handler(duct) {
            //     console.log(duct)
            //     // 将接收到值，赋值给当前组件的值
            //     this.duct=duct;
            //     console.log(this.duct.pic)
            // },
            // 设置边框选择事件
            pitch(p) {
                // 通过传入的值判断点击的是哪个边框
                var pro = this.proClass
                if (p == 0) {
                    pro.brown.pitch = true
                    pro.black.pitch = false
                    pro.borderClass.bordera = true
                } else {
                    pro.brown.pitch = false
                    pro.black.pitch = true
                    pro.borderClass.bordera = false
                }
            },
            // 商品规格点击事件
            size(s) {
                console.log(s)
                // 通过传入的值判断点击的是哪个规格
                switch (s) {
                    case 'lg':
                        // 先清空其他的样式，再给当前的
                        this.spec = {};
                        this.spec.lg = {};
                        this.spec.lg.pitch = true;
                        this.spec.size = {}
                        this.spec.size.bor = "72x55cm"
                        this.spec.size.pic = "51x34cm"
                        this.spec.sum = 295
                        break;
                    case 'md':
                        this.spec = {};
                        this.spec.md = {};
                        this.spec.md.pitch = true;
                        this.spec.size = {}
                        this.spec.size.bor = "56x43cm"
                        this.spec.size.pic = "39x26cm"
                        this.spec.sum = 190
                        break;
                    case 'sm':
                        this.spec = {};
                        this.spec.sm = {};
                        this.spec.sm.pitch = true;
                        this.spec.size = {}
                        this.spec.size.bor = "40x31cm"
                        this.spec.size.pic = "27x18cm"
                        this.spec.sum = 140
                        break;
                    default:
                        console.log(8)
                }
            },
            // 加入购物车事件
            cart() {
                this.shoping.modal["modal-on"] = true;
                this.shoping.shade.show = true;
                console.log(this.shoping)
            },
            // 关闭购物车和进入购物车事件
            closecart(i) {
                if (i) {
                    // 将当前页面已经选中的参数属性发送到商品详情页面
                    this.bus.$emit("addlist", this.spec,this.product,i)
                } else {
                    this.shoping.modal["modal-on"] = false;
                    this.shoping.shade.show = false;
                }
            }
        },
    }
</script>

<style scoped>
    div.abbr-box,
    div.abbr-text {
        float: left;
    }
    @import '../assets/css/ART_productdetails.css';
</style>
