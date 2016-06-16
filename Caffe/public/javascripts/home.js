/**
 * Created by tjgrst on 6/15/2016.
 */
$(document).ready(function(){
    $("h1").hide().fadeIn(2000);
    $("h1").click(function(){
        $("#divspecs").fadeIn(1000).load("README.md").css("color", "#ffffff");
        $("h1").click(function(){
            $("#divspecs").fadeOut();
        })
    })
});

