// STECH AESTHETICS ANIMATION START
gsap.from('.stechaestheticsribbon', {
    duration: 0.5,
    ease: 'power2.in',
    scaleY: 0,
    opacity: 0
});

gsap.to('.stechaestheticsribbon', {
    scaleY: 1
});

gsap.from('.stechaesthetics-title', {
    duration: 0.75,
    delay: 0.75,
    y: 40,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.stechaesthetics-title', {
    y: 0
});

gsap.from('.stechaesthetics-text', {
    duration: 1,
    delay: 1,
    y: 20,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.stechaesthetics-text', {
    y: 0
});

// STECH AESTHETICS ANIMATION END


// CONTACT FORM ANIMATION START

gsap.from('.contactform', {
    duration: 1.75,
    delay: 1.75,
    y: -20,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.contactform', {
    y: 0
});

// CONTACT FORM ANIMATION END


// CONTACT INFO ANIMATION START

gsap.from('.contact-info-header', {
    duration: 2,
    delay: 2,
    y: 20,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.contact-info-header', {
    y: 0
});

gsap.from('.contact-info-body', {
    duration: 2.25,
    delay: 2.25,
    scale: 0,
    ease: 'power2.inOut',
    opacity: 0
});

gsap.to('.contact-info-body', {
    scale: 1
});

// CONTACT INFO ANIMATION END