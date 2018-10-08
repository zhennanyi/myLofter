<template id="tplBanner">
    <div class="banner-area">
        <div class="bigbox">
            <span @click="prev()"></span>
            <span @click="next()"></span>
            <div class="dots">
                <a class="dot" :class="icon[i]" @click="count(i)" v-for="(item,i) in icon"></a>
            </div>
            <!-- 二级组件放这里 -->
            <!-- 在二级组件中，接住其父组件的值 -->
            <!-- 由于套了一个最外层div，所以层级有所改变  在此处将父组件的值传递给子元素 -->
            <artbanner :banner="banner" :icon="icon"></artbanner>
        </div>
    </div>
</template>

<script>
// 引入轮播图二级组件
import artbanner from "@/components/arthome/banner/artbanner.vue";
export default {
  data() {
    return {
      banner: [
        {
          lid: 1,
          title: "《我与我的喵星人（二）》",
          author: "作者：Kwok4",
          subtitle: "《我与我的喵星人（二）》",
          piclg: "http://127.0.0.1:5000/img/ART/bannerbg2.png",
          picmd: "http://127.0.0.1:5000/img/ART/01.jpg"
        },
        {
          lid: 2,
          title: "《荒原之心 PATAGONIA》",
          author: "作者：一空之间 老飘飘的阴暗面",
          subtitle:
            "PATAGONIA的荒原将视野和心力延伸到了南美大陆的边缘。最美的风景，留给愿意独行的那一个人",
          piclg: "http://127.0.0.1:5000/img/ART/bannerbg2.png",
          picmd: "http://127.0.0.1:5000/img/ART/02.jpg"
        }
      ],
      // 用作轮播图计数
      i: 0,
      // 放几个空值，用作遍历生产icon
      icon: ["active", "1", "2"]
    };
  },
  components: {
    // 挂载二级组件
    artbanner
  },
  // 添加轮播图按钮
  methods: {
    prev() {
      console.log(this.icon);
      if (this.i > 0) {
        this.i--;
      } else {
        this.i = 2;
      }
      console.log(899);
    },
    next() {
      if (this.i < 2) {
        this.i++;
      } else {
        this.i = 0;
      }
    },
    // 设置轮播图小按钮
    count(i) {
      (this.icon = [1, 1, 1]), (this.icon[i] = "active");
    }
  },
  watch: {
    i() {
      (this.icon = [1, 1, 1]), (this.icon[this.i] = "active");
    }
  },
  mounted() {
    setInterval(() => this.next(), 2000);
  }
};
</script>


