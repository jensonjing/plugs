# plugs
this is a plugs bags.

1、描述：这是一个文字逐渐显示的插件，可自定义文字内容，大小及其它样式。
文件： textroll.js
参数说明：
这里$("#box")为页面中元素

$("#box").rollText({
	textbox: null,//展示文字的容器id（必传）
	texcont: null,//要展示的文字内容（必传）
	ischancolr: true,//文字颜色是否变化，可不传(默认为true)
	speed: null,//设置文字的速度，可不传
	className: null,//设置展示文字的样式，不传显示默认样式
});

2、描述：这是一个数组滚动插件
文件：textScroll.js
参数说明:
这里$("#dataNums")为页面中元素

$("#dataNums").rollNum({
	deVal: getDayTime(),//要传入的数字
	//digit:2,//显示几位数
	//className: 'aa',自定义样式(改变数字样式)
});