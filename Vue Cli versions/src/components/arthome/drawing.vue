   <!-- 一级字组件，整个框画列表 -->
<template>
    <div class="box_drawing">
        <!-- 主标题 -->
        <h2 class="text-center pt-4">框画</h2>
        <!--使用栅格布局，每四个商品为一个row -->
        <coldraw> </coldraw>
        <div class="col-sm-12 mt-4 mb-4">
            <router-link to="/ArtDraw" class="nav_text">查看更多&gt&gt</router-link>
        </div>
    </div>
</template>
<script>
    import coldraw from "@/components/arthome/drawing/coldraw.vue";
    export default {
        data() {
            return {}
        },
        components: {
            // 挂载二级组件
            coldraw,
        }
    }
</script>
