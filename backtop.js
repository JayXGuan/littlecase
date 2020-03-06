
window.onload = () => {

//监听onscroll的变化
//记录scrolltop的值，后期对比两个判断滚动停止
let t1 = 0, t2 = 0;
//设定定时器，定时执行判断函数
let timer = null;
let topscr = document.getElementsByClassName("retop")[0];
//记录top图标的初始位置
let topscroll = topscr.style.bottom;

 //监听滚动
document.onscroll = function() {
    clearTimeout(timer);//防止快速移动时占据
	t1 = getScrollTop();
    isScroll();
	console.log(t2);
}

//判断滚动的状态,t2>t1为向下滚动,反之向下滚动
function isScroll() {
    topscr.style.bottom = t2 > t1 ? (13 + "%" ) : (7 + "%" );
    //初始化t2为t1方便下一次判断
    t2 = t1;
    //设置延时函数令top图标回到初始位置
    timer = setTimeout(function(){
    	topscr.style.bottom = topscroll;
    },500);
}


//创建函数获取scrollTop的值
function getScrollTop() {
	//创建局部变量，记录scrollTop的值
	let s = 0;
	console.log(document.documentElement.scrollTop);
	console.log(document.body.scrollTop);
	if (document.documentElement && document.documentElement.scrollTop) {
		s = document.documentElement.scrollTop;
	} else if (document.body) {
		s =document.body.scrollTop;
	}
	return s;
}
}
