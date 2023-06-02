$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open')
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoPlay: true
    });

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" className="article-slider__arrow article-slider__arrowleft"><img src="../images/icons/prev.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" className="article-slider__arrow article-slider__arrowright"><img src = "../images/icons/next.svg" alt = "arrow right"></button>'
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
})
