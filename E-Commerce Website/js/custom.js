jQuery(document).ready(function($) {
    "user strict";

    var mainSlider = $('.main_slider');
    var hamburger = $('.hamburger_container');
    var menu = $('.hamburger_menu');
    var menuActivate = false;
    var hamburgerClose = $('.hamburger_close');
    var fsOverlay = $('.fs_menu_overlay');

    initFavorite();



    //favorite

    function initFavorite() {
        if ($('.favorite').length) {
            var favs = $('.favorite');
            favs.each(function() {
                var fav = $(this);
                var active = false;
                if (fav.hasClass('active')) {
                    active = true;
                }
                fav.on('click', function() {
                    if (active) {
                        fav.removeClass('active');
                        active = false;
                    } else {
                        fav.addClass('active');
                        active = true;
                    }
                })
            })
        }
    }
})

