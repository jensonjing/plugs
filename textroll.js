(function ($) {
    $.fn.rollText = function (settings) {
        if (this.length < 1) return;
        //默认值
        settings = $.extend({
            textbox: null,//展示文字的容器id（必传）
            texcont: null,//要展示的文字内容（必传）
            ischancolr: true,//文字颜色是否变化，可不传(默认为true)
            speed: null,//设置文字的速度，可不传
            className: null,//设置展示文字的样式，不传显示默认样式
        }, settings)

        if (settings.textbox == null) {
            return;
        };

        var textcont = settings.texcont;
        if (textcont != null) {
            textcont = textcont.split("");
        };

        if (settings.speed == null) {
            settings.speed = 140;
        };

        if (settings.className != null) {
            $("#" + settings.textbox).addClass(settings.className);
        } else {
            $("#" + settings.textbox).css({
                fontSize: '24px',
                marginLeft: '100px',
                marginRight: '100px',
                marginTop: '50px'
            });
        };

        var color = ['#f44336', '#e91e63', '#03a9f4', '#8bc34a', '#cddc39', '#ffeb3b', '#ff9800', '#ff5722', '#ef0be8', '#c1ef0b'];
        var texcolor = settings.ischancolr;
        var a = 0;
        var textrun = setInterval(function () {
            if (a <= textcont.length - 1) {
                $("#" + settings.textbox).append(textcont[a]);
                a += 1;
            } else {
                clearInterval(textrun);
            };
            if (texcolor) {
                var rdm = Math.floor(Math.random() * 10);
                $("#" + settings.textbox).css({
                    color: color[rdm]
                })
            };
        }, settings.speed)
    }
})(jQuery)