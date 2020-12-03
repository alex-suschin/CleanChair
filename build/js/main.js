// const { default: Swiper } = require("swiper")

$(document).ready(() => {
    jQuery("a.anchor").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    const worksThumbs = new Swiper('.works-thumbs', {
        spaceBetween: 36,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    const swiper = new Swiper('.swiper-container-works', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-works',
            prevEl: '.swiper-button-prev-works',
        },
        thumbs: {
            swiper: worksThumbs
        }
    });

    const rewiews = new Swiper('.slider-reweiws', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-rewiews',
            prevEl: '.swiper-button-prev-rewiews',
        },
    });

    $('.price-bnts a').click(function() {
        $('.price-bnts').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.price-box').find('.price-box-elem').hide();
        $('#' + $(this).data('switch')).show();
    });
});