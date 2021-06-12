$(document).ready(function(){
    $(window).scroll(function(){
        var w=$(window).scrollTop();
        if(w>=390){
            $("nav").addClass("fixed-top")
        }else{
            $("nav").removeClass("fixed-top") 
        }
    });
    
})