// 给ajax引入的文件添加样式的话，需要从父元素上利用冒泡添加
$("#header").on("click","[data-toggle=pull]",function(){
    //获取需要改变样式的元素
    $("div.dropdown").toggleClass("show");
    console.log(99)
})