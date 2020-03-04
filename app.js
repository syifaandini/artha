// lOADER
$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});


$(window).on('load', function() {

  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  })

  $("#loading").addClass("loader-hidden");
});


// NAVBAR SCROLL HIDE-SHOW
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#navbarArtha").css({
      top: '0'
    });
  } else {
    $("#navbarArtha").css({
      top: '-60px'
    });
  }
  prevScrollpos = currentScrollPos;
}

// PROJECT - GIFs
$(document).ready(function() {
  $("#project1-all").hover(
    function() {
      $("#project1-img").attr("src", "images/project/floor.gif");
    },
    function() {
      $("#project1-img").attr("src", "images/project/floor.png");
    }
  );

  $("#project2-all").hover(
    function() {
      $("#project2-img").attr("src", "images/project/mockuptronic.gif");
    },
    function() {
      $("#project2-img").attr("src", "images/project/mockuptronic.png");
    }
  );

  $("#project3-all").hover(
    function() {
      $("#project3-img").attr("src", "images/project/mountoya.gif");
    },
    function() {
      $("#project3-img").attr("src", "images/project/mountoya.png");
    }
  );

  $("#project4-all").hover(
    function() {
      $("#project4-img").attr("src", "images/project/sf.gif");
    },
    function() {
      $("#project4-img").attr("src", "images/project/sf.png");
    }
  );

  $("#project5-all").hover(
    function() {
      $("#project5-img").attr("src", "images/project/tni.gif");
    },
    function() {
      $("#project5-img").attr("src", "images/project/tni.png");
    }
  );

  $("#project6-all").hover(
    function() {
      $("#project6-img").attr("src", "images/project/tni.gif");
    },
    function() {
      $("#project6-img").attr("src", "images/project/tni.png");
    }
  );
});
