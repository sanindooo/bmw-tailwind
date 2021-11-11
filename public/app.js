gsap.registerPlugin(ScrollTrigger);

// mobile navbar
const burger = document.querySelector("#burger");
const closeIcon = document.querySelector("#close");
const mobileBtn = document.querySelector("#mobileBtn");
const navMenu = document.querySelector("#nav");

mobileBtn.addEventListener('click', () => {
    burger.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
});

// sldier 
var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'center',
    contain: true,
    fade: true,
    autoPlay: 6000,
    wrapAround: true, 
    freeScroll: true,
    pageDots: false,
    prevNextButtons: false,
});

// animations 

// hero animation on load 
let tl =gsap.timeline();

tl
.from("#hero-bg", { opacity: 0, delay: 0.5, duration: 2, scale: 0.8 })
.from("#fade-in-1", { opacity: 0, duration: 1 }, "-=1")

// ___________________________________

// Stagger highlight section 
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#highlights",   
        start: "75% 100%"   
    }
});

tl2
.from("#highlights a", { opacity: 0, y: 50, stagger: 0.1 })


// ___________________________________

// Stagger specification section 
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "specs",    
        start: "75% 50%"  
    }
});

tl3
.from("#slide-right", { x:-100, opacity:0, duration: 0.5 })
.from("#specs li", { opacity: 0, y: 50, stagger: 0.1})

// ___________________________________
    
// heading and text animations 
gsap.from("#fade-up-1", { scrollTrigger:"#fade-up-1", start: "75% 100%", y:50, opacity:0, duration: 0.5 })
gsap.from("#fade-up-2", { scrollTrigger:"#fade-up-2", start: "75% 100%", y:50, opacity:0, duration: 0.5 })
gsap.from("#fade-in-2", { scrollTrigger:"#fade-in-2", start: "75% 100%", opacity:0, duration: 1, delay: 0.3 })
gsap.from("#fade-in-3", { scrollTrigger:"#fade-in-3", start: "75% 100%", opacity:0, duration: 1, delay: 0.3 })
gsap.from("#fade-in-4", { scrollTrigger:"#fade-in-4", start: "75% 100%", opacity:0, duration: 1, delay: 0.3 })

// ___________________________________