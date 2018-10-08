// 引入商品二级组件
var product = {
    template: "#tplproduct",
    data() {
        return {
            arr: [{
                    smpic: "http://127.0.0.1:5000/img/ART/cart01.jpg",
                    details: "ART_productdetails.html",
                    name: "情绪集",
                    author: "倮生",
                    spec: "明信片(8张)",
                    price: 20,
                    count: 2,
                    // 暂时使用每个商品私有的disable解决问题

                },
                {
                    smpic: "http://127.0.0.1:5000/img/ART/cart01.jpg",
                    details: "ART_productdetails.html",
                    name: "情绪集",
                    author: "倮生",
                    spec: "明信片(8张)",
                    price: 30,
                    count: 5,

                },
                {
                    smpic: "http://127.0.0.1:5000/img/ART/cart01.jpg",
                    details: "ART_productdetails.html",
                    name: "情绪集",
                    author: "倮生",
                    spec: "明信片(8张)",
                    price: 60,
                    count: 2,

                }
            ],

        }
    },
    // 接住父元素传递的checked状态值
    // props中的数据为父元素单向传递过来，此值随父元素的变化而变化，但是不能改变父元素的值
    // 并且每次父元素更新，此值也会更新，如果想作为局部数据使用的话，需要声明其他的值接住这个值
    props: {
        checked: "",
    },
    computed: {
        // 为计算属性值，可直接绑定在页面中
        total() {
            // 其中prev初始为reduce传递进来的第二个参数，执行计算后，为上一次返回的值
            return this.arr.reduce((prev, i) => prev + i.price * i.count, 0)
        },
        counts() {
            return this.arr.reduce((prev, i) => prev + i.count, 0)
        }
    },

    methods: {
        test(e) {
            // 利用冒泡
            if (e.target.nodeName == "BUTTON") {
                console.log(123)
            } else {
                console.log(e.target)
            }

        },
        // 设置按钮的加减功能
        // 此处修改元素内的值页面会跟随改变，轮播图的active状态暂未实现，待解决
        // 实现在页面刷新时调用一次
        alter(i, handle, e) {
            console.log(e.target)
            if (handle == 0) {
                console.log(33)
                this.arr[i].count--
            } else if (handle == 1) {
                this.arr[i].count++
            }
            // 数量加减的同时，触发子元素的自定义处理事件，并通过传递需要传递给父组件的值，商品单价及数量
            this.$emit("add", this.total, this.counts)
            // 进行DOM操作通过布尔值判断按钮是否禁用   实现方法一，通过给每个商品设定单独dis值
            e.target.toggleAttribute('disabled', this.arr[i].count < 2)
        },
        //添加商品删除功能
        del(i) {
            if (confirm("是否继续删除当前商品?"))
                this.arr.splice(i, 1)
        },
        check(i) {
            //    想办法改变父元素的值
            this.$emit("change", i)
        },
    },
    mounted() {
        // 无法直接执行for循环
        // for (var i = 0; i < this.arr.lenght; i++) {
        //     console.log(893)
        // }
        // 需要使用标准语法进行匿名函数自调用
        // 使用箭头函数避免this指向问题
        // (() => {
        //     for (var i = 0; i < this.arr.length; i++) {
        //         // 调用methods的参数问题解决
        //         this.alter(i);
        //     }
        // })();
        console.log(678678)
    }

}
// 引入一级组件
Vue.component("cart", {
    template: "#tplcart",
    components: {
        // 挂载二级组件
        product
    },
    data() {
        return {
            total: 0,
            counts: 0,
            // 通过数组下标值判断
            checked: [true, false, true],
            checked$: [false]
        }
    },
    methods: {
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
    mounted() {
    }
})



new Vue({
    el: "main",
    data: {

    },



})