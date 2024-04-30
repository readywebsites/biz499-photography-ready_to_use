
function TzTemplateResizeImage(obj){
    "use strict";
    var widthStage;
    var heightStage ;
    var widthImage;
    var heightImage;
    obj.each(function (i,el){

        heightStage = jQuery(this).height();

        widthStage = jQuery (this).width();

        var img_url = jQuery(this).find('img').attr('src');

        var image = new Image();
        image.src = img_url;

        widthImage = image.naturalWidth;
        heightImage = image.naturalHeight;

        var tzimg	=	new resizeImage(widthImage, heightImage, widthStage, heightStage);
        jQuery(this).find('img').css ({ top: tzimg.top, left: tzimg.left, width: tzimg.width, height: tzimg.height });


    });

}

jQuery(document).ready(function() {
    "use strict";

    // loading
    jQuery('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '0',
        autoClose: true,
        closeBtnText: "",
        showPercentage:false,
        showSplash: false
    });


    jQuery('.tz-icon-search').on('click',function(){

        //jQuery('.tzMenuSeach-box form .Tzsearchform').toggleClass('tzSeachForm-show');
        jQuery('.tzMenuSeach-box .Tzsearchform').toggle();
        jQuery('.tz-homeType3 .Tzsearchform').toggle();
    });

    // jQuery animate ----------------------------
    new WOW(
        { offset: 300 }
    ).init();

    /* Position menu home slider */
    var height_menu = jQuery('.tz-menuVertical').height();
    var height_menu_vertical = height_menu/2;
    jQuery('.tz-menuVertical').css('margin-top','-'+height_menu_vertical+'px');
    //alert(height);
    //jQuery('.tz-revoslider').css('height',height+'px');

    /*back to top */
    jQuery('.tz-backtotop').on('click',function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

    //opacity scroll
    var header = jQuery('.tz_logo_bg_slider .ds-table-cell img');
    var range = 450;
    jQuery(window).on('scroll', function () {
        var st = jQuery(this).scrollTop();
        header.each(function () {
            var offset = jQuery(this).offset().top;
            var height = jQuery(this).outerHeight();
            offset = offset + height / 2;
            jQuery(this).css({ 'opacity': 1 - (st - offset + range) / range });
        });
    });

    // height tz-counter-image
    var $opject = jQuery('.tz-counter-image');
    var $array_li = [];
    jQuery($opject).parent().parent().find('.tz-counter-image').each(function(){

        $array_li.push(jQuery(this).innerHeight());
    });
    var $max_height = Math.max.apply( Math, $array_li);

    jQuery($opject).css('height',$max_height+'px');

    /* button menu */
    var $_menuButton = jQuery('.tz-menuButton').width();
    //jQuery('.tz-menuButton').css('margin-left','-'+$_menuButton/2+'px');
    var $_heightwWindow  = jQuery(window).height();

    jQuery('.tz-menuButton a').on('click',function(){
        jQuery('html,body').animate({
            scrollTop: $_heightwWindow
        }, 'slow');
    });

    /* menu vertical */

    var $a = jQuery('.tz-menuVertical >ul.tz-nav >li').length;
    for(var index=0; index <$a; index++) {
        var i = index + 1;
        jQuery('.tz-menuVertical >ul.tz-nav >li:eq("' + index + '") >a').append('<span class="tzMenuShapes"></span>');
        jQuery('.tz-menuVertical >ul.tz-nav >li:eq("' + index + '") >a').append('<span>' + '0' + i + '</span>');

    }


    // prettyPhoto for image gallery modal popup
//    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
//        social_tools: false,
//        hook: 'data-rel'
//    });

    /* Counter */
    function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */

        $this.html(++current);
        if(current > $this.data('count')){
            $this.html($this.data('count'));
        } else {
            setTimeout(function(){count($this)}, 50);
        }
    }

    jQuery(".stat-count").each(function() {
        jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
        jQuery(this).html('0');
        count(jQuery(this));
    });

    // client slider
    jQuery(".tzClientSlider").each(function(){
        jQuery(this).maniva_owlCarousel({
            items : 5,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:true,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tzClientPrev').on('click',function(){
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tzClientNext').on('click',function(){
            $_parent.trigger('owl.next');
        });
    });

    // Customers Slider
    jQuery(".tzCustomerSlider").each(function(){
        jQuery(this).maniva_owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:true,
            pagination:true,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tzCustomerPrev').on('click',function(){
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tzCustomerNext').on('click',function(){
            $_parent.trigger('owl.next');
        });
    });

    // Our Team Slider 4
    jQuery(".tzOurTeamSlider4").each(function(){
        jQuery(this).maniva_owlCarousel({
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,2],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:true,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
    });

    // Our Team Slider
    jQuery(".tzOurTeamSlider3").each(function(){
        jQuery(this).maniva_owlCarousel({
            items : 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:true,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
    });

    // Our Team 2
    jQuery(".tzOurTeamSlider2").each(function(){
        jQuery(this).maniva_owlCarousel({
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:true,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tzOurTeam2Prev').on('click',function(){
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tzOurTeam2Next').on('click',function(){
            $_parent.trigger('owl.next');
        });
    });

    // Our Team 3
    jQuery(".tzOurTeamSlider1").each(function(){
        jQuery(this).maniva_owlCarousel({
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:true,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        var $_parent = jQuery(this);
        $_parent.parent().find('.tzOurTeam1Prev').on('click',function(){
            $_parent.trigger('owl.prev');
        });
        $_parent.parent().find('.tzOurTeam1Next').on('click',function(){
            $_parent.trigger('owl.next');
        });
    });




});
function goBack() {
    window.history.back()
}
jQuery(window).load(function(){
    "use strict";
    jQuery('#tz-loading').remove();

    //jQuery('div.slotholder').prepend('<div class="bk-responsive-slide"></div>');
    jQuery('div.wpb_gmaps_widget').prepend('<div class="tzGmap-overlay"></div>');

    /* Method for parallax */
    if ( jQuery('.parallax').length ) {
        jQuery('.parallax').each(function(){
            jQuery(this).parallax("50%", 0.1);
        });
    }

    //TzTemplateResizeImage(jQuery('.tzOurTeam4_Member_Img'));

});

/**
 * method for menu
 */
jQuery(window).on('scroll',function(){
    "use strict";
    var $_scrollTop = jQuery(window).scrollTop();
    var $_height = jQuery('.tz-headerSlider').height();
    var headerType = jQuery('.tz-headerHome').attr('data-option');
    if(headerType !='5') {

        if ($_scrollTop > 0) {
            jQuery('.tz-homeType1').addClass('tz-homeEff');
            jQuery('.tz-homeType2').addClass('tz-homeEff');
            jQuery('.tz-homeType5').addClass('tz-homeEff');
            jQuery('.tz-homeType3').addClass('tz-homeEff');
        } else {
            jQuery('.tz-homeType1').removeClass('tz-homeEff');
            jQuery('.tz-homeType2').removeClass('tz-homeEff');
            jQuery('.tz-homeType5').removeClass('tz-homeEff');
            jQuery('.tz-homeType3').removeClass('tz-homeEff');
        }
    }else{
        if ( $_scrollTop > $_height ) {
            jQuery('#Tz-provokeMe').addClass('tz-menuEffect');
        }else{
            jQuery('#Tz-provokeMe').removeClass('tz-menuEffect');
        }
    }

});



