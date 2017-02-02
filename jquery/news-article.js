$(document).ready(function(e){
 var unnamed = $('.main-button[data-article]')
 //Code explanation: Checks whether the button has the matching data-article attribute as the full article and then when they both match it adds the focus class while removing it from the other elements
 //TODO: Simplifly this code: (if necessary/possible)
        $('.main-button[data-article]').click(function(e){
                    if($(this).data("article") == ('1')){
                        $('.article[data-article]').removeClass("focus");
                        $('.article[data-article="1"]').addClass("focus");
                    }else if($(this).data("article") == ('2')){
                        $('.article[data-article]').removeClass("focus");
                        $('.article[data-article="2"]').addClass("focus");
                    }else if($(this).data("article") == ('3')){
                        $('.article[data-article]').removeClass("focus");
                        $('.article[data-article="3"]').addClass("focus");
                    }else if($(this).data("article") == ('4')){
                        $('.article[data-article]').removeClass("focus");
                        $('.article[data-article="4"]').addClass("focus");
                    }
        });
        $(".right").click(function(e){
            var $next = $(this).parent().prev().find(".focus").removeClass("focus").next("div");
            if ($next.length){
                $next.addClass("focus");
            }else{
               $(this).parent().prev().children().first().addClass("focus");
            }
        });

        $(".left").click(function(e){
            var $prev = $(this).parent().prev().find(".focus").removeClass("focus").prev("div");
            if ($prev.length){
                $prev.addClass("focus");
            }else{
                $(this).parent().prev().children().last().addClass("focus");
            }
        });
});