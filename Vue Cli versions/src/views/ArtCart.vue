<template>
    <!--保持原网页结构-->
    <div class="cart-section">
        <div class="cart-main">
            <div>
                <!-- 上方购物车标题 -->
                <div class="cart-title">
                    <span>购物车</span>
                </div>
                <!-- 购物车的主体内容 -->
                <div class="product-cart" id="cart">
                    <!-- 商品的导航信息 -->
                    <ul class="list-unstyled product-cart-list ul-public">
                        <li class="checkparent"><input type="checkbox" @click="checkedAll" v-model="checked$[0]">全选</li>
                        <li>作品</li>
                        <li>商品信息</li>
                        <li>单价</li>
                        <li>数量</li>
                        <li>操作</li>
                    </ul>
                    <!--购物车内商品列表，使用二级组件-->
                    <!--自定义处理函数不打括号? -->
                    <!-- add函数为向父元素传递金额和数量 -->
                    <!-- change函数为改变父元素的全选状态    i值为当前加入购物车的商品id，此处为对应的商品下标-->
                    <cartlist @add="add" :checked="checked" :spec="spec" @change="change"></cartlist>
                    <!-- 下方结算金额块 -->
                    <div class="settle-accounts">
                        已选商品 <span>{{counts}}</span>件 <span>合计：</span><span>{{total}}</span> <a href="">结算</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // 引入购物车图
    import cartlist from "@/components/artcart/cartlist.vue";
    export default {
        data() {
            return {
                total: 0,
                counts: 0,
                // 通过数组下标值判断
                checked: [false, false, false],
                checked$: [false],
                // 商品详情获取到的数据
                spec:'',
                // 需要其中的尺寸规格和单价，即
                // spec.size  中两个  spec.sum
                product:""
                // 需要标题和作者
                // product.title  .author
            }
        },
        name: "Arthome",
        components: {
            // 挂载子组件
            cartlist
        },
        // 接收商品详情页面上通过路由传递过来的i值:已得到
        // props: ["i"],
        // 找到办法，让首次加载页面时，所有组件全部加载一次，否则创建不了bus自定义函数
        created() {
            this.bus.$on("addlist", this.handler)
        },
        methods: {
            // 获取加入购物车事件传递进来的参数
            // 加入一个商品时需要做的操作
            handler(res1,res2,i) {
                this.checked.push(true);
                console.log(this.checked)
                this.spec=res1;
                this.product=res2[i]
                console.log(this.spec,this.product)
            },
            //点击加减框时，调用一次，想办法在页面刷新时执行一次，
            add(total, counts) {
                this.total = total
                this.counts = counts
            },
            // 子元素上触发的change函数，用作改变父元素的全选状态
            change(i) {
                // 将元素自动执行的改变布尔值，手动提前到判断之前执行
                if (this.checked[i] == true) {
                    this.checked[i] = false
                } else {
                    this.checked[i] = true
                }
                var a = this.checked.indexOf(false);
                // 如果查找到数组中有空值，则取消全选
                if (a != -1) {
                    this.checked$ = [false]
                } else {
                    this.checked$ = [true]
                }
            },
            //控制全选
            checkedAll() {
                // 查找数组中是否有空值
                var a = this.checked.indexOf(false);
                // 如果找到空字符串，说明有框没被选中，则全选
                if (a != -1) {
                    this.checked = [true, true, true]
                } else {
                    // 如果没有找到空字符串，说明已经全选，则取消全选
                    // 空值不等于false，所以也会取消全选
                    // 如果全部选中，则将该数组赋值一个空字符串
                    this.checked = [false, false, false]
                }
            }
        },
    }
</script>
<!--在当前view视图主页，引入当前页面需要的css-->
<style scoped>
    @import "../assets/css/ART_shoping-cart.css";
</style>