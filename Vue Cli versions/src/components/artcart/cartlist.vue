	<!-- 封装商品二级组件 -->
import func from '../../../vue-temp/vue-editor-bridge';
<template id="tplproduct">
    <!-- 套一个空div，下方的商品组件需要用到循环生成 -->
    <div>
        <!-- 遍历出来的pro本身就是一个元素，不需要通过i继续向下定位 -->
        <div class="product-box" v-for="(pro,i) in arr">
            <ul class="list-unstyled product-describe ul-public" @click="test($event)">
                <li class="checks">
                    <!-- checked存在任何值，都是选中状态 -->
                    <!-- 点击子元素复选框的时候，触发绑定在标签上的自定义函数，通过自定义函数，直接改变父元素当中的值 -->
                    <input type="checkbox" v-model="checked[i]" @click="check(i)">
                    <a :href="pro.details"><img :src="pro.smpic" alt=""></a>
                </li>
                <li class="product-name">
                    <p>{{pro.name}}</p>
                    <p>{{pro.author}}</p>
                </li>
                <li>{{pro.spec}}</li>
                <li>{{pro.price}}</li>
                <li class="amend">
                    <!-- 设置数量加减事件 -->
                    <!-- 设置按钮的disabled属性，只有当dis的值为flase时，按钮才会移除disabled属性 -->
                    <button @click="alter(i,0,$event)"></button>
                    <span data-toggle="count">{{pro.count}}</span>
                    <button @click="alter(i,1,$event)"></button>
                </li>
                <li><span class="delete" @click="del(i)">删除</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // 此数据对应当前购物车有多少商品
                arr: [{
                        smpic: "http://127.0.0.1:5000/img/ART/cart01.jpg",
                        details: "ART_productdetails.html",
                        name: "情绪集",
                        author: "倮生",
                        spec: "明信片(8张)",
                        price: 20,
                        count: 2
                    },
                    {
                        smpic: "http://127.0.0.1:5000/img/ART/cart01.jpg",
                        details: "ART_productdetails.html",
                        name: "情绪集",
                        author: "倮生",
                        spec: "明信片(8张)",
                        price: 30,
                        count: 5
                    },
                    {
                        smpic: "http://127.0.0.1:5000/img/ART/cart01.jpg",
                        details: "ART_productdetails.html",
                        name: "情绪集",
                        author: "倮生",
                        spec: "明信片(8张)",
                        price: 60,
                        count: 2
                    }
                ]
            };
        },
        // props: ["checked", "i"],
        // 得到i值后，通过lid查询数据库得到对应商品的信息，将其push进arr数组
        props: ["checked","spec","product"],
        created(){
            console.log(this.checked)
        },
        computed: {
            // 为计算属性值，可直接绑定在页面中
            total() {
                // 其中prev初始为reduce传递进来的第二个参数，执行计算后，为上一次返回的值
                return this.arr.reduce((prev, i) => prev + i.price * i.count, 0);
            },
            counts() {
                return this.arr.reduce((prev, i) => prev + i.count, 0);
            }
        },
        methods: {
     
            test(e) {
                // 利用冒泡
                if (e.target.nodeName == "BUTTON") {
                    console.log(123);
                } else {
                    console.log(e.target);
                }
            },
            // 设置按钮的加减功能
            // 此处修改元素内的值页面会跟随改变，轮播图的active状态暂未实现，待解决
            // 实现在页面刷新时调用一次
            alter(i, handle, e) {
                console.log(e.target);
                if (handle == 0) {
                    this.arr[i].count--;
                } else if (handle == 1) {
                    this.arr[i].count++;
                }
                // 数量加减的同时，触发子元素的自定义处理事件，并通过传递需要传递给父组件的值，商品单价及数量
                this.$emit("add", this.total, this.counts);
                // 进行DOM操作通过布尔值判断按钮是否禁用   实现方法一，通过给每个商品设定单独dis值
                e.target.toggleAttribute("disabled", this.arr[i].count < 2);
            },
            //添加商品删除功能
            del(i) {
                if (confirm("是否继续删除当前商品?")) this.arr.splice(i, 1);
            },
            check(i) {
                //    想办法改变父元素的值
                this.$emit("change", i);
            },
        },
        // 设置商品添加侦听器
        watch: {
            // 只要传入的i值有变化，则执行此函数
            i: function() {}
        },
        mounted() {
            // if (this.i) {
            //     console.log(98)
            //     var newly = this.arr.slice(-1);
            //     // 由于截取出来的是一个数组，需要将数组的第一个值push进原数组
            //     this.arr.push(newly[0]);
            // }
        }
    };
</script>
