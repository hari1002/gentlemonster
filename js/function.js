$(function(){

  const $btnGnb = $('header > .btn-gnb');
  const $mnu = $('header > .mobile_mnu');
  const $shadow = $('header > .mobile_mnu > .shadow')

  let nowIdx = 0;

  $btnGnb.on('click', function() {
   $(this).toggleClass('clse');
    $mnu.toggle();

    $shadow.hide().eq(nowIdx).show();
  });

      $shadow.on('click', function(){
        $shadow.hide();
        $mnu.hide();
        $btnGnb.toggleClass('clse');
    });




});

