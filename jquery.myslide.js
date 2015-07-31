/*! jQuery slider 
 * author dengqiuju
 * version 1.0
 * github:
 *   */

(function ($) {
	$.fn.myslide = function(options){
		var me = $(this);
        var defualts = {
        		prev:'#js-btn-prev',
        		next:'#js-btn-next',
        		step:1,//步长
        		container:'#container',
        		prevDisableCls:'disabled',
            	nextDisableCls:'disabled',
            	animate:false,
            	timeline:500,
            	prevClick:function(){},
            	nextClick:function(){}
        };
        var o = $.extend({}, defualts, options);
        var item = $(o.container).children();
        var itemWidth = item.width();
        var itemLen = item.length;
        var containerWidth =  itemLen * itemWidth;
        var regNum = /^[-]*\d*/;
        var idx = 0;//元素索引值
        var isMove = true;
        
        $(o.container).width(containerWidth);
        
        if(itemLen <= o.step){//如果子元素数量少于滚动步长，则禁用左右滚动按钮
    		$(o.prev).addClass(o.prevDisableCls);
    		$(o.next).addClass(o.nextDisableCls);
    		isMove = false;
        }
        
        $(o.prev).click(function(){
        	
        	if($(this).hasClass(o.prevDisableCls)){
    			return;
    		}
        	
        	var left = $(o.container).css('marginLeft');
        	var leftNum = left.match(regNum)[0];
        		leftNum = leftNum < 0 ? leftNum-(-o.step*itemWidth) : leftNum;

        	if(o.animate){
        		$(o.container).animate({'margin-left':leftNum+'px'},o.timeline);
        	}else{
        		$(o.container).css('margin-left',leftNum+'px');
        	}

    		if(leftNum-(-containerWidth) > o.step*itemWidth){
        		$(o.next).removeClass(o.nextDisableCls);
        	}
    		
        	if(leftNum==0){
        		$(this).addClass(o.prevDisableCls);
        	}else{
        		$(this).removeClass(o.prevDisableCls);
        	}
        	o.prevClick();
        	
        });
        
        $(o.next).click(function(){

        	if($(this).hasClass(o.nextDisableCls)){
    			return;
    		}
        	
        	var left = $(o.container).css('margin-left');
        	var leftNum = left.match(regNum)[0];
        	
        		leftNum = leftNum-(-containerWidth)==itemWidth ? leftNum :leftNum-(o.step*itemWidth);
        		
        	if(o.animate){
        		$(o.container).animate({'margin-left':leftNum+'px'},o.timeline);
        	}else{
        		$(o.container).css('margin-left',leftNum+'px');
        	}
        	
        	if(leftNum < 0){ 
        		$(o.prev).removeClass(o.prevDisableCls);
        	}
        	
        	if(leftNum-(-containerWidth) <= o.step*itemWidth){
        		$(this).addClass(o.nextDisableCls);
        	}else{
        		$(this).removeClass(o.nextDisableCls);
        	}
        	
        	o.nextClick();
        });
	};
})(jQuery);