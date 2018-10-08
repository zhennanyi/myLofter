$(function () {
    $(`<link href="css/public.css" rel="stylesheet">`).appendTo("head");
    $(`<link rel="stylesheet" href="./css/module_header.css">`).appendTo("head");
    $(`<link rel="stylesheet" href="./css/module_footer.css">`).appendTo("head");
 
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
console.log(123);
})



var obj={
    name:"tom"
}
var a={
    obj
}
console.log(a)
