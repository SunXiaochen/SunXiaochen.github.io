// 基础js
var swiper1 = new Swiper('.swiper-container1', {
  direction: 'vertical',
  effect : 'coverflow',
  loop:"true",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});
var swiper2 = new Swiper('.swiper-container2', {
	autoplay:true,
});
// 基础js结束

// 音乐控制
var music = document.getElementById('music');
var music_bg = music.getElementsByClassName('music_bg')[0];
var music_pic = music.getElementsByClassName('music_pic')[0];
var aud = music.getElementsByClassName('aud')[0];
//定义音乐的状态变量
var music_sta = 1;
music.onclick = function(){
	if (music_sta == 1) {
		// 让北京gif隐藏
		music_bg.style.display = "none";
		// 停止音乐图标的旋转
		music_pic.style.animation = 'none';
		// 停止音乐
		aud.pause();
		music_sta = 2;
	}else if(music_sta == 2){
		music_bg.style.display = "block";
		music_pic.style.animation = 'music 2s linear infinite';
		aud.play();
		music_sta = 1;

	}
}
// 音乐控制结束
function btn(){
    setTimeout(function(){btn1()},2000);
    function btn1(){
      $(".btn1").addClass("run");
    }
    setTimeout(function(){btn2()},3000);
    function btn2(){
      $(".btn2").addClass("run");
    }
    setTimeout(function(){btn3()},4000);
    function btn3(){
      $(".btn3").addClass("run");
    }
    setTimeout(function(){btn4()},5000);
    function btn4(){
      $(".btn4").addClass("run");
    }
}
var btn5 = document.getElementsByClassName('btn5')[0];
btn5.onclick = function(){
  btn();
}

