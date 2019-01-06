window.onload = function(){
	var cover = document.getElementsByClassName("head")[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = "fixed";
		}else{
			cover.style.position = "static";
		}
	}
}
function click1(){
	var span1=document.getElementById("span1");
	var span2=document.getElementById("span2");
	span1.style.border="2px solid #ff0754";
	span1.style.background="url(img/duigou.png) 49px 17px no-repeat";
	span1.setAttribute("class","1");
	span2.setAttribute("class","0");
	span2.style.border="";
	span2.style.background="";
	var choice=document.getElementById("choice");
	var ch=document.getElementById("span1");
	choice.innerHTML="“"+ch.innerHTML+"”";
}
function click2(){
	var span1=document.getElementById("span1");
	var span2=document.getElementById("span2");
	span2.style.border="2px solid #ff0754";
	span2.style.background="url(img/duigou.png) 49px 17px no-repeat";
	span2.setAttribute("class","1");
	span1.setAttribute("class","0");
	span1.style.border="";
	span1.style.background="";
	var choice=document.getElementById("choice");
	var ch=document.getElementById("span2");
	choice.innerHTML="“"+ch.innerHTML+"”";
}
function change1(){
	var sp0=document.getElementById('sp0');
	var sp1=document.getElementById('sp1');
	var small=document.getElementById('small');
	var Bimg=document.getElementById("Bimg");
	small.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg";
	sp0.style.border="2px solid red";
	sp1.style.border="";
}
function change2(){
	var sp0=document.getElementById('sp0');
	var sp1=document.getElementById('sp1');
	var small=document.getElementById('small');
	var Bimg=document.getElementById("Bimg");
	Bimg.src="img/pp1.jpeg";
	small.src="img/pp1.jpeg";
	sp1.style.border="2px solid red";
	sp0.style.border="";
}

//1、获取元素
var box=document.getElementById("box");
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var slider=document.getElementById("slider");
var Bimg=document.getElementById("Bimg");
//2、给左侧小图绑定鼠标移入、移除、移动事件
img1.onmouseover=function(){
	box.style.width="819px";
	slider.style.display="block";
	img2.style.display="block";
}
img1.onmouseout=function(){
	box.style.width="408px";
	slider.style.display="none";
	img2.style.display="none";
}
img1.onmousemove=function(ev){
	var ev=ev || window.event;
	//（1）根据鼠标位置计算放大镜位置
	var st = document.documentElement.scrollTop || document.body.scrollTop;//滚动条向下滚动的距离
	var left=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
	var top=ev.clientY+st-box.offsetTop-slider.offsetHeight/2;
	var maxLeft=img1.offsetWidth-slider.offsetWidth;
	var maxTop=img1.offsetHeight-slider.offsetHeight;
	left=left>maxLeft?maxLeft:left<0?0:left;
	top=top>maxTop?maxTop:top<0?0:top;
	//（2）设置放大镜位置
	slider.style.left=left+"px";
	slider.style.top=top+"px";
	//根据左侧放大镜的位置，计算右侧大图移动比例
	var w=left/maxLeft;
	var h=top/maxTop;
	//计算大图的最大移动范围
	var BimgLeft=img2.offsetWidth-Bimg.offsetWidth;
	var BimgTop=img2.offsetHeight-Bimg.offsetHeight;
	//计算大图的移动距离，设置位置
	Bimg.style.left=w*BimgLeft+"px";
	Bimg.style.top=h*BimgTop+"px";
}

var add=document.getElementsByClassName("add")[0];
var dec=document.getElementsByClassName("dec")[0];
var num=document.getElementsByClassName("num")[0];
add.onclick=function(){
	num.value=parseInt(num.value)+1;
	if(parseInt(num.value)>=5){
		this.style.cursor="not-allowed";
		dec.style.cursor="pointer";
		num.value=5;
	}else if(parseInt(num.value)!=5){
		this.style.cursor="pointer";
		dec.style.cursor="pointer";
	}
}
dec.onclick=function(){
	num.value=parseInt(num.value)-1;
	if(parseInt(num.value)<=1){
		this.style.cursor="not-allowed";
		add.style.cursor="pointer";
		num.value=1;
	}else if(parseInt(num.value)!=1){
		add.style.cursor="pointer";
		this.style.cursor="pointer";
	}
}
var cart=document.getElementsByClassName("cart")[0];
var subject5=document.getElementsByClassName("subject5")[0];
var subject6=document.getElementsByClassName("subject6")[0];
cart.onclick=function(){
	subject5.style.display="block";
	subject6.style.display="block";
}
function del(){
	subject5.style.display="none";
	subject6.style.display="none";
}