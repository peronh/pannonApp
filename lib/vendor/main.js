$(document).ready(function () {


    $(document).ready(function() {

        if ($('#mistify').length) {
            $('#mistify').mistify({
                arrows: true,
                autoPlay: true,
                autoplaySpeed: 5000,
                dots: true,
                readMoreText: 'mehr'
            });
        }

        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });

        $('.mist-link').on('click', function(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            $('body').addClass('overlay-wrapped');
            $('.mist-overlay').addClass('slideInReady').show();
            setTimeout(function() {
                $('.mist-overlay').addClass('slideIn');
            }, 100);

            setTimeout(function() {
                window.location.href = url;
            }, 2200);
        });

        $('.inner-page__prev-post, .inner-page__next-post')
            .on('mouseover', function() {
                $(this).addClass('active');
            })
            .on('mouseout', function() {
                $(this).removeClass('active');
            });
    });

    $(window).on('load', function() {
        $('body').removeClass('overlay-wrapped');
        $('.mist-overlay').addClass('slideOut');
        setTimeout(function() {
            $('.mist-overlay').hide().removeClass('slideOut');
        }, 2200);
    });
    var jssor_1_SlideshowTransitions = [
        {$Duration:500,$Delay:10,$Cols:8,$Rows:8,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
        ];

    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 10000;
    var MAX_HEIGHT = 10000;
    var MAX_BLEEDING = 1;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {
            var originalWidth = jssor_1_slider.$OriginalWidth();
            var originalHeight = jssor_1_slider.$OriginalHeight();

            var containerHeight = containerElement.clientHeight || originalHeight;

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

            //constrain bullets, arrows inside slider area, it's optional, remove it if not necessary
            if (MAX_BLEEDING >= 0 && MAX_BLEEDING < 1) {
                var widthRatio = expectedWidth / originalWidth;
                var heightRatio = expectedHeight / originalHeight;
                var maxScaleRatio = Math.max(widthRatio, heightRatio);
                var minScaleRatio = Math.min(widthRatio, heightRatio);

                maxScaleRatio = Math.min(maxScaleRatio / minScaleRatio, 1 / (1 - MAX_BLEEDING)) * minScaleRatio;
                expectedWidth = Math.min(expectedWidth, originalWidth * maxScaleRatio);
                expectedHeight = Math.min(expectedHeight, originalHeight * maxScaleRatio);
            }

            jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);
            jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";
            jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
   // $(window).bind("orientationchange", OnOrientationChange);
});