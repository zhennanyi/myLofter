//设置按钮全选功能
//选择需要进行操作的全选按钮
var checkparent = document.querySelector(
    "li.checkparent>input:nth-of-type(1)"
);

//先查找需要操作的所有子按钮，以便于多次操作
var checks = document.querySelectorAll(
    "li.checks>input:nth-of-type(1)"
);
//绑定事件处理函数
checkparent.onclick = function () {
    var checkparent = this;
    for (var key of checks) {
        key.checked = checkparent.checked;
    }
    // 先改变上方的多选框的值，再调用函数进行计算，写在上方，
    total();
}


// 利用冒泡特性实现父元素加载功能
// 获取所有实现数量加减按钮的父元素
var btncount = document.querySelector(".product-box");
//给父元素绑定监听事件
btncount.onclick = function (e) {
    // 如果点击的是input框
    if (e.target.nodeName === "INPUT") {
        total();
        var unchecked = document.querySelector(
            "li.checks>input:nth-of-type(1):not(:checked)"
        );
        if (unchecked != null) {
            checkparent.checked = false;
        } else {
            checkparent.checked = true;
        }

    }
    // 如果点击的是button按钮
    if (e.target.nodeName === "BUTTON") {
        var btn = e.target;
        //由于有了多个按钮，所以需要通过相对位置来获取
        var span = btn.parentElement.children[1];
        // 将元素进行修改
        var n = parseInt(span.innerHTML);
        if (btn == span.nextElementSibling)
            n++;
        else if (n > 1)
            n--;
        span.innerHTML = n;
        // 当有影响金额的触发事件时，调用此函数
        total();
    }
}



// 创建一个函数用来第一次更新商品的总金额，目的是为了在启动页面时就先调用一次，金额为选中框选中后的
total = function () {
    // 获取需要修改的总金额
    var total = document.querySelector(
        // 从当前cart  div下开始选取
        "div.settle-accounts>span:nth-of-type(3)"
    )

    // 获取当前商品的单价
    var price = cart.querySelector(
        "div>div>ul>li:nth-of-type(4)"
    )
    // 将通过计算的单价，赋值给计算得出的总金额
    // 获取当前页面上所有已经添加的商品数量
    var sum = document.querySelectorAll("[data-toggle=count]");
    var a = 0;//注意，a为空，与数字相加，返回undefined
    for (var i of sum) {// 遍历所有带有商品数量的按钮
        //进行一个判断，当前商品是否选中
        var verify = i.parentElement.parentElement.firstElementChild.firstElementChild;
        console.log(i)
        console.log(verify.checked)  //用于判断选择框是否被选中
        if (verify.checked === true) {
            // 将值累加进a
            a += Number(i.innerHTML);
        }
        total.innerHTML = `￥${a * price.innerHTML}`
    }
    console.log(a);

    // console.log(total)
    // 获取当前已经选取的件数，值为上面已选取商品的总和
    var count = document.querySelector(
        "div:last-child>span:nth-of-type(1)"
    )
    count.innerHTML = a
}
// 当有影响金额的触发事件时，调用此函数
total();



// 实现商品删除功能
//获取触发点击事件的元素
var dels = document.querySelectorAll(
    "span.delete"
);
//设置事件处理函数
for (var del of dels) {
    del.onclick = function () {
        var del = this;
        // 获取需要改变的元素
        var parentul = del.parentElement.parentElement;
        console.log(parentul);
        if (confirm("继续删除当前商品吗？"))
            parentul.remove();
        total();
    }
}