// 层级越低写在越上面
// 四级-底部左侧按钮
var bomLeft = {
    template: "#tplBomLeft",
    data() {
        return {}
    }
}
// 四级-底部右侧按钮
var bomRight = {
    template: "#tplBomRight",
    data() {
        return {}
    }
}
// 三级-上方文字
var subTitle = {
    template: "#tplSubtitle",
    data() {
        return {}
    }
}
// 三级-左侧图片
var leftImg = {
    template: "#tplLeftImg",
    data() {
        return {}
    }
}
// 三级-右侧文字
var rightText = {
    template: "#tplRightText",
    data() {
        return {}
    }
}
// 三级-底部操作按钮
var bomButton = {
    template: "#tplBomButton",
    data() {
        return {}
    },
    components: {
        bomLeft,
        bomRight
    }
}
// 二级-左侧用户头像组件
var userHead = {
    template: "#tplUserHead",
    data() {
        return {}
    }
}
// 二级-顶部半角特效条
var uAngle = {
    template: "#tplUangle",
    data() {
        return {}
    }
}

// 二级 - 右侧主要内容父组件
var userImgFlow = {
    template: "#tplUimgFlow",
    data() {
        return {}
    },
    // 将此二级组件需要的三级组件放入其中
    components:{
        //上方小标题
        subTitle,
        // 左侧图片
        leftImg,
        // 右侧文字
        rightText,
        bomButton

    }
}


// 二级-下拉隐藏框
var comment = {
    template: "#tplComment",
    data() {
        return {}
    }
}
// 二级-下拉分享框
var shareIcon = {
    template: "#tplShareIcon",
    data() {
        return {}
    }
}
// 创建最大父组件，创建到全局
Vue.component("userFlow", {
    template: "#tplUserFlow ",
    data() {
        return {}
    },
    components:{
        // 使用驼峰式命名，在使用标签时，自动转为-形式
        // 将三个二级组件放入最大父组件，嵌套关系唯一作用为数据绑定和确定父子关系，跟html结构嵌套没有关系
        userHead,
        uAngle,
        userImgFlow,
        // 放入两个需要隐藏动画的二级组件
        comment,
        shareIcon
    }

})
// 创建Vue实例对象
new Vue({
    el:"main"
})