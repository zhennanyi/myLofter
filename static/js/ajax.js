// 封装一个ajax请求
function ajax({url,type,data,dataType}){
    // 使用Promise对象进行创建，目的是为了能够有序的执行ajax请求
    // 将当前promise得到的open结果返回出去
    return new Promise(function(open,err){
        
        // 1、创建xhr对象
        var xhr=new XMLHttpRequest();
        // 2、绑定监听事件
        xhr.onreadystatechange=function(){
            // 如果得到响应成功的状态码
            if(xhr.readyState==4&&xhr.status==200){
                // 判断是否传入数据类型
                if(dataType!==undefined&&dataType.toLowerCase()==="jose"){
                    // 如果是json，则将数据进行解析并返回res结果
                    var res =JSON.parse(xhr.responseText);
                }else{
                    var res=xhr.responseText;
                }
                // 通过open返回结果
                open(res);
            }
        }
        // 判断是否有get请求消息
        if(type.toLowerCase()=="get"&&data!=undefined){
            url+="?"+data;
        }
        // 3、打开链接
        xhr.open(type,url,true);
        // 判断是否为post，并设定发送请求主体
        if(type.toLowerCase()==="post"){
            // 设置请求消息头
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        // 4、发送请求
        if(type.toLowerCase()=="post"&&data!=undefined){
            xhr.send(data);
        }else{
            xhr.send(null);
        }

    })
}