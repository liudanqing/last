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
var div =document.getElementById("div");
var ul1 = document.getElementById("ul1");

var i=1;
div.onmouseover=function(){
	clearInterval(time);
}	
div.onmouseout=function(){
	time=setInterval(scroll,50);
}
var time = setInterval(scroll,50);
function scroll(){
	i++;	
	var now = parseInt(getStyle(ul1,"top"));
	ul1.style.top = now - 2.99 + "px";
	if(i==183){
		ul1.style.top="3px";
		i=1;
	}
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
var menu = document.getElementById('menu5');
var oNavlist = document.getElementById('point').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
menu.onmouseover = function(){
	animate(left,{opacity:60})
	animate(right,{opacity:60})
	clearInterval(timer);
}
menu.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
//onchange事件
document.getElementById("select").onchange=function(){
	var word=document.getElementById("select").children;
	var key;
	var span=document.getElementById("span");
	for(var i = 0;i < word.length;i++){
		if(word[i].selected){
			span.innerHTML="¥"+word[i].value;
			span.style.display="inline-block";
			break;
		}
	}
}

var hide1=document.getElementById("hide1");
var hide2=document.getElementById("hide2");
var hide3=document.getElementById("hide3");
var hide4=document.getElementById("hide4");
var hide6=document.getElementById("hide6");
var erwei1=document.getElementById("erwei1");
var erwei2=document.getElementById("erwei2");
hide1.onmouseover=function(){
	inn(hide1);
	inn(hide2);
}
hide1.onmouseout=function(){
	out(hide1);
	out(hide2);
}
hide2.onmouseover=function(){
	inn(hide1);
	inn(hide2);
}
hide2.onmouseout=function(){
	out(hide1);
	out(hide2);
}
hide3.onmouseover=function(){
	inn(hide3);
	
}
hide3.onmouseout=function(){
	out(hide3);
	
}
hide4.onmouseover=function(){
	inn(hide4);
	erwei2.style.display="block";
	erwei1.style.display="none";
}
hide4.onmouseout=function(){
	out(hide4);
	erwei2.style.display="none";
	erwei1.style.display="block";
}
hide6.onmouseover=function(){
	inn(hide6);
}
hide6.onmouseout=function(){
	out(hide6);
}
function inn(obj){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var now1 = parseInt(getStyle(obj,'right'));
		if(now1==-18){
			clearInterval(obj.timer);
		}else{
			obj.style.right = now1 + 1 + "px";
		}
	});
}
function out(obj){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var now1 = parseInt(getStyle(obj,'right'));
		if(now1==-86){
			clearInterval(obj.timer);
		}else{
			obj.style.right = now1 - 1 + "px";
		}
	});
}