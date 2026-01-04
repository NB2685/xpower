$(function(){
  var audioFile = 'audio_file';
  var audioBtn = 'audio';
  var audioLabel = 'ui';
  var obj_audioFile, obj_audioBtn, obj_audioLabel;
  var audioFlag = false;
  
  $(document).on('click','#'+audioBtn,function(){
    if(!audioFlag){
      obj_audioFile.play();
      obj_audioLabel.setAttribute('src','bt_stop.png');
      audioFlag = true;
    } else {
      obj_audioFile.pause();
      obj_audioLabel.setAttribute('src','bt_play.png');
      audioFlag = false;
    }
  });
  
  $(document).ready(function(){
    obj_audioFile = document.getElementById(audioFile);
    obj_audioBtn = document.getElementById(audioBtn);
    obj_audioLabel = document.getElementById(audioLabel);
  });
});