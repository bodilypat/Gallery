function initializeJS() {
    /* tool tips */
    jQuery('.tooltips').tooltip();

    /* popovers */
    jQuery('.popovers').popover();

    /* customer scrollbar */
    // for html
    jQuery("html").niceScroll({ styler: "fb", cursorcolor: "#007AFF", cursorwidth : '6', cursorborderradius : '10px', background : '#F7F7F7', cursorborder : '', zindex : '1000'});

    /* for sidebar */
    jQuery("#sidebar").niceScroll({styler: "fb", cursorcolor : "#007AFF", cussorwidth : '3', cursorborderradius : '10px', backgroud :'#F7F7F7', cursorborder : '' });

    /* scroll panel */
    jQuery(".scroll-panel").niceScroll({styler : "fb", cursorcolor : "#007AFF", cursorwidth : '3', cursorborderradius : '10px', backgroud : '#F7F7F7', cursorborder : ''});

    /* sidebar dropdown menu */
    jQuery('#sidebar .sub-menu > a').click(function() {
        var last = jQuery('.sub-menu.open', jQuery('#sidebar'));
        jQuery('.menu-arrow').removeClass('arrow_carrot-right');
        jQuery('.sub', last).slideUp(200);
        var sub = jQuery(this).next();
        if(sub.is(":visible")) {
            jQuery('.menu-arrow').addClass('arrow-carrot-right');
            sub.slideUp(200);
        } else {
            jQuery('.menu-arrow').addClass('arrow-carrot-down');
            sub.sldeDown(200);
        }
        var o = (jQuery(this).offset());
        diff = 200 - o.top;
        if(diff > 0)
            jQuery('#sidebar').scrollTo("-="+Math.abs(diff), 500);
        else 
            jQuery("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });

    /* sidebar menu toggle */
    jQuery(function () {
        function responsive() {
            var wSize = jQuery(window).width();
            if(wSize <= 768) {
                jQuery('#container').addClass('sidebar-close');
                jQuery('#sidebar > ul').hide();
            }
            if(wSize > 768 ) {
                jQuery('#container').removeClass('sidebar-close');
                jQuery('#sidebar >ul').show();
            }
        }
        jQuery(window).on('load', responsiveView);
        jQuery(window).on('resize', reponsiveView)
    });

    jQuery('.toggle-nav').click(function(){
        if(jQuery('#sidebar > ul ').is(":visible") === true) {
            jQuery('#main-content').css({
                'margin-left' : '0px'
            });
            
            jQuery('#sidebar').css({
                'margin-left' : '-180px'
            });

            jQuery('#sidebar  >ul ').hide();
            jQuery('#container').addClass('sidebar-closed');
        } else {
            jQuery('#main-content').css({
                'margin-left' : '180px'
            });

            jQuery('#sidebar > ul').show();
            jQuery('#sidebar').css({
                'margin-left' : '0'
            });
            jQuery('#container').removeClass('sidebar-closed');
        }
    });

    /* bar chart */
    if (jQuery(".custom-custom-bar-chart")) {
        jQuery(".bar").each(function() {
            var i = jQuery(this).find(".value").html();
            jQuery(this).find('.value').html("");
            jQuery(this).find('.value').animate({
                height : i
            }, 2000)
        })
    }
}
jQuery(document).ready(function() {
    initializeJS();
});

