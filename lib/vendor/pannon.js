

    $(document).ready(function() {

        $(".fa-bars").on("click", function() {
            $(".collapse").slideToggle();
        });

        $(".closebtn").on("click", function() {
            $("#mySidenav").css( {
                "width": "0", "transition":"width 200ms", "-webkit-transition":"width 300ms"}
            );
        });
        $(document).on("scroll", function() {
            $('.btntop').on("click", function() {
                    $(document).scrollTop(0);
                }
            );
            if($(document).scrollTop()>600) {
                $(".btntop").show(250);
            }
            else {
                $(".btntop").hide(250);
            }
        });
    });