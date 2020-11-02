KISSY.add('app/nav',function(S)
{
    return {
        on:function () {
            $(".nav li").mouseover(function(){
                $(this).children("ul").show();
                $(this).mouseout(function(){
                    $(this).children("ul").hide();
                    $(this).children("ul").mouseover(function(){
                        $(this).children("ul").show();
                    });
                });
            });
        }
    }
});
