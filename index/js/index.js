/*
	Created on 2017-04-13
	@author: 吴涛
	@summary: 安天网页动画
	@version: 0.1
*/
//文档就绪函数
$(document).ready(function($) {
	//下拉菜单鼠标滑入动画
	$('.nav > li').on('mouseover', function(){
		// alert('xx');
		if(this.children.length != 1){
			this.children[1].style.display = 'block';
		}else{
			return;
		}	
	});

	//下拉菜单鼠标滑出动画
	$('.nav > li').on('mouseout', function(){
		if(this.children.length != 1){
			this.children[1].style.display = 'none';
		}else{
			return;
		}
		
	});

	
	var iNow=0;
	var aBanIco = $('.ban_ico > li');
	var oBanImg = $('.ban_img');
	var aBanImg = $('.ban_img img');
	//遍历小图标
	for(var i=0; i<aBanIco.length; i++){
		//给aBanIco绑定索引属性index
		aBanIco[i].index = i;
		//轮播图小图标绑定点击事件
		aBanIco[i].onclick = function(){
			changeImg(this.index);
			iNow = this.index;
		};
	}
	function changeImg(elem){
		for(var i=0; i<aBanIco.length; i++){
            aBanIco[i].className = 'trigger';
        }
        aBanIco[elem].className = 'selected';
		// console.log(-aBanImg[0].offsetWidth * index);
        $('.ban_img').css({
        	left:-aBanImg[0].offsetWidth * elem
        });
        // console.log(aBanImg);
        // animate(aBanImg,{
        // 	left: -aBanImg[0].offsetWidth * elem
        // });
	}

// 封装的变换函数
function animate(elem,attr,callback){
    clearInterval(elem.timer);
    elem.timer = setInterval(function(){
        var bStop = true;
        for(var prop in attr){
            var curr = parseInt(getStyle(elem,prop));
            if(prop == "opacity"){
                curr = parseInt(getStyle(elem,prop)*100);
            }
            var speed = (attr[prop] = curr) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(curr != attr[prop]){
                bStop = false;
            }
            if(prop == "opacity"){
                elem.style.opacity = (curr + speed) / 100;
                elem.style.filter = "alpha(opacity" + (curr + speed) + ")";
            }else{
                elem.style[prop] = curr + speed + "px";
            }
        }
        if(bStop){
            clearInterval(elem.timer);
            callback && callback();
        }
    },30);
}
function getStyle(elem,attr){
    if(elem.currentStyle){
        return elem.currentStyle[attr];
    }else{
        return getComputedStyle(elem,false)[attr];
    }
}


//imgPlay_mark_content绑定滑入滑出事件
	var oImgContent = $('.imgPlay_mark_content');
	for(var i=0; i<oImgContent.length; i++){
		oImgContent[i].onmouseover = function(e){
			e = e || window.event;
			this.style.bottom = '0';
			this.onmouseout = function(e){
				e  = e || window.event;
				this.style.bottom = '-50px';
				// that.style.botton = '-50px';
		}			
		};

	}



//文档就绪函数结尾,勿删
});
