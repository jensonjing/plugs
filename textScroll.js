/** 
 * 调用方式
 * $("#dataNums").rollNum({
 *    deVal: 要传入的数字,
 *    className: null,//可不传，自定义数字样式
 *    digit: null//可不传，显示几位数字
 * });
*/

//数字滚动
(function($, window, document) {
    "use strict";
    var defaults = {
        deVal: 0,       //传入值
        className: null,
        digit: null //显示几位数字
    };
    function rollNum(obj, options){
        this.obj = obj;
        this.options = $.extend(defaults, options);
        this.init = function(){
             this.initHtml(obj,defaults);
        }
    }
    rollNum.prototype = {
        initHtml: function(obj,options){
            var strHtml = '<ul style="display: block;text-align: center;">';
            var valLen = options.digit ||  (options.deVal + '').length;
            for (var i = 0; i < valLen; i++) {
                strHtml += '<li style="margin-top:0;padding-top:0;text-align: center;display: inline-block;letter-spacing: normal;word-spacing: normal;list-style: none;"><div class="dataBoc" style="position: relative;width: 100%;height: 100%;display: block;overflow: hidden;"><div class="tt" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" t="38"><span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">0</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">1</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">2</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">3</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">4</span><span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">5</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">6</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">7</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">8</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">9</span><span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">0</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">1</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">2</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">3</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">4</span><span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">5</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">6</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">7</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">8</span> <span style="width: 100%;height: 100%;display: inline-block;letter-spacing: normal;word-spacing: normal;">9</span></div></div></li>';
            }
            strHtml += '</ul>';
            obj.html(strHtml);
            if (options.className){
                $(obj).find('ul').find('li').addClass(options.className)
            }else{
                $(obj).find('ul').find('li').css({
                    color:'#fff',
                    width: "80px",
                    height: "100px",
                    marginRight:'5px',
                    fontSize:'50px',
                    backgroundColor:'#0080ff',
                    lineHeight:'100px'
                })
            }
            this.scroNum(obj, options);
        },
        scroNum: function(obj, options){
            var number = options.deVal;
			var $num_item = $(obj).find('ul').find('.tt');
            var h = $(obj).find('.dataBoc').height(); 
            $num_item.css('transition','all 2s ease-in-out');
            var numberStr = number.toString();
            if(numberStr.length <= $num_item.length - 1){
                var tempStr = '';
                for(var a = 0; a < $num_item.length - numberStr.length; a++){
                    tempStr += '0';
                }
                numberStr = tempStr + numberStr;
            }

            var numberArr = numberStr.split('');
            $num_item.each(function(i, item) {
                setTimeout(function(){
                    $num_item.eq(i).css('top',-parseInt(numberArr[i])*h - h*10 + 'px');
                },i*100)
            });
        }
    }
    $.fn.rollNum = function(options){
        var $that = this;
        var rollNumObj = new rollNum($that, options);
        rollNumObj.init();
    };
})(jQuery, window, document);