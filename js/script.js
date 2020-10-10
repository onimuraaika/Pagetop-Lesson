$(function() {
  $('#back a').on('click',function(event){ /*$('＃id名 要素名')と指定するとid内の子要素のみに指定できる。今回はid="back"内のaタグがクリックされた時処理が実行される*/
    $('body, html').animate({ /*animate()は、アニメーション効果を設定するjQueryの関数。今回ページ全体に処理を実行したいので、セレクタに「body要素またはhtml要素」と記述*/
      scrollTop:0 /*scrollTopは、スクロール位置を取得できるメソッド。最上部は0*/
    }, 800); /*アニメーションの動作時間をミリ秒で指定する。slow/normal/fastでも指定可能。*/
    event.preventDefault();
  });
});