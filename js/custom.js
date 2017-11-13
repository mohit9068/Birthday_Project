



function toggleVideo() {
    var video=document.querySelector('video');
    if(video.paused==true){
        $('.play-icon').removeClass('fa-heart').addClass('fa-heart-o');
        video.play();
        console.log('playing');
    }
    else{
            $('.play-icon').removeClass('fa-heart-o').addClass('fa-heart');
        video.pause();
        console.log('paused');
        
    }
} 

$('.my_Heart').on('click',function(){
 toggleVideo();
});

$('body').on('keypress',function(event){
   if (event.keyCode==32){
      toggleVideo();
   } 
});



function toggleAudio() {
    var audio=document.querySelector('audio');
    if(audio.paused==true){
        $('.play-icon2').removeClass('fa-heart').addClass('fa-heart-o');
        audio.play();
        console.log('playing');
    }
    else{
            $('.play-icon2').removeClass('fa-heart-o').addClass('fa-heart');
        audio.pause();
        console.log('paused');
        
    }
} 



$('.my_Heart2').on('click',function(){
      var video=document.querySelector('video');
    video.pause();
 toggleAudio();
});
