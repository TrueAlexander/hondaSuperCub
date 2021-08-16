$(document).ready(function() {
  $(".header__burger-button").click(function(event) {
    $(".header__burger-button, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
