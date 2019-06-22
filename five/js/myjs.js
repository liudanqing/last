window.onload = function(){
    // var cover1 = document.getElementsByClassName("subject1")[0];
    var cover2 = document.getElementsByClassName("subject2")[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>100){
            cover2.style.position = "fixed";
            cover2.style.top = "0";
		}else {
            cover2.style.position = "static";
		}
	}
}

var nav = document.getElementsByClassName("mr-auto")[0].children;

nav[0].onclick = function() {
	for(var i = 0; i < nav.length; i++) {
		nav[i].className = "nav-item";
	}
	this.className = "active "+"nav-item";
}
nav[1].onclick = function() {
	for(var i = 0; i < nav.length; i++) {
		nav[i].className = "nav-item";
	}
	this.className = "active "+"nav-item";
}
nav[2].onclick = function() {
	for(var i = 0; i < nav.length; i++) {
		nav[i].className = "nav-item";
	}
	this.className = "active "+"nav-item";
}
nav[3].onclick = function() {
	for(var i = 0; i < nav.length; i++) {
		nav[i].className = "nav-item";
	}
	this.className = "active "+"nav-item";
}
