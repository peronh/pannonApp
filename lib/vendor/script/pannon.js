

    $(document).ready(function() {

        // menű gomgok
        $(".fa-bars").on("click", function() {
            $(".collapse").slideToggle();
        });

        $(".closebtn").on("click", function() {
            $("#mySidenav").css( {
                "width": "0", "transition":"width 200ms", "-webkit-transition":"width 300ms"}
            );
        });

        // vissza a lap tetejére
        $('.btntop').on("click", function() {

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

        //
        $(".bg-light .search").on("click", function() {
            $(".form-inline").slideToggle(500);
        });

        /*$('.form-inline').hover(function(){},
            function(){
                $('.form-inline').slideUp(500);
            });*/
    });