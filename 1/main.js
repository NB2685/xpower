$(function(){
  var audio, flag;
  $('#ui1').click(function(){
    if(!flag){
      audio.play();
      $('#ui1').attr('src','files/bt_pause.png');
      flag = true;
    } else {
      audio.pause();
      $('#ui1').attr('src', 'files/bt_play.png');
      flag = false;
    }
    return false;
  });
  $(document).ready(function(){
    audio = document.getElementById('audio1');
    flag = false;
  });
});