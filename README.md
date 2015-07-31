# myslider
一个简单的slider带左右按钮左右切换js效果
依赖jQuery
调用方法及默认参数：
$('#myslide').myslide({
        		prev:'#js-btn-prev',//左按钮
        		next:'#js-btn-next',//右按钮
        		step:1,//步长
        		container:'#container',//包括滚动元素的父级容器
        		prevDisableCls:'disabled',//左按钮禁用样式
          	nextDisableCls:'disabled',//右按钮禁用样式
          	animate:false,//滚动是否带动画效果
          	timeline:500,//动画效果时间线，支持毫秒 （比如 1500）"slow","normal","fast"
          	prevClick:function(){},//左按钮点击事件
          	nextClick:function(){}//右按钮点击事件
        });
