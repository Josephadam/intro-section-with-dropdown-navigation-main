document.addEventListener('DOMContentLoaded', function() {
    basicFunctions();
    initLoader();
})

function basicFunctions() {
$(document).ready(() => {
    $('.drop-down').click(function() {
        $('.pop-out').toggleClass('active');
        $(this).toggleClass('active');
        $(this).next('.pop-out').find('.features').toggleClass('active');
    })
});

$(document).ready(() =>{
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-bg').toggleClass('active');
        $('.nav-bg').toggleClass('active');
    })
});

$(document).ready(function(){
  $('.accordion').click(function(){
    $('.accordion-open').not($(this).parent().find('.accordion-open')).slideUp(400, "swing");
    $(this).parent().find('.accordion-open').slideToggle(400, "swing");
    $(this).toggleClass('active');
  });
});
}


function initLoader() {
        var tl = gsap.timeline();

        tl.from(" .once-in", {
        duration: 3.3,
        yPercent: 200,
        ease: "Expo.easeOut",
    }, "<0.1");

    tl.from('img', {
        xPercent: 100, 
        scale: 1.3, 
        immediateRender: false,
        duration: 3, 
        ease: "power2.out" // Animate image sliding and scaling
    }, "<");

    tl.from('.thumbnail', {
        duration: 3, 
        ease: "power2.out",
        xPercent: -100,
        autoAlpha: 0
    },"<");

    tl.from('.thumbnail-mobile', {
        duration: 3, 
        ease: "power2.out",
        xPercent: -100,
        autoAlpha: 0
    },"<");

    }


