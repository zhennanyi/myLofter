// 获取到规格修改按钮，并在其中找打所有跟规格相关的改变元素
$("[data-pitch=three]").click(function(e){
    var $size = $(e.target);
    $size.children().addClass("pitch")
    $size.siblings().children().removeClass("pitch")
    // 通过当前选中元素的位置确定点击的元素，设定规格内容和价格内容
    if ($("[data-pitch=three]").index($size) == 0){
        $("div.test>span:nth-of-type(1)").html(`外框：72x55cm`)
        $("div.test>span:nth-of-type(2)").html(`图片：51x34cm`)
        $("div.spec+h5").html(`价格295元`)
    } else if ($("[data-pitch=three]").index($size) == 1){
        $("div.test>span:nth-of-type(1)").html(`外框：56x43cm`)
        $("div.test>span:nth-of-type(2)").html(`图片：39x26cm`)
        $("div.spec+h5").html(`价格190元`)
    }else{
        $("div.test>span:nth-of-type(1)").html(`外框：40x31cm`)
        $("div.test>span:nth-of-type(2)").html(`图片：27x18cm`)
        $("div.spec+h5").html(`价格140元`)
    }
})
// 改变元素边框选项和右边大图样式
$("[data-pitch=two]").click(function (e) {
    var $size = $(e.target);
    $size.children().addClass("pitch")
    $size.siblings().children().removeClass("pitch")
    // 获取左侧大图边框
    //通过index方法获取当前选中的位置
    if ($("[data-pitch=two]").index($size)==0){
        $("div.abbr").addClass("borderb")
        console.log($("div.abbr"))
    }else{
        $("div.abbr").removeClass("borderb")
    }
})
// 设定提示框事件
// 1、查找点击事件
$("[data-toggle=haha]").click(function(){
    // 查找模态框位置
    $("div.modal").addClass("modal-on")
//    给整个网页加上浅灰背景
    $(".shade").show();

})
// 隐藏模态框
$("[data-dismiss=modal]").click(function(){
    $("div.modal").removeClass("modal-on")
    $(".shade").hide();
})
