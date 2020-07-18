(function ($) {
    "use strict";
    
    /* CALCULATE PAGE TITLE NEGATIVE MARGIN */
    var adjustPageTitle = function () {
        var distance = $('#ny-main-container > .container').offset().left - 295;
        $('#ny-main-container').find('.ny-page-title').css('margin-right', -distance);
        $('#ny-main-container').find('.ny-page-title').css('padding-right', distance);
        $('#ny-main-container').find('.ny-page-title').css('opacity', 1);
    };

    /* HORIZONTAL CARD IMAGES */
    var cardImages = function () {
        $('body').find(".card-horizontal-right").each(function () {
            if ($(this).attr('data-img')) {
                var card_img = $(this).data('img');
                $(this).css('background-image', 'url("' + card_img + '")');
            }
        });
    };
    
    /* GO TO TOP BUTTON */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $("#ny-gototop").css('bottom', 0);
        } else {
            $("#ny-gototop").css('bottom', '-50px');
        }
    });
    
    $("#ny-gototop").on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
    /* FULLSCREEN SEARCH */
    $("#ny-open-search").on('click', function (e) {
        e.preventDefault();
        $("#ny-fullscreen-search").fadeIn(200);
    });
    
    $("#ny-close-search").on('click', function (e) {
        e.preventDefault();
        $("#ny-fullscreen-search").fadeOut(200);
    });

    /* MAIN MENU */
    $('#ny-main-menu').find(".ny-menu-ul > li > a").on('click', function () {
        var nxtLink = $(this).next();
        if ((nxtLink.is('ul')) && (nxtLink.is(':visible'))) {
            nxtLink.slideUp(300);
            $(this).removeClass("ny-menu-up").addClass("ny-menu-down");
        }
        if ((nxtLink.is('ul')) && (!nxtLink.is(':visible'))) {
            $('#ny-main-menu').find('.ny-menu-ul > li > ul:visible').slideUp(300);
            nxtLink.slideDown(300);
            $('#ny-main-menu').find('.ny-menu-ul > li:has(ul) > a').removeClass("ny-menu-up").addClass("ny-menu-down");
            $(this).addClass("ny-menu-up");
        }
        if (nxtLink.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    
    /* MOBILE MENU */
    $("#ny-menu-toggle").on('click', function () {
        $("#ny-social-cell,#ny-main-menu").toggle();
    });
    
    /* EVENTS */
    $(document).ready(function () {
        adjustPageTitle();
        cardImages();
        $('#ny-main-menu').find('.ny-menu-ul > li:has(ul) > a').addClass("ny-menu-down");
        $('body').find('select').addClass('custom-select');
        $('body').find('.ny-masonry-grid').css('opacity', '1');
    });
    
    $(window).on('resize orientationchange', function () {
        adjustPageTitle();
    });
    
    $(window).on('load', function () {
        var grid = $('body').find('.ny-masonry-grid');
        salvattore.rescanMediaQueries(grid);
    });
    
})(jQuery);