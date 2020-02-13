// lOADER
$(window).on('load', function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
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
// $( document ).ready(function() {
  $("#artha-project1-all").hover(
    function() {
      $("#artha-project1-img").attr("src", "images/project/gedungsate.gif");
    },
    function() {
      $("#artha-project1-img").attr("src", "images/project/gunung.jpg");
    }
  );

  $("#artha-project2-all").hover(
    function() {
      $("#artha-project2-img").attr("src", "images/project/merbabu.gif");
    },
    function() {
      $("#artha-project2-img").attr("src", "images/project/langit.jpg");
    }
  );

  $("#artha-project3-all").hover(
    function() {
      $("#artha-project3-img").attr("src", "images/project/merbabu2.gif");
    },
    function() {
      $("#artha-project3-img").attr("src", "images/project/gunung2.jpg");
    }
  );
// });
