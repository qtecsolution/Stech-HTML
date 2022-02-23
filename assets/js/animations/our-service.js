// STECH AESTHETICS ANIMATION START

gsap.from('#ribbonicon', {
    stagger: 0.5
});

gsap.from('#path-1', {
    duration: 1,
    delay: 1,
    ease: 'power2.in',
    y: 100,
    opacity: 0
});

gsap.to('#path-1', {
    y: 0
});

gsap.from('#path-2', {
    duration: 1,
    delay: 1,
    ease: 'power2.in',
    y: 100,
    opacity: 0
});

gsap.to('#path-2', {
    y: 0
});

gsap.from('#path-3', {
    duration: 1,
    delay: 1,
    ease: 'power2.in',
    y: -100,
    opacity: 0
});

gsap.to('#path-3', {
    y: 0
});

gsap.from('.stechaesthetics-title', {
    duration: 1.5,
    delay: 1.5,
    y: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.stechaesthetics-title', {
    y: 0
});

gsap.from('.stechaesthetics-text', {
    duration: 1.75,
    delay: 1.75,
    y: 20,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.stechaesthetics-text', {
    y: 0
});

// STECH AESTHETICS ANIMATION END

// OUR-SERVICES ANIMATION END
gsap.from('.ourservicesribbon', {
    duration: 1.5,
    ease: 'power2.in',
    scaleY: 0,
    opacity: 0
});

gsap.to('.ourservicesribbon', {
    scaleY: 1
});

gsap.from('.ourservices-title', {
    x: '-40',
    duration: 1.75,
    delay: 1.75,
    ease: 'back',
    opacity: 0
});

gsap.to('.ourservices-title', {
    x: 0
});

gsap.from('.ourservices-text', {
    duration: 2,
    delay: 2,
    y: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.ourservices-text', {
    y: 0
});

gsap.from('.cardservice', {
    duration: 1.5,
    delay: 1.5,
    scale: 0,
    ease: 'power2.inOut',
    opacity: 0,
    stagger: 0.5
});

gsap.to('.cardservice', {
    scale: 1
});

// OUR-SERVICES ANIMATION END
