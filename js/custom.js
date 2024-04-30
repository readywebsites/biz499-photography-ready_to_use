
jQuery(document).ready(function () {
    "use strict";
    // CUSTOM AJAX CONTENT LOADING FUNCTION
    var ajaxRevslider = function (obj) {

        // obj.type : Post Type
        // obj.id : ID of Content to Load
        // obj.aspectratio : The Aspect Ratio of the Container / Media
        // obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content

        var content = "";

        var data = {};

        data.action = 'revslider_ajax_call_front';
        data.client_action = 'get_slider_html';
        data.token = '70a9972b99';
        data.type = obj.type;
        data.id = obj.id;
        data.aspectratio = obj.aspectratio;

        // SYNC AJAX REQUEST
        jQuery.ajax({
            type: "post",
            url: "#",
            dataType: 'json',
            data: data,
            async: false,
            success: function (ret, textStatus, XMLHttpRequest) {
                if (ret.success == true)
                    content = ret.data;
            },
            error: function (e) {
                console.log(e);
            }
        });

        // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
        return content;
    };

    // CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
    var ajaxRemoveRevslider = function (obj) {
        return jQuery(obj.selector + " .rev_slider").revkill();
    };

    // EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
    var extendessential = setInterval(function () {
        if (jQuery.fn.tpessential != undefined) {
            clearInterval(extendessential);
            if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
                jQuery.fn.tpessential.defaults.ajaxTypes.push({
                    type: "revslider",
                    func: ajaxRevslider,
                    killfunc: ajaxRemoveRevslider,
                    openAnimationSpeed: 0.3
                });
                // type:  Name of the Post to load via Ajax into the Essential Grid Ajax Container
                // func: the Function Name which is Called once the Item with the Post Type has been clicked
                // killfunc: function to kill in case the Ajax Window going to be removed (before Remove function !
                // openAnimationSpeed: how quick the Ajax Content window should be animated (default is 0.3)
            }
        }
    }, 30);
});

var themeprefix = 'plazart';

/******************************************
-    PREPARE PLACEHOLDER FOR SLIDER    -
******************************************/


var setREVStartSize = function () {
    var tpopt = new Object();
    tpopt.startwidth = 1920;
    tpopt.startheight = 940;
    tpopt.container = jQuery('#rev_slider_1_1');
    tpopt.fullScreen = "on";
    tpopt.forceFullWidth = "off";

    tpopt.container.closest(".rev_slider_wrapper").css({height: tpopt.container.height()});
    tpopt.width = parseInt(tpopt.container.width(), 0);
    tpopt.height = parseInt(tpopt.container.height(), 0);
    tpopt.bw = tpopt.width / tpopt.startwidth;
    tpopt.bh = tpopt.height / tpopt.startheight;
    if (tpopt.bh > tpopt.bw)tpopt.bh = tpopt.bw;
    if (tpopt.bh < tpopt.bw)tpopt.bw = tpopt.bh;
    if (tpopt.bw < tpopt.bh)tpopt.bh = tpopt.bw;
    if (tpopt.bh > 1) {
        tpopt.bw = 1;
        tpopt.bh = 1
    }
    if (tpopt.bw > 1) {
        tpopt.bw = 1;
        tpopt.bh = 1
    }
    tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
    if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on")tpopt.height = tpopt.startheight;
    if (tpopt.fullScreen == "on") {
        tpopt.height = tpopt.bw * tpopt.startheight;
        var cow = tpopt.container.parent().width();
        var coh = jQuery(window).height();
        if (tpopt.fullScreenOffsetContainer != undefined) {
            try {
                var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
                jQuery.each(offcontainers, function (e, t) {
                    coh = coh - jQuery(t).outerHeight(true);
                    if (coh < tpopt.minFullScreenHeight)coh = tpopt.minFullScreenHeight
                })
            } catch (e) {
            }
        }
        tpopt.container.parent().height(coh);
        tpopt.container.height(coh);
        tpopt.container.closest(".rev_slider_wrapper").height(coh);
        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
        tpopt.container.css({height: "100%"});
        tpopt.height = coh;
    } else {
        tpopt.container.height(tpopt.height);
        tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
        tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
    }
};

/* CALL PLACEHOLDER */
setREVStartSize();


var tpj = jQuery;
tpj.noConflict();
var revapi1;

tpj(document).ready(function () {

    if (tpj('#rev_slider_1_1').revolution == undefined) {
        //revslider_showDoubleJqueryError('#rev_slider_1_1');
    } else {
        revapi1 = tpj('#rev_slider_1_1').show().revolution(
            {
                dottedOverlay: "threexthree",
                delay: 9000,
                startwidth: 1920,
                startheight: 940,
                hideThumbs: 0,

                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 4,


                simplifyAll: "off",

                navigationType: "bullet",
                navigationArrows: "none",
                navigationStyle: "preview2",

                touchenabled: "on",
                onHoverStop: "off",
                nextSlideOnWindowFocus: "off",

                swipe_threshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,


                keyboardNavigation: "on",

                navigationHAlign: "right",
                navigationVAlign: "bottom",
                navigationHOffset: 20,
                navigationVOffset: 62,

                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,

                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0, shadow: 0,
                fullWidth: "off",
                fullScreen: "on", spinner: "spinner0", stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1, shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "", hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0, fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0
            });
    }
});
/*ready*/

jQuery(document).ready(function () {
    "use strict";
   /* Method for Partner slider */
    jQuery(".tz-partner").each(function () {
        var $slide_id = jQuery(this).find('.partner-slider').attr('id');
        var $column = jQuery(this).find('.partner-slider').attr('data-option-column');
        jQuery("#" + $slide_id).maniva_owlCarousel({
            items: $column,
            itemsDesktop: [1199, 6],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed: 500,
            paginationSpeed: 800,
            rewindSpeed: 1000,
            autoPlay: false,
            stopOnHover: false,
            singleItem: false,
            rewindNav: false,
            pagination: false,
            paginationNumbers: false,
            itemsScaleUp: false
        });
        // Custom Navigation Events
        var $_parent = jQuery("#" + $slide_id);
        $_parent.parent().find('.tz_partner_prevs').on('click',function () {
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tz_partner_nexts').on('click',function () {
            $_parent.trigger('owl.next');
        });
    });
});

jQuery(document).ready(function () {
    "use strict";
    if(jQuery('#my-video').length){
        jQuery('#my-video').backgroundVideo({
            pauseVideoOnViewLoss: false,
            $outerWrap: jQuery('.tzPurchase_video'),
            parallaxOptions: {
                offset: 60,
                effect: 1.5
            }
        });
    }
    jQuery("body").fitVids();

});

jQuery(document).ready(function () {
    "use strict";
    // Blog slider  -----------------
    jQuery(".tzBlog-slider").each(function () {
        jQuery(this).maniva_owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed: 500,
            paginationSpeed: 800,
            rewindSpeed: 1000,
            autoPlay: false,
            stopOnHover: false,
            singleItem: false,
            rewindNav: false,
            pagination: true,
            paginationNumbers: false,
            itemsScaleUp: false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tzprevslider').on('click',function () {
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tznextslider').on('click',function () {
            $_parent.trigger('owl.next');
        });
        $_parent.parent().find('.tzprevslider_type2').on('click',function () {
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tznextslider_type2').on('click',function () {
            $_parent.trigger('owl.next');
        });
    });
    jQuery('.tzBlog-Slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        smoothHeight: true
    });

    /*Gallery */
    if(jQuery(window).width() > 767) {
        if(jQuery('.pics').length){
            jQuery('.pics figure').appear(function () {
                jQuery('.pics figure').addClass('animated rollIn');
            });
        }
    }
    jQuery(function()
    {
        var gallery = jQuery('div').hasClass('pics');
        if(gallery==true){
        jQuery('#Grid').mixitup({
            targetSelector: '.mix',
            filterSelector: '.filter',
            sortSelector: '.sort',
            buttonEvent: 'click',
            effects: ['fade', 'scale', 'rotateZ', 'rotateX', 'rotateY'],
            listEffects: null,
            easing: 'smooth',
            layoutMode: 'grid',
            targetDisplayGrid: 'inline-block',
            targetDisplayList: 'block',
            gridClass: '',
            listClass: '',
            transitionSpeed: 600,
            showOnLoad: 'all',
            sortOnLoad: false,
            multiFilter: false,
            filterLogic: 'or',
            resizeContainer: true,
            minHeight: 0,
            failClass: 'fail',
            perspectiveDistance: '3000',
            perspectiveOrigin: '50% 50%',
            animateGridList: true,
            onMixLoad: null,
            onMixStart: null,
            onMixEnd: null
        });
        }
    });

    jQuery('.no-load').hide();
    jQuery('.no-load').parent().css({'margin-top': '0', 'margin-bottom': '0'});

    jQuery('#load-more').on('click',function(){
        jQuery('#load-more i').addClass('fa-spin');
        jQuery('.no-load').delay(1500).fadeIn(1000, function(){
            jQuery('#load-more i').removeClass('fa-spin');
        });
        jQuery('.no-load').parent().delay(1500).queue(function(){
            jQuery(this).css({'margin': '0'});
        });

    });

    jQuery(" a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools:''
    });

    var $_height = jQuery('.tz-headerSlider').height();
    var $_heightProvo = jQuery('#Tz-provokeMe').height();
    var $_heightHeader = $_heightProvo + $_height;

    jQuery('.tz-homeType4').css('height',$_heightHeader +'px');
    var homepage = jQuery('div').hasClass('home-page');
    if(homepage==true){
    var $nav;
    $nav = jQuery('.tz-nav');
        $nav.onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 2200,
            scrollOffset: 5,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'easeOutBack',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    }

    jQuery('.pretty_flickr').jflickrfeed({
        limit: 12,
        qstrings: {
            id: '36587311@N08'
        },
        itemTemplate: '<li>' +
        '<a target="" rel="prettyPhoto_flickr[pp_gal]"' +
        'href="/{image}}" title="/{title}}">' +
        '<img src="/{image_s}}" alt="/{title}}" />' +
        '</a>' +
        '</li>'
    }, function (data) {
        jQuery(".flickr a[rel^='prettyPhoto']").prettyPhoto();
    });
    if(jQuery('.tz-blogSlider').length){
    jQuery('.tz-blogSlider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        smoothHeight: true
    });
    }


});










