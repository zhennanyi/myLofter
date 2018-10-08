    <!-- 明信片二级组件，每个单独的商品-长形 -->
    <template id="tplColCard">
        <div class="row m-auto postcard-main">
            <div class="col-sm-3 p-1">
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
                    <p><a href="#">陪伴是最长情的...</a></p>
                    <p><a href="#">儿童插画师-MO....</a></p>
                </div>
            </div>
        </div>
    </template>
    <script>
    export default {
            data() {
        return {}
    }
    }
    </script>
    