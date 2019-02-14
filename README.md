# plugs
this is a plugs bags.
描述：这是一个文字逐渐显示的插件，可自定义文字内容，大小及其它样式。

参数说明：
这里$("#box")为页面中元素

$("#box").rollText({
	textbox: null,//展示文字的容器id（必传）
	texcont: null,//要展示的文字内容（必传）
	ischancolr: true,//文字颜色是否变化，可不传(默认为true)
	speed: null,//设置文字的速度，可不传
	className: null,//设置展示文字的样式，不传显示默认样式
});