function openNav() {
    $("#nav").addClass("open"), $("body").addClass("nav-opened")
}

function closeNav() {
    $("#nav").removeClass("open"), $("body").removeClass("nav-opened")
}

function openSubNav(a) {
    $("#nav-main").hide(), $(a).fadeIn()
}

function closeSubNav() {
    $(".sub-nav").hide(), $("#nav-main").fadeIn()
}
jQuery(function(a) {
    AOS.init({
        offset: 200,
        duration: 500
    });
    var e = a("header").height();
    a(window).scroll(function() {
        a(window).scrollTop() >= e ? a("header").addClass("header-solid") : a("header").removeClass("header-solid")
        a(window).scrollTop() >= e ? $(".breadcrumb-2").removeClass('d-none') : $(".breadcrumb-2").addClass('d-none')
    }), a(".main-slider").owlCarousel({
        autoplay: !0,
        autoHeight: !0,
        items: 1,
        loop: !0,
        margin: 0,
        nav: !1,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    })
});


// $('#show3d').click(function () {
//   $('#loading').fadeIn();
//   $('a.js-fullscreen').click(function(e) {
//     e.preventDefault();
//     $('.spritespin').spritespin('api').requestFullscreen();  
//   });

//   $(".spritespin").attr("style", "margin-left: -20% !important; padding-left: -50% !important;");

//   $('.spritespin').spritespin({
//     source: SpriteSpin.sourceArray(source_image+'{frame}.png', { frame: [0,60], digits: 4 }),
//     sense: -1,
//     width: 800,
//     height: 520,
//     responsive: false,
//     loop  : false, 
//     animate  : false, 
//   });

//   $('#mainImage').hide();
//   $('#threedContent').show();

//   $('#hide3d').show();
//   $('#loading').fadeOut();
// });

// $('#hide3d').click(function () {
//   $('#threedContent').hide();
//   $('#mainImage').show();
//   $('#hide3d').hide();
// });