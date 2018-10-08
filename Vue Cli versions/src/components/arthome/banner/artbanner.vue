    <!-- 二级组件，每个单独的轮播区域 -->
    <template id="tplArtbanner">
        <!-- 需要一个唯一的父元素，如果在最外层div中加上v-for遍历，则不满足此条件 -->
        <div>
            <div class="art-banner row" v-for="(sum,i) in banner" :class="icon[i]">
                <div class="col-sm-3 pt-5">
                    <div class="banner-text">
                        <a href="#" class="h2 mb-4">{{sum.title}}</a>
                        <a href="#" class="author">{{sum.author}}</a>
                        <p>{{sum.subtitle}}</p>
                    </div>
                </div>
                <div class="col-sm-9 pip">
                    <img :src="sum.piclg" alt="" class="pip-big">
                    <img :src="sum.picmd" alt="" class="pip-small">
                </div>
            </div>
            <div class="art-banner banner2 row" :class="icon[2]">
                <div class="col-sm-4 pt-5 banner2-left">
                    <div class="">
                        <img src="http://127.0.0.1:5000/img/8888.jpg" alt="" class="day">
                    </div>
                </div>
                <div class="col-sm-8 banner2-right">
                    <div class="banner-text">
                        <a href="#" class="h2 mb-4" @click="btn_click">《花》</a>
                        <a href="#" class="author">作者：Kwok4</a>
                        <p>花</p>
                    </div>
                    <img src="http://127.0.0.1:5000/img/ART/bannerbg1.png" alt="" class="pip-small">
                </div>
            </div>

        </div>
    </template>
<script>
export default {
        data() {
        return {}
    },
    // 在此处接住父组件中的值
    props: ["banner", "icon"],
        methods: {
        btn_click() {
            console.log(this.icon)
        }
    },
}
</script>