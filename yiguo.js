// // 最顶部导航栏
// 更多城市
$(".more").click(function() {
    $(".moredd").slideToggle();
});
$(".more").dblclick(function() {
    $(".moredd").click();
});
//  我的易果
$(".wdyg").click(function() {
    $(".myyiguo").slideToggle();
});
$(".wdyg").dblclick(function() {
    $(".myyiguo").click();
});
//   手机易果
$(".sjyg").click(function() {
    $(".shoujiyiguo").slideToggle();
});
$(".sjyg").dblclick(function() {
    $(".shoujiyiguo").click();
});
//  购物车
$(".shopping_car").click(function() {
    $(".car_inner").slideToggle();
});
$(".shopping_car").dblclick(function() {
    $(".car_inner").click();
});
// 商品分类
$(".li1").mouseover(function() {
    $(".li1_none").show();
})
$(".li1").mouseleave(function() {
    $(".li1_none").hide();
})
$(".li2").mouseover(function() {
    $(".li2_none").show();
})
$(".li2").mouseleave(function() {
    $(".li2_none").hide();
})
$(".li3").mouseover(function() {
    $(".li3_none").show();
})
$(".li3").mouseleave(function() {
    $(".li3_none").hide();
})
$(".li4").mouseover(function() {
    $(".li4_none").show();
})
$(".li4").mouseleave(function() {
    $(".li4_none").hide();
})
$(".li5").mouseover(function() {
    $(".li5_none").show();
})
$(".li5").mouseleave(function() {
    $(".li5_none").hide();
})
$(".li6").mouseover(function() {
    $(".li6_none").show();
})
$(".li6").mouseleave(function() {
    $(".li6_none").hide();
})
$(".li7").mouseover(function() {
    $(".li7_none").show();
})
$(".li7").mouseleave(function() {
    $(".li7_none").hide();
})
$(".li8").mouseover(function() {
    $(".li8_none").show();
})
$(".li8").mouseleave(function() {
    $(".li8_none").hide();
})
$(".li9").mouseover(function() {
    $(".li9_none").show();
})
$(".li9").mouseleave(function() {
    $(".li9_none").hide();
})
$(".li10").mouseover(function() {
    $(".li10_none").show();
})
$(".li10").mouseleave(function() {
    $(".li10_none").hide();
})
$(".li11").mouseover(function() {
    $(".li11_none").show();
})
$(".li11").mouseleave(function() {
        $(".li11_none").hide();
    })
    // 隐藏的向左
$('.list').each(function(i) {
    $('.list').eq(i).mouseenter(function() {
        $('.list>a').eq(i).animate({
            'left': -10,
        }, 150)
    })
})
$('.list').each(function(i) {
        $('.list').eq(i).mouseleave(function() {
            $('.list>a').eq(i).animate({
                'left': 0,
            }, 150)
        })
    })
    // 吸顶效果和滑层显示
function daohang() {
    var nav = document.querySelector('#fixed');
    var floor_guide = document.querySelector('#floor_guide');
    window.onscroll = function() {
        var sTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (sTop > 10) {
            nav.className = "fixed1";
        } 
        if (sTop < 10) {
            nav.className = "fixed";
        } 
        if (sTop > 500) {
            floor_guide.style.display = "block";
        } 
        if (sTop < 500) {
            floor_guide.style.display = "none";
        }
    }
}
daohang();
// 滑层
// function hcxs() {
//     var nav = document.querySelector('#floor_guide');
//     window.onscroll = function() {
//         var sTop = document.body.scrollTop || document.documentElement.scrollTop;
//         if (sTop > 500) {
//             floor_guide.style.display = "block";
//         } else if (sTop < 500) {
//             floor_guide.style.display = "none";
//         }
//     }
// }
    $('.tt1').on('mouseover',function(){
        $(this).children('em').addClass('hover').parent().siblings().children('em').removeClass('hover')  
        $(this).on('mouseout',function(){
            $(this).children('em').removeClass('hover');
        })
    })
$('em').on('click',function(){
    $(this).addClass('hover1').parent().siblings().children('em').removeClass('hover1');
})

// 滑层功能
$(function() {
    // $(".floor_guide").click(function(){  //scrollSite_btn 为触发该函数的组件的class（“样式用class，动作用id”，
    //        $("html,body").animate({scrollTop:scroll_offset.top},500); //	利用scrollTop将页面顶部位置指定到某坐标   
    // });

    var arr = ['#fl1', '#fl2', '#fl3', '#fl4', '#fl5', '#fl6', '#fl7', '#fl8', '#fl9'];
    $('.guide_inner>a').each(function(i) {
        // console.log(i);
            $('.guide_inner>a').eq(i).click(function() {
                var scroll_offset = $(arr[i]).offset();
                $('.guide_inner>a>span').display ='block';  
                $("html,body").stop().animate({ scrollTop: scroll_offset.top }, 500);
            })
        })
});
// 返回顶部
$('.back>.kf2').click(function(){
    $('body,html').animate({
        'scrollTop':0
    },500)
})
// $("#password>.yan").click(function (){
//     $("#password>.yan").css("background-image", "url(img/zhengyan.png)");
// });

// 轮播
var num = 0;
var timer = null;
var arr = ['./img/bg1.jpg', './img/bg2.jpg', './img/bg3.jpg', './img/bg4.jpg', './img/bg5.jpg', './img/bg6.jpg']
timer = setInterval(function() {
    // clearInterval(timer);
    qiehuan();
}, 3000);

function qiehuan() {
    $('.lunbo').css({
        'background':'url(' + arr[num] + ')'
    })
    num++;
    if (num == 4) {
        num = 0;
    }
}
qiehuan();
function fuqiehuan() {
    $('.lunbo').css({
        'background':'url(' + arr[num] + ')'
    })
    num--;
    if (num == 0) {
        num = 4;
    }
}
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
    next.onmouseover = function(){
        next.style.opacity = 1;
    }
    next.onmouseout = function(){
        next.style.opacity = 0.3;
    }
    next.onclick = function(){
        // clearInterval(timer)
        qiehuan();
    }
    prev.onmouseover = function(){
        prev.style.opacity = 1;
    }
    prev.onmouseout = function(){
        prev.style.opacity = 0.3;
    }
    prev.onclick = function(){
        // clearInterval(timer)
        fuqiehuan();
    }