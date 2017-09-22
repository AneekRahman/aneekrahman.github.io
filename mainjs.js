$(document).ready(function(){
    
    
    function overstart(){
        $(".overlay").css("height","100%");
        $("body").css("overflow","hidden");
        
    }
    function overstop(){
        $(".overlay").css("height","0");
        $("body").css("overflow","auto");
    }
    
        $(".barsdiv i,.sidebarsdiv i").click(overstart);
        $(".overlayclose i").click(overstop);
});