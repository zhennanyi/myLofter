    <!-- 二级组件，每个单独的商品-方形 -->
<template id="tplcoldraw">
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
</template>
<script>
    export default {
        data() {
            // 设置框画数据
            return {
                //假设为请求回来的三个商品对象
                // 只请求需要显示的内容，不同页面需要不同的内容，发送不同的请求获取即可
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
        // 在此处接住父组件中的值
        props: ["banner", "icon"],
        methods: {
            btn_click(i) {
                // 路由传参
                this.$router.push("/details/"+i)
                // 通过bus实例，在数据总线中传递自身的商品数据,不完善，
                // 有错误，原因在于，a元素触发事件的时候，b元素的事件还未创建
                // this.bus.$emit("add",this.draw[lid])
            },
         

        },
    }
</script>