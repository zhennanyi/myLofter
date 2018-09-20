// 请求其他的页面模块
$.ajax({
    url: './module_footer.html',
    type: 'get',
    success: function (res) {
        $('#footer').html(res)
    }
});	
$.ajax({
    url: './module_header.html',
    type: 'get',
    success: function (res) {
        $('#header').html(res)
    }
});
$.ajax({
    url: './module_browse.html',
    type: 'get',
    success: function (res) {
        $('#browse').html(res)
    }
});
// 用户喜欢按钮样式
$(".nlike").click(function(){
    var a = 1;
    var like = this;
    var hot = like.parentElement.firstElementChild;
    // 如果当前热度值没有被改变过，则++
    if (hot.innerHTML == `热度(${a})`) {
        var n = a + 1;
        // 改变元素的同时，改变自身的css样式
        like.className = "heart like";
        console.log(hot.className)
    } else {
        // 否则，将n值恢复原样
        var n = a;
        like.className = "heart nlike";
        console.log(hot.className)
    }//可以将此值存储到当前动态的总值中
    hot.innerHTML = `热度(${n})`
})
// 实现用户评论下拉框动画效果
$("[data-target=down]").click(function () {
    var $down=$(this);
    // 此下拉框高度，应该根据评论条数动态改变，高度应为评论数量*div高度
    $down.parent().parent().parent().next().toggleClass("show").next().removeClass("show");
    // 此为单独改变css样式值的几种做法
    // $(".user-flow").css({
    //     height:774
    // })
    //   $(".user-flow").css("height",774)
    // 用过去跟随下拉框的高度进行变化
    // $(".user-flow").animate({height:774},500)
})

// 实现用户分享下拉框动画效果
$("[data-target=share]").click(function () {
    var $share = $(this);
    //    一个按钮仅有两种状态时，则采用这种方式进行状态改变
    // 此下拉框高度，应该根据评论条数动态改变，高度应为评论数量*div高度
    $share.parent().parent().parent().next().next().toggleClass("show").prev().removeClass("show");
})
// 实现用户点击推荐按钮事件
$("[data-toggle=recomment]").click(function () {
    $rec = $(this);
    var text=$rec.html();
    var newtext="已推荐";
    if(text!=newtext){
        $rec.html(newtext)
    }else{
        $rec.html("推荐")
    }
})

// 设定标签悬浮效果，如果一个元素只有移入移出效果，则可用hover
$("[data-toggle=suspend]").hover(
    function () {
        // 永远让当前标签的子元素显示当前标签的内容
        var $span=$(this).children().find("span.t")
        $span.html(`${$(this).html()}`)
        // 让元素显示出来
        $(this).children().toggleClass("lable-a")
    }
)
// 实现用户点击图片显示全图的效果
$("[data-toggle=bigimg]").click(function(){
    // 给当前图片添加其他样式
    // 设置为仅对当前图片有效
    var $bigimg=$(this);
    // 改变左边图片样式
    $bigimg.toggleClass("left_img");
    //点击后隐藏右边文字
    $bigimg.next().toggleClass("right_text-one")
})

// 鼠标悬停折角事件————凡是所有多个元素共用的事件，都要用相对位置来出发
$(".image-flow").hover(
    function(){
        // 需要用$(this)才能选中当前元素
        var $angle=$(this);
        // 当仅鼠标移入时触发单个操作时候，则可简化成一个
        // 如果元素内只有一个子元素时，则可简写
        $angle.prev().children().toggleClass("angle-a")
    }
)
// 实现图片发布模态框
// 1、查找点击事件
$("[data-toggle=picture]").click(function () {
    // 查找模态框位置
    $(".publishbar").addClass("wirte-one");
    //    给整个网页加上浅灰背景
    $(".shade").addClass("off")
    setTimeout(function(){
        // 让后面的五个图标直接隐藏
        $(".publishbar").removeClass("wirte-one");
        $(".publishbar").addClass("wirte");
        $("div.picture").addClass("picture-on");
    },300)

 
 

})
// 隐藏模态框
$("[data-dismiss=picture]").click(function () {
    $("div.picture").removeClass("picture-on");
    setTimeout(function () {
        // 让后面的五个图标直接隐藏
        $(".publishbar").removeClass("wirte");
     
    }, 200)

 
    // 移除模态框
    $(".shade").removeClass("off")
 
})





// //测试
// $("#d1").click(function(){
//     console.log(233)
// })
// $("#d1").mouseenter(function(){
//     console.log(777)
// })



// $("#d1").hover(
//     function () {
//     console.log(233)
//     },//给enter的
//     function () {
//         console.log(999)
//     },
// )