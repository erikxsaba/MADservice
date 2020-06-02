// About header slide
export const aboutHeaderSlide = () => {
  gsap.from('.header-secondary', { duration: 1, x: -130, opacity: 0 });
  gsap.to('.header-secondary', { duration: 1, x: 0, opacity: 1 });
};

// Contact header slide
export const contactHeaderSlide = () => {
  gsap.from('.contact-secondary', { duration: 1.4, x: -200, opacity: 0 });
  gsap.to('.contact-secondary', { duration: 1.4, x: 0, opacity: 1 });
};

// Contact form slide in
export const formSlide = () => {
  gsap.from('.contact-form', { duration: 1.6, x: -320, opacity: 0 });
  gsap.to('.contact-form', { duration: 1.6, x: 0, opacity: 1 });
};

// social media header slide in
export const socialHead = () => {
  gsap.from('.social-media', { duration: 1.2, x: 320, opacity: 0 });
  gsap.to('.social-media', { duration: 1.2, x: 0, opacity: 1 });
};

// Social slide
export const socialSlide = () => {
  gsap.timeline().from('.contact-social .social-link', {
    stagger: 0.3,
    y: 200,
    duration: 1.3,
    opacity: 0,
  });
};

// About content slides
export const leftSlide = () => {
  gsap.from('.column', { duration: 1.5, x: -300, opacity: 0 });
  gsap.to('.column', { duration: 1.5, x: 0, opacity: 1 });
};

// Scroll back home
export const scrollHome = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '#home' });
};

// Scroll to about section
export const scrollToAbout = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '.kitchen' });
};

// Scroll to contact
export const scrollToContact = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '.contact-secondary' });
};
