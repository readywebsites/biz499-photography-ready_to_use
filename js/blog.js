jQuery(window).load(function() {
    "use strict";
    jQuery('.tz-blogSlider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        smoothHeight: true
    });
});
