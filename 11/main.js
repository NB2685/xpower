$(function(){
  var audio1, audio2, flag1, flag2;
  
  $('#ui1').click(function(){
    if( !flag1 ) {
      audio1.play();
      $('#ui1').attr('src','files/bt_pause.png' );
      flag1 = true;
    } else {
      audio1.pause();
      $('#ui1').attr('src', 'files/bt_play.png' );
      flag1 = false;
    }
    return false;
  });
  $('#ui2').click(function(){
    if( !flag2 ) {
      audio2.play();
      $('#ui2').attr('src','files/bt_pause.png' );
      flag2 = true;
    } else {
      audio2.pause();
      $('#ui2').attr('src', 'files/bt_play.png' );
      flag2 = false;
    }
    return false;
  });
  
  $(document).ready(function(){
    audio1 = document.getElementById('audiof1');
    audio2 = document.getElementById('audiof2');
    flag1 = false;
    flag2 = false;
  });
});