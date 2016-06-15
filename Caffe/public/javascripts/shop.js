$(document).ready(function(){
    $("hr").hide();
    $("img").hide();
    $("img").fadeIn(2000);
    $("p").click(function(){
        $(this).hide();
    });
    $("#img1").click(function() {
        $(this).animate({
            left: '250px',
            height: '300px',
            width: '450px'
        });
    });
    $("#img2").click(function() {
        $(this).animate({
            left: '250px',
            height: '300px',
            width: '450px'
        });
    });
    $("#img3").click(function() {
        $(this).animate({
            left: '250px',
            height: '300px',
            width: '450px'
        });
    });
    $("#img4").click(function() {
        $(this).animate({
            left: '250px',
            height: '300px',
            width: '450px'
        });
    });
    $("#img5").click(function() {
        $(this).animate({
            left: '250px',
            height: '300px',
            width: '450px'
        });
    });
});


