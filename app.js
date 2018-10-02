$(document).ready(function () {
    var typed = new Typed('.typed', {
        strings: ['', 'Hello, I’m Shyam.', ' I’m a front-end UI/UX Developer.', 'Thanks for visiting my site.',],
        typeSpeed: 0,
        backSpeed: 0,
        // fadeOut: true,
        loop: true
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    var heads= $('.skills h6')

    for(let a of heads){
        let widthlength = a.dataset.percent
        $(a).next().children().animate({width:`${widthlength}%`},1000,'swing')
    }
    
})
$('.ham span').on('click', function () {
    $('.hampopup').toggleClass('hamactive')
    return false
})

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > $('header').height() - $('nav').height()) {
        $('nav').css({ background: 'white', position: 'fixed' })
        $('.links a').css('color', '#6881a9')
        $('.logo').css('color', '#6881a9')
    }
    else {
        $('nav').css({ background: 'transparent', position: 'absolute' })
        $('.links a').css('color', '#ffffff')
        $('.logo').css('color', '#ffffff')
    }
})

particlesJS("particles-js", { "particles": { "number": { "value": 91, "density": { "enable": true, "value_area": 868.0624057955 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

