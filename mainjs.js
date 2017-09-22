$(document).ready(function(){
    
/* THE DIFFRENT VARIABLES DECLARATION STARTS HERE */
    
    var phonetipon=0;
    
/* THE DIFFRENT VARIABLES DECLARATION ENDS HERE */
    
/* THE FUCNTIONS FOR DIFFERENT ACTIONS START HERE*/
    
    function overstart(){
        $(".overlay").css("height","100%");
        $("body").css("overflow","hidden");
        $(".overlaycontent").css("display","flex")
        
    }
    function overstop(){
        $(".overlay").css("height","0");
        $("body").css("overflow","auto");
        $(".overlaycontent").css("display","none")
    }
    function phoneshow(){
        $(".phonetip").css("display","block");
        phonetipon=1;
    }
    function phonehide(){
        $(".phonetip").css("display","none");
        phonetipon=0;
    }
    
/* THE FUCNTIONS FOR DIFFERENT ACTIONS ENDS HERE*/
    
/* THE ACTIONS FOR EVENTS START HERE */
    
        $(".barsdiv i,.sidebarsdiv i").click(overstart);
        $(".overlaycontent i").click(overstop);
        $(".phone").click(function(){
            if(phonetipon===0){
                phoneshow();
            }else{
                phonehide();
            }
        })
    
 /* THE ACTIONS FOR EVENTS END HERE */
});