$(document).ready(function(){
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
      var yMod = $bgobj[0].style.backgroundPositionY;
      var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
      Moon.move();
    });
  });

  Moon.init();

});



var Moon = {
  init: function(){
    this.$moon = $('#moon');
    // this.xPos = this.$moon.position().left;
    this.xPos = 0;
    this.yPos = 0;
    this.windowWidth = $(window).width();
  },
  move: function(){
    var newXPos = this.xPos + $(window).scrollTop();
    var modFactor = ($(window).scrollTop())/this.windowWidth;
    var newYPos = this.yPos + $(window).scrollTop()*modFactor;

    this.$moon.css({'left': newXPos+'px',
                    'top' : newYPos+'px'});
  }
};
