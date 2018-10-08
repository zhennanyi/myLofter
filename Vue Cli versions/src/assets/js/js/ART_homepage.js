//首页轮播图效果
// var i = 0;
// // 设置下方小导航点
// var dot = $(".dot");
// var bann = $("div.art-banner");

// $("[data-toggle=prev]").click(function () {
//     // 获取需要改变index值的元素
//     if (i < 3 && i > 0) {
//         i--;
//         $(bann[i]).addClass("active").siblings().removeClass("active");
//         $(dot[i]).addClass("active").siblings().removeClass("active");
//     } else if (i == 0) {
//         i = 2
//         $(bann[i]).addClass("active").siblings().removeClass("active");
//         $(dot[i]).addClass("active").siblings().removeClass("active");

//     }
// })
// $("[data-toggle=next]").click(function () {
//     // 获取需要改变index值的元素
//     if (i < 2 && i > -1) {
//         i++;
//         $(bann[i]).addClass("active").siblings().removeClass("active");
//         $(dot[i]).addClass("active").siblings().removeClass("active");
//     } else if (i == 2) {
//         i = 0
//         $(bann[i]).addClass("active").siblings().removeClass("active");
//         $(dot[i]).addClass("active").siblings().removeClass("active");
//     }
// })


// // 设置鼠标悬停时清除定时器
// var timer = null;
// $(".banner-area").hover(
//     function () {
//         clearInterval(timer); //清除周期性定时器
//     },
//     function () {
//         timer = setInterval(function () {
//             $("[data-toggle=next]").click();
//         }, 2000);
//     }
// )
// // 设置小圆点的点击事件
// $(".dots").on("click", ".dot", function () {
//     // 获取当前元素在父元素中的位置
//     var x = $(this).index();
//     $(bann[x]).addClass("active").siblings().removeClass("active");
//     $(dot[x]).addClass("active").siblings().removeClass("active");
// })
// 动态加载其他页面的内容
$(function () {
    $(`<link href="css/public.css" rel="stylesheet">`).appendTo("head");
    $(` <link href="css/ART-home.css" rel="stylesheet">`).appendTo("head");
    // $(` <link href="css/ART_header.css" rel="stylesheet">`).appendTo("head");
    $(`  <link href="css/ART_footer.css" rel="stylesheet">`).appendTo("head");

    // 请求其他的页面模块
    // $.ajax({
    //     url: './ART_header.html',
    //     type: 'get',
    //     success: function (res) {
    //         $('#header').html(res)
    //     }
    // });
    $.ajax({
        url: './ART_footer.html',
        type: 'get',
        success: function (res) {
            $('#footer').html(res)
        }
    });

})