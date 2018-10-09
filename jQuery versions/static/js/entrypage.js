// 请求其他的页面模块
$.ajax({
  url: './module_footer.html',
  type: 'get',
  success: function (res) {
    $('#footer').html(res)
  }
});	
//使用ajax封装来实现异步请求
// 因为ajax封装中已经直接用了promise对象，所以必须用.then或者async自调用获取直接结果

function check() {
  var email = $({ id: "email_" }).value;
  console.log(email);
  if (email == "") {
    alert("请输入您的邮箱或者手机号码")
  }
  // 测试不需要等待
  (async function () {//调用时加入这个方式，即为ES7语法，可直接通过res获得结果，不需要.then
    // 调用ajax
    var res = await ajax({
      url: "/user/checkedemail",
      type: "get",
      data: "email=" + email
    });
    console.log(res);
    // 此为ES6语法，需要.then来获取异步请求的结果
    // res.then(function(res){
    //   console.log(res);
    // })
  })();
}
// 进行注册验证
function register() {
  var email = $({ id: "email_" }).value;
  var upwd = $({ id: "upwd_" }).value;
  var body = "email=" + email + "&upwd=" + upwd;
  // 调用ajax
  var res = ajax({
    url: "/user/register",
    type: "post",
    data: body
  });
  res.then(function (res) {
    alert(res);
  })
}
// 进行登录验证
function login() {
  var email = $({ id: "email" }).value;
  var upwd = $({ id: "upwd" }).value;
  var body = "email=" + email + "&upwd=" + upwd;
  // 调用ajax
  var res = ajax({
    url: "/user/login",
    type: "post",
    data: body
  });
  res.then(function (res) {
    if (res.indexOf("html") != -1) {
      alert("登录成功");
      window.location.href = res;
    }
    else
      alert(res);
  })
}




// 自写轮播图
// 定义轮播图函数，judeg为当前按钮，test为判断条件，number为图片总数-1
function banner(judeg,test,number) {
  if (test == "prev") {
    if (c > 0) {
      c--;
      judeg.parent().prev().css("left", -2560 * c);
    } else {
      c = number;
      judeg.parent().prev().css("left", -2560 * c);
    }
  } else {
    if (c < number) {
      c++;
      judeg.parent().prev().css("left", -2560 * c);
    } else {
      c = 0;
      judeg.parent().prev().css("left", -2560 * c);

    }
  }
}
// 预先定义好一个计数
var c = 0;
// 获取轮播图框的图片总数
var a = $(".wrap").children().length - 1;

// 通过传入不同的参数，实现不同的调用效果
$(".arrow_left").click(function () {
  var $prev = $(this);
  banner($prev,"prev",a)

})
$(".arrow_right").click(function () {
  var $next = $(this);
  banner($next,"next",a)
})

// 设置鼠标悬停时清除定时器
var timer = null;
$("nav").hover(
  function () {
    clearInterval(timer);  //清除周期性定时器
  },
  function () {
    timer = setInterval(function () {
      $(".arrow_right").click()
    }, 2000);
  }
)





// 设置底部导航栏根据页面高度显示和隐藏
$(window).scroll(function(){
  // a为当前页面的总高度,
  //注意，不要用简单的变量，容易冲突 
  height = document.body.scrollHeight
  if ($(window).scrollTop() > 1100 && $(window).scrollTop() < height-1200){
      $(".suspend").addClass("show-strip");
  }else{
    $(".suspend").removeClass("show-strip")
  }
})