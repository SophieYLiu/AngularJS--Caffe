/**
 * Created by tjgrst on 6/15/2016.
 */
$(document).ready(function(){
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("img").hide();
    $("img").fadeIn(2000);

    $("#img1").hover(function(){
        $("#p1").show();
        $("#div1").css("background-color", "#eeeeee");
    }, function(){
        $("#p1").hide();
        $("#div1").css("background-color", "#ffffff");
    })
    
    $("#img2").click(function(){
        $("#p2").fadeIn();
        $("#div2").css("background-color", "#eeeeee");
    })
    $("#img3").click(function(){
        $("#p3").fadeIn();
        $("#div3").css("background-color", "#eeeeee");
    })
    $("#img4").click(function(){
        $("#p4").fadeIn();
        $("#div4").css("background-color", "#eeeeee");
    })
});
