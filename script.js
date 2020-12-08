$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
    });
// // 質問ウィンドウ
$(".qa-list dd").hide();
$(".qa-list dl").on("click",function(e){
$('dd',this).slideToggle('fast');
if($(this).hasClass('open')){
$(this).removeClass('open');
}else{
    $(this).addClass('open');
}
});

$(function(){
    $('a[href^="#"]').click(function(){
      //スクロールのスピード
      var speed = 800;
      //リンク元を取得
      var href= $(this).attr("href");
      //リンク先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //リンク先までの距離を取得
      var position = target.offset().top;
      //スムーススクロール
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });


// document.addEventListener("DOMContentLoaded",() => {
//     const title = document.querySelectorAll('.js-accordion-title');
//     for (let i = 0; i < title.length; i++){
//       let titleEach = title[i];
//       let content = titleEach.nextElementSibling;
//       titleEach.addEventListener('click', () => {
//         titleEach.classList.toggle('is-active');
//         content.classList.toggle('is-open');
//       });
//     }
//   });