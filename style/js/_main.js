$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
    asNavFor: $('.carousel-main')[0]
    asNavFor: document.querySelector('.carousel-main')
    $('.carousel-main').flickity()({
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });;
    // 2nd carousel, navigation
    $('.carousel-nav').flickity({
        asNavFor: '.carousel-main',
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });
});
$(function () {
    $('.carousel').carousel({
        interval: false,
        wrap: false,
        keyboard: true
    });
});



