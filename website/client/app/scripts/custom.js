$(function(){

  $('.nav').on('click','a', function (e) {
  	e.preventDefault();
    var clickedElement = "#scroll"+ $(this).attr('data');
    
   $(clickedElement).animatescroll({scrollSpeed:1500, easing: 'easeInOutQuint', padding:60});
    
  });   

  var typerCalled = false;
  
  $(window).on('scroll', function(){
    
    var sectionPosition = $('#scrollHowto').position().top - 200;
    var windowPosition = $(window).scrollTop();
    
    if(sectionPosition <= windowPosition) {
    
      if(!typerCalled){
      	typerCalled = true;
        
        var npmText = "npm install slush react-fullstack "
        var randTime = function(){ return Math.floor(Math.random()*200) }          
        var letterAry = npmText.split('')
        
        var count = 0;
        var timer = null;

        var typeLetters = function(){
          if(count < letterAry.length){

            timer = setTimeout(function(){
              
              var letter = letterAry[count]

              $('#fakeConsole').val($('#fakeConsole').val()+letter);

              count++;
              typerCalled = true;
              typeLetters();  
             
            }, randTime());
          }
        };

        typeLetters();
      }
    } else {
    	
     clearTimeout(timer);
     typerCalled = false;
     $('#fakeConsole').val("");
     count = 0;
    }
  });

  // $('[data-toggle="tooltip"]').tooltip({'placement': 'bottom'})
    

  // $('a').tooltip();



});
