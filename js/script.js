$(function() {

  "use strict";

  /* Sliding tabbed panel */
  var scrollBarWidths = 40;

  var widthOfList = function(){
    var itemsWidth = 0;
    $('.list li').each(function(){
      var itemWidth = $(this).outerWidth();
      itemsWidth+=itemWidth;
    });
    return itemsWidth;
  };

  var widthOfHidden = function(){
    return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
  };

  var getLeftPosi = function(){
    return $('.list').position().left;
  };

  var reAdjust = function(){
    if (($('.wrapper').outerWidth()) < widthOfList()) {
      $('.scroller-right').show();
    }
    else {
      $('.scroller-right').hide();
    }

    if (getLeftPosi()<0) {
      $('.scroller-left').show();
    }
    else {
      $('.scroller-left').hide();
    }
  }

  reAdjust();

  $(window).on('resize',function(e){  
    reAdjust();
  });

  $('.scroller-right').click(function() {
    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');
    $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
    });
  });

  $('.scroller-left').click(function() {
    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');
    $('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){
    });
  });

  //Events slider
  $("#lightSlider").lightSlider({
    item: 2,
    autoWidth: false,
    slideMove: 1,
    slideMargin: 10,
    cssEasing: 'ease',
    easing: 'linear',
    controls: true,
    pager: true,
  }); 
  

});

