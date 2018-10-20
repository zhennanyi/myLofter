	<!-- 封装商品二级组件 -->
import func from '../../../vue-temp/vue-editor-bridge';
<template id="tplproduct">
    <!-- 套一个空div，下方的商品组件需要用到循环生成 -->
    <div>
                 <!-- 商品的导航信息 -->
                    <ul class="list-unstyled product-cart-list ul-public">
                        <li class="checkparent"><input type="checkbox" @click="checkedAll(),alter()" class="checkall">全选</li>
                        <li>作品</li>
                        <li>商品信息</li>
                        <li>单价</li>
                        <li>数量</li>
                        <li>操作</li>
                    </ul>
        <!-- 遍历出来的pro本身就是一个元素，不需要通过i继续向下定位 -->
        <div class="product-box" v-for="(pro,i) in arr">
            <ul class="list-unstyled product-describe ul-public" @click="test($event)">
                <li class="checks">
                    <!-- checked存在任何值，都是选中状态 -->
                    <!-- 点击子元素复选框的时候，触发绑定在标签上的自定义函数，通过自定义函数，直接改变父元素当中的值 -->
                    <!--  -->
                    <input type="checkbox" @click="check(i),alter(i)" class="testcheck">
                    <!-- <el-checkbox class="testcheck"></el-checkbox> -->
                    <a href="#"><img :src="pro.pic" alt="图片加载失败" class="smpic"></a>
                </li>
                <li class="product-name">
                    <p>{{pro.title}}</p>
                    <p>{{pro.author}}</p>
                </li>
                <li>{{pro.spec}}</li>
                <li>{{pro.price}}</li>
                <li class="amend">
                    <!-- 设置数量加减事件 -->
                    <el-input-number @change="alter(i)" controls-position="center" size="mini" v-model="pro.lid" :min=min></el-input-number>
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
                arr: [],
                // 用于暂存选中的商品
                newarr: [],
                min:1
            };
        },
        // 购物车步骤，加入时，将信息插入到数据库中，购物车加载为从数据库请求
        props: ["spec", "product"],
        mounted() {
        },
        computed: {
            // 为计算属性值，可直接绑定在页面中  当内部需要计算的值改变后，会自动更新
            total() {
                return this.newarr.reduce((prev, i) => prev + i.price *  i.lid, 0);
            },
            counts() {
                return this.newarr.reduce((prev, i) => prev + i.lid, 0);
            }
        },
        methods: {
                   //控制全选
            checkedAll() {
                var checkall = document.querySelector(".checkall");
                //获取所有的多选框  
                var testcheck = document.querySelectorAll(".testcheck");
                for (var val of testcheck) {
                    //设置全选
                    val.checked = checkall.checked
                }
            },
            test(e) {
                // 利用冒泡
                if (e.target.nodeName === "BUTTON") {
                    // console.log(123);
                } else {
                    console.log(e.target);
                }
            },
            // 设置按钮的加减功能
            // 实现在页面刷新时调用一次
            alter() {
                // 每次提交前，将存储被选中商品的数组清空
                this.newarr = []
                console.log(this.newarr)
                var testcheck = document.querySelectorAll(".testcheck");
                for (var i in testcheck) {
                    //设置全选
                    if (testcheck[i].checked == true) {
                        // 每次点击时，检测当前已经被选中的商品，将其push进一个新数组
                        this.newarr.push(this.arr[i])
                    }
                }
                // 数量加减的同时，触发子元素的自定义处理事件，并通过传递需要传递给父组件的值，商品单价及数量
                this.$emit("add", this.total, this.counts);
                // 进行DOM操作通过布尔值判断按钮是否禁用   实现方法一，通过给每个商品设定单独dis值
                // e.target.toggleAttribute("disabled", this.arr[i].count < 2);
            },
            //添加商品删除功能
            del(i) {
                if (confirm("是否继续删除当前商品?")) this.arr.splice(i, 1);
            },
            check(i) {
                // 设置一个值用于计算是否全选
                var i = 0;
                var checkall = document.querySelector(".checkall");
                var testcheck = document.querySelectorAll(".testcheck");
                for (var val of testcheck) {
                    //设置全选
                    if (val.checked == false) {
                        checkall.checked = false
                    } else {
                        i++;
                    }
                    if (i == testcheck.length) {
                        checkall.checked = true
                    }
                }
            }
        },
        // 设置商品添加侦听器
        watch: {
            // 只要传入的i值有变化，则执行此函数
            i: function() {}
        },
        mounted() {
            //发送ajax请求
            var url = "http://127.0.0.1:5000/draw/cartlist";
            this.$http.get(url).then(response => {
                    this.arr = response.data;
                })
            }
        };
</script>
