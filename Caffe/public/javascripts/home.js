/**
 * Created by tjgrst on 6/15/2016.
 */
$(document).ready(function(){
    $("h1").hide().fadeIn(2000);
    $("#buttonhome").hide().fadeIn(4000);
    $("#buttonhome").click(function(){
        $("#divspecs").load("README.md").css("color", "#ffffff");
        $("#buttonhome").click(function(){
            $("#divspecs").fadeOut();
        })
    })
});

