// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Loader
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
$(window).on("load",function(){
    $('#loader_bg').delay(1700).fadeOut(1700);
    $('#loader_contents').delay(1600).fadeOut(1000);
});


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Modal Setting
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
$(function() {
    $( 'a[rel*=leanModal]').leanModal({
        top: 0,                     // モーダルウィンドウの縦位置を指定
        overlay : 0.5,               // 背面の透明度
        closeButton: ".modal_close"  // 閉じるボタンのCSS classを指定
    });
});


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Global Nabigation ( Header ) Setting
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var thisOffset;
$(window).on('load',function(){
  thisOffset = $('#create').offset().top + $('#udcxx').outerHeight();
});

$(window).scroll(function(){
  if( $(window).scrollTop() + $(window).height() > thisOffset){
    // 特定の要素を超えた
    $('#top-head').css('display','block');
    $('#top-head').addClass('fixed');
  } else {
    $('#top-head').css('display','none');
    $('#top-head').fadeOut(100).removeClass('fixed');
  }
});

$('#nav-toggle').click(function(){ // ≡ボタン
  $('#top-head').toggleClass('open');
});

$('.global_nav_menu_items').click(function(){
  $('#top-head').toggleClass('open');
})


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// FV Content Rebase
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var count = 0;
var last1 = ['JP', 'WEB', 'JS', 'PC', '123', 'U', 'x'];
var eng =  ['I\'m Japanese.', 'Create websites.', 'I can do bit a Javascript and PHP.', 'I love computers and gadgets.', 'I like figures. Because they do not betray.', 'You make \" NEW ME \"', 'It\'s me.' ];
var jpn =  ['にほんじん　うちな〜んちゅ', 'ほーむぺーじ　つくる', 'ぷろぐらみんぐ ちょっとだけ', 'ぱそこん がじぇっと　すき', 'すうじは うらぎらない', 'あなたが あたらしいぼくを つくる', 'ぼく × なにか'];

setTimeout('fOut()', 6000);

function fOut(){
  if(count == 7) return;

  $('#toptitle').fadeOut(900);
  $('#eng').fadeOut(900);
  $('#jpn').fadeOut(900);

  setTimeout('change()', 890);
}

function change(){
  document.getElementById("last1").innerHTML = last1[count];
  document.getElementById("eng").innerHTML = eng[count];
  document.getElementById("jpn").innerHTML = jpn[count];
  $('#toptitle').fadeIn(900); $('#eng').fadeIn(900); $('#jpn').fadeIn(900);
  count++;
  setTimeout('fOut()', 4000);
}


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Smooth Scroll
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
$(function(){
   $('a[href^="#"]').not('a.notscroll').click(function() {
      var speed = 500; // スクロールの速度（ミリ秒）
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var headerHeight = 40; //固定ヘッダーの高さ
      var position = target.offset().top - headerHeight;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// Footer
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var now = new Date();
var y = now.getFullYear();
$(window).on('load',function(){
  $('#footer').html('Copyright &copy; 2018-'+y+' udcxx All Rights Reserved.');
});
