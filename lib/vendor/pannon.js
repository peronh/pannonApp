

    $(document).ready(function() {

        // vissza a lap tetejére
        $('.btntop').on("click", function() {
                // $(document).scrollTop(0);

                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            }
        );
        $(document).on("scroll", function() {

            if($(document).scrollTop()>600) {
                $(".btntop").show(250);
            }
            else {
                $(".btntop").hide(250);
            }
        });
        // 576px alatt asztali verzió
        var targetWidth=1400;$('.desktop').on('click',function(){

            $('meta[name="viewport"]').attr('content','width='+targetWidth)});


    });