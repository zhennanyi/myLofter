    <!-- 明信片二级组件，每个单独的商品-长形 -->
<template id="tplColCard">
    <div class="row m-auto postcard-main">
        <div class="col-sm-3 p-1" v-for="(score,i) in homecard">
            <div class="postcard-box">
                <!-- 最上层图片 -->
                <div class="postcard">
                    <img src="http://127.0.0.1:5000/img/box-drawing/art (11).jpg" alt="">
                </div>
                <!-- 下方四个空白div作为旋转背景 -->
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <!-- 商品下方title -->
            <div class="postcard-titlt">
                <p><a href="#">{{score.title|title(6)}}</a></p>
                <p><a href="#">{{score.author}}</a></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                 homecard:[]
            }
        },
        created() {
            //发送ajax请求
            var url = "http://127.0.0.1:5000/draw/drawlist";
            this.$http
                .get(url, {
                    params: {
                        page: 1,
                        pageSize: 8
                    }
                })
                .then(response => {
                    console.log(response.data)
                    this.homecard = response.data.msg.data;
                });
            console.log(12342)
        }
    }
</script>
    