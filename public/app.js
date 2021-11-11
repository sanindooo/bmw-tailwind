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
.from("#fade-down", { y: -100, opacity: 0, duration: 0.5 })

// ___________________________________

// Stagger highlight section 
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#highlights",   
        start: "20% 100%"   
    }
});

tl2
.from("#highlights a", { opacity: 0, y: 50, stagger: 0.5 })


// ___________________________________

// Stagger specification section 
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "techspecs",    
        start: "80% 100%"  
    }
});

tl3
.from("#slide-right", { x:-100, opacity:0, duration: 1 })
.from("#specs li", { opacity: 0, y: 50, stagger: 0.2})

// ___________________________________

// Stagger footer 
let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",    
        start: "top 90%"  
    }
});

tl5
.from(".stagger-links a", { opacity: 0, y: 50, stagger: 0.1})

// ___________________________________
    
// heading and text animations 
gsap.from("#fade-up-1", { scrollTrigger:"#fade-up-1", start: "center center", y:50, opacity:0, duration: 1 })
gsap.from("#fade-up-2", { scrollTrigger:"#fade-up-2", start: "center center", y:50, opacity:0, duration: 1 })
gsap.from("#fade-in-2", { scrollTrigger:"#fade-in-2", start: "center center", opacity:0, duration: 1.5, delay: 0.3 })
gsap.from("#fade-in-3", { scrollTrigger:"#fade-in-3", start: "center center", opacity:0, duration: 1.5, delay: 0.3 })
gsap.from("#fade-in-4", { scrollTrigger:"#fade-in-4", start: "center center", opacity:0, duration: 1.5, delay: 0.3 })

// ___________________________________