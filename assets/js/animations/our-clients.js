// STECH AESTHETICS ANIMATION START
gsap.from('.darkaestheticsribbon', {
    duration: 0.5,
    delay: 0.5,
    ease: 'power2.in',
    scaleY: 0,
    opacity: 0
});

gsap.to('.darkaestheticsribbon', {
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


// OUR-CLIENTS ANIMATION START

gsap.from('.cardclient', {
    duration: 1,
    delay: 1,
    scale: 0,
    ease: 'power2.inOut',
    opacity: 0,
    stagger: 0.5
});

gsap.to('.cardclient', {
    scale: 1
});

// OUR-CLIENTS ANIMATION END