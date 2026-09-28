// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '#main',
//         markers: true,
//         start: '50% 50%',
//         end: '150% 50%',
//         scrub: true,
//         pin: '.card'
//     }
// })

// tl.to('.card', {
//     rotationY: 90,
//     rotationX: 10,
//     // scale: 1.2,
// })
// tl.to('.card', {
//     rotationY: 180,
//     rotationX: 0,
//     filter: 'grayscale(50%)',
//     // scale: 1.5,
// })
// tl.to('.card', {
//     rotationY: 270,
//     rotationX: -10,
//     // scale: 1.8,
// })
// tl.to('.card', {
//     rotationY: 360,
//     rotationX: 0,
//     filter: 'grayscale(0%)',
//     // scale: 2,
// })


gsap.registerPlugin(ScrollTrigger);


// ====================
// LENIS SMOOTH SCROLL
// ====================

const lenis = new Lenis({
    duration: 2,
    smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);


// ====================
// YOUR GSAP ANIMATION
// ====================
gsap.set('.card', {
    filter: 'grayscale(100%)'
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#main',
        start: '50% 50%',
        end: '150% 50%',
        scrub: 1,
        pin: '.card'
    }
});

tl.to('.card', {
    rotationY: 90,
    rotationX: 10,
    scale: 1.3,
    filter: 'grayscale(75%)'
});

tl.to('.card', {
    rotationY: 180,
    rotationX: 0,
    scale: 1.5,
    filter: 'grayscale(50%)'
});

tl.to('.card', {
    rotationY: 270,
    rotationX: -10,
    scale: 1.8,
    filter: 'grayscale(25%)'
});

tl.to('.card', {
    rotationY: 360,
    rotationX: 0,
    scale: 2,
    filter: 'grayscale(0%)'
});
