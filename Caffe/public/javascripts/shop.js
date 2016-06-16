$(document).ready(function(){
    $("#main").hide();
    $("#main").fadeIn(1000);

$(".thumbnail").click(function() {
    $(this).animate({
        height: "+=50px",
        width: "+=50px"
        })
    })
})

