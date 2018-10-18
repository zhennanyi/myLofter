   <!-- 明信片一级组件 -->
<template>
    <div class="box_drawing">
        <h2 class="text-center pt-4 border-top mb-3">明信片</h2>
        <colcard> </colcard>
        <div class="col-sm-12 mt-4 mb-4">
              <router-link to="/ArtCard" class="nav_text">查看更多&gt&gt</router-link>
        </div>
    </div>
</template>
<script>
    import colcard from "@/components/arthome/postcard/colcard.vue";
    export default {
        data() {
            return {};
        },
        components: {
            // 挂载二级组件
            colcard
        }
    };
</script>
