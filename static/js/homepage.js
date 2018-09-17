// 获取要进行操作事件的元素
var likes = document.querySelectorAll(
    // "div.bom-button>div:nth-of-type(2)>a:nth-of-type(5)"
    "div.bom-button>div:nth-of-type(2)>button"
)
// 遍历获取到的需要执行操作的元素
for (var like of likes) {
    var a = 1;//此值可以后期从当前标签总点赞次数中获取
    // 绑定事件处理函数
    like.onclick = function () {
        var like = this;
        // 查找需要改变的元素
        var hot = like.parentElement.firstElementChild;
        // 改变元素
        console.log(a)
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
    }
}
// 实现用户评论下拉框动画效果
$("[data-target=down]").click(function () {
    //    一个按钮仅有两种状态时，则采用这种方式进行状态改变
    // 此下拉框高度，应该根据评论条数动态改变，高度应为评论数量*div高度
    $(".comment").toggleClass("show").next().removeClass("show");
})

// 实现用户分享下拉框动画效果
$("[data-target=share]").click(function () {
    //    一个按钮仅有两种状态时，则采用这种方式进行状态改变
    // 此下拉框高度，应该根据评论条数动态改变，高度应为评论数量*div高度
    $("ul.last-icon").toggleClass("show").prev().removeClass("show");
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
        console.log($("[data-toggle=suspend]"))
        // 永远让当前标签的子元素显示当前标签的内容
        var $span=$(this).children().find("span.t")
        $span.html(`${$(this).html()}`)
        // 让元素显示出来
        $(this).children().addClass("lable-a")
    },//给enter的
    function () {
        $(this).children().removeClass("lable-a")
    },
)
// 实现用户点击图片显示全图的效果
$("[data-toggle=bigimg]").click(function(){
    // 给当前图片添加其他样式
    console.log(123);
    // 改变左边图片样式
    $("[data-toggle=bigimg]").toggleClass("left_img");
    //点击后隐藏右边文字
    $("[data-toggle=text]").toggleClass("right_text-one")
})
// 推荐按钮点击事件







//测试
$("#d1").click(function(){
    console.log(233)
})
$("#d1").mouseover(function(){
    console.log(777)
})
// $("#d1").hover(
//     function () {
//     console.log(233)
//     },//给enter的
//     function () {
//         console.log(999)
//     },
// )