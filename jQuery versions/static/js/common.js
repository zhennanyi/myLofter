//封装函数
//通过四种方式获取标签内容
function $({id:id,
			tagname:tagname,
			name:name,
			classname:classname,
			//此为需要提供的父元素名字
			parent:parent
}){
	if(id!==undefined){
		return document.getElementById(id);
	}
	if(tagname!==undefined){
		console.log(123);
		return parent.getElementsByTagName(tagname)
	}
	if(name!==undefined){
		return document.getElementsByName(name);
	}
	if(classname!==undefined){
		return parent.getElementsByClassName(classname)
	}
	
}

//创建异步函数
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHttp');
		}
	return xhr ;
}



