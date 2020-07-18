// JavaScript Document
//封装一个函数代替getElmentById()的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;//用三元操作符判断id是否为字符串
}
var index=0,timer=null;
var pics=byId("items").getElementsByTagName("li");
var dots=byId("pags").getElementsByTagName("li");
var len=pics.length;

//图片轮播函数
function slideImg(){
	//设置定时器，每隔两秒切换一张一次图片
	
	var slider=byId("slider");
	//滑过清除定时器，离开继续
	slider.onmouseover=function(){
		//滑过清除定时器
		if(timer) {clearInterval(timer);}
	}
	slider.onmouseout=function(){  //调用onmouseout事件
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
		//切换图片
			changeImg();
		},2000);
	}
	
	//自动在slider上触发鼠标离开的事件
	slider.onmouseout();//调用onmouseout方法
	
	//点击圆点切换图片
	for(var j=0;j<len;j++){
		dots[j].id=j;
	dots[j].onclick=function(){
		index=this.id;
		changeImg();
	   }
	}
	
}

//切换图片函数
function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		dots[i].className="";
	}
	//根据index索引找到当前div和当前span,将其显示出来和设为当前
	pics[index].style.display='block';
	dots[index].className="current";
}

slideImg();