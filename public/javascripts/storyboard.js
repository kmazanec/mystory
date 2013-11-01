var windowWidth = $(window).width();
var windowHeight = $(window).height();

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
  StoryPanels.init();


});

function StoryPanel($panel){
  this.$panel = $panel;
  this.initial_pos = $panel.css('top');
  this.xoffset = $panel.offset().left;
  this.yoffset = $panel.offset().top;
  this.relative_yoffset = this.yoffset - $panel.parent().offset().top;
}

StoryPanel.prototype.move = function() {
  var move_diff = ($(window).scrollTop() + windowHeight/2) - this.yoffset;
  if (this.yoffset < $(window).scrollTop() + windowHeight/2 ){
    this.$panel.css({'left': (this.xoffset - move_diff)+'px'});
    this.$panel.css({'top': ($(window).scrollTop() + windowHeight/2)+'px',
                    'position': 'absolute'});
  } else {
    this.$panel.css({'top': this.initial_pos,
                     'position': 'relative'});
  }
};

var StoryPanels = {
  init: function(){
    this.panels = [];
    $('div[data-type="story"]').each(function(){
      StoryPanels.panels.push(new StoryPanel($(this)));
    });
  },
  move: function(xPos){
    StoryPanels.panels.forEach(function(panel){
      panel.move(xPos);
    });
  }
};


var VandyPan = {
  init: function() {
    this.$vandy = $('#vandy');
    this.offset = this.$vandy.offset().top;
  },
  move: function(){
    var xPos = this.offset - $(window).scrollTop();
    if (xPos > -20 || xPos <= windowWidth - 3240) {
      return false;
    } else {
      StoryPanels.move();
      var coords = xPos+'px 0';
      this.$vandy.css({ backgroundPosition: coords });
    }
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


