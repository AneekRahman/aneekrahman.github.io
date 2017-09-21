$(document).ready(function(){
    function overstart(){
        $(".overlay").css("display","block")
        $(window).scroll(function(){
            $(this).scrollTop(0);
        })
    }
    function overstop(){
        $(".overlay").css("display","none");
        $(window).scrollTop("auto");
    }
    
        $(".barsdiv i").click(overstart)
        $(".overlayclose i").click(overstop)
});