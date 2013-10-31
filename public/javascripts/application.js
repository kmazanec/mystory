var windowWidth = $(window).width();

$(document).ready(function(){
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      var yMod = $bgobj[0].style.backgroundPositionY;
      var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
      Moon.move();
      VandyPan.move();
    });
  });

  Moon.init();
  VandyPan.init();

});

var VandyPan = {
  init: function() {
    this.$vandy = $('#vandy');
    this.offset = this.$vandy.offset().top;
  },
  move: function(){
    var xPos = this.offset - $(window).scrollTop();
    if (xPos > 0 || xPos <= windowWidth - 3240) {
      return false;
    }
    var coords = xPos+'px 0';
    this.$vandy.css({ backgroundPosition: coords });
  }
};



var Moon = {
  init: function(){
    this.$moon = $('#moon');
    // this.xPos = this.$moon.position().left;
    this.xPos = 0;
    this.yPos = 0;
  },
  move: function(){
    var newXPos = this.xPos + $(window).scrollTop();
    if (newXPos > windowWidth){
      return false;
    }
    var modFactor = ($(window).scrollTop()*0.8)/windowWidth;
    var newYPos = this.yPos + $(window).scrollTop()*modFactor;
    this.$moon.css({'left': newXPos+'px',
                    'top' : newYPos+'px'});
  }
};
