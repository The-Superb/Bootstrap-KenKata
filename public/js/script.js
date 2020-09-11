$(document).ready(function() {

    AOS.init();

    var owl2 = $('#owl2');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        nav:true,
        margin: 50,
    })

    var owl3 = $('#owl3');
    owl3.owlCarousel({
        items: 1,
        loop: true,
        nav:true,
        margin: 50,
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
                margin:30,
            },
            1000:{
                items:3,
            }
        }
    })

    $('div').tooltip();

})