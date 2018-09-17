// 请求其他的页面模块
// $.ajax({
//   url: './module_footer.html',
//   type: 'get',
//   success: function (res) {
//     $('#footer').html(res)
//   }
// });	
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

//轮播图测试
var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
var arr = $('div.wrap img');
console.log(arr);
var index = 0;

next.onclick = function () {
  next_pic();
}
prev.onclick = function () {
  prev_pic();
}
function prev_pic() {
  index--;
  if (index < 0) {
    index = 4;
  }
  console.log(index);
  console.log(arr.eq(index));
  arr.eq(index).css('zIndex', 10).siblings().css('zIndex', 0);
}
function next_pic() {
  index++;
  if (index > 4) {
    index = 0;
  }
  console.log(index);
  console.log(arr.eq(index));
  arr.eq(index).css('zIndex', 10).siblings().css('zIndex', 0);
}
//周期性定时器
// setInterval(func,delay);
var timer = null;
timer = setInterval(() => {
  next_pic()
}, 3000);
clearInterval(timer);  //清除周期性定时器
