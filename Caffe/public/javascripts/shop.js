$(document).ready(function(){
    $("hr").hide();
    $("img").hide();
    $("img").fadeIn(2000);
    $("p").click(function(){
        $(this).hide();
    });
    $("img").click(function() {
        $(this).hide();
    });
});
