// 给ajax引入的文件添加样式的话，需要从父元素上利用冒泡添加
$("#header").on("click","[data-toggle=pull]",function(){
    //获取需要改变样式的元素
    $(this).next().toggleClass("show");
    $(".search-box").removeClass("show");
})
$("#header").on("click", ".aaa", function () {
    //获取需要改变样式的元素
    // siblings
 
    $(this).next().toggleClass("show");
    $("#bb").removeClass("show");
    // $(this).next().css({
    //     height:700
    // })

})
// 设置点击其他空白处收起下拉栏事件
var a=document.querySelector("html")
a.onclick=function(e){
    if (e.target.tagName == "A"||e.target.tagName == "INPUT"){
    }else{
        $(".dropdown").removeClass("show");
    }
}