// 引入轮播图二级组件
var artBanner = {
    template: "#tplArtbanner",
    data() {
        return {

        }
    },
    methods: {
        btn_click() {
            console.log(this.icon)
        }
    },
    // 在此处接住父组件中的值
    props: ["banner", "icon"]

}
// 引入轮播图一级组件
Vue.component("banner", {
    template: "#tplBanner",
    data() {
        return {
            banner: [{
                    lid: 1,
                    title: "《我与我的喵星人（二）》",
                    author: "作者：Kwok4",
                    subtitle: "《我与我的喵星人（二）》",
                    piclg: "http://127.0.0.1:5000/img/ART/bannerbg2.png",
                    picmd: "/img/ART/01.jpg"
                },
                {
                    lid: 2,
                    title: "《荒原之心 PATAGONIA》",
                    author: "作者：一空之间 老飘飘的阴暗面",
                    subtitle: "PATAGONIA的荒原将视野和心力延伸到了南美大陆的边缘。最美的风景，留给愿意独行的那一个人",
                    piclg: "http://127.0.0.1:5000/img/ART/bannerbg2.png",
                    picmd: "/img/ART/02.jpg"
                }
            ],
            // 用作轮播图计数
            i: 0,
            // 放几个空值，用作遍历生产icon
            icon: ["active", "1", "2"],
        }
    },
    components: {
        // 挂载二级组件
        artBanner,

    },
    // 添加轮播图按钮
    methods: {
        prev() {
            console.log(this.icon)
            if (this.i > 0) {
                this.i--;
            } else {
                this.i = 2
            }
            console.log(899)
        },
        next() {
            if (this.i < 2) {
                this.i++
            } else {
                this.i = 0
            }
        },
        // 设置轮播图小按钮
        count(i) {
            this.icon = [1, 1, 1],
                this.icon[i] = "active"
        }

    },
    watch: {
        i() {
            this.icon = [1, 1, 1],
                this.icon[this.i] = "active"
        }
    },
    // 设置钩子函数
    created() {


    },
    mounted() {
        setInterval(() => this.next(), 2000);
    }


})
//创建Vue实例
// 创建Vue实例对象
var vm = new Vue({
    el: "nav",
    data: {}
})






// 引入二级组件
var colDraw = {
    template: "#tplcoldraw",
    data() {
        // 设置框画数据
        return {
            //假设为请求回来的三个商品对象
            draw: [{
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
            ]
        }
    },
    methods: {
        test() {
            alert("测试成功")
        }
    }

}
// 自定义指令
Vue.directive("focus", {
    // el代表当前DOM元素
    inserted(el) { //当元素被加载到DOM树时自动执行
        // el.focus()
        console.log(233)
    }
})
// 设置过滤器
Vue.filter("title", function (val, len) {
    if (val.length <= len) {
        return val
    } else {
        return val.slice(0, len) + "...";
    }
})
var colCard = {
    template: "#tplColCard",
    data() {
        return {}
    }
}
// 创建框画一级组件
Vue.component("drawing", {
    template: "#tplDrawing",
    data() {
        return {}
    },
    components: {
        // 挂载二级组件
        colDraw,

    }
})
// 创建明信片一级组件
Vue.component("postcard", {
    template: "#tplpostcard",
    data() {
        return {}
    },
    components: {
        // 挂载二级组件
        colCard
    }
})

// 创建Vue实例对象
new Vue({
    el: "section"
})

// 引入路由组件
var index = {
    template: "#tplIndex",
}
var cart = {
    template: "#tplCarts"
}
var details = {
    template: "#tplDetails"
}
var notFound = {
    template: `<h1>404: Not Found!</h1>`
}
// 创建路由管理
var routes = [{
        path: "/",
        component: index
    },
    {
        path: "/cart",
        component: cart
    },
    {
        path: "/details",
        component: details
    },
    {
        path: "/*",
        component: notFound
    }
]
//创建Vue路由，挂在路由器
var router = new VueRouter({
    routes
})
// 创建Vue实例监控试图对象
new Vue({
    el: "#artpage",
    methods: {
        // $router为路径
        // 两种访问路径的方式，其一为通过$router去push进新的地址，其二通过router-link标签
        goto() {
            this.$router.push("/cart")
        }
    },
    router,
})