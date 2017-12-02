$(document).ready(function () {
    var sub = $("#sub");
    var te = $("#text");
   
    var ff = "https://www.google.com/search?q=";

    $(sub).click(function (e) {
        ff+=te.val();
        window.open(ff, '_self');
    });
  
});