$(document).ready(function(){
/*REMEMBER! DO NOT NEST THE CLICK FUNCTIONS*/
        //Open Function
            $("#discord-button").click(function(){
                if ($("#discord-widget").css("display", "none") != null ){
                    $("#discord-widget").css("display", "inline").css("z-index", "99");
                    $("#discord-button").css("display", "none");
                }
            });
        //Close Function
            $(document).click(function(){
                if ($("#discord-widget").css("display", "inline") != null ){
                    $("#discord-widget").css("display", "none").css("z-index", "-1");
                    $("#discord-button").css("display", "inline");
                }
            });
            //Stops the close function from affecting the button
            $("#discord-button").click(function(e) {
                e.stopPropagation();
            });
});
