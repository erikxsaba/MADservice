// About header slide
export const aboutHeaderSlide = () => {
  gsap.from('.header-secondary', { duration: 1, x: -130, opacity: 0 });
  gsap.to('.header-secondary', { duration: 1, x: 0, opacity: 1 });
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
  gsap.to(window, { duration: 0.7, scrollTo: '.header-secondary' });
};

// Scroll to contact
export const scrollToContact = () => {
  gsap.to(window, { duration: 0.7, scrollTo: '.contact-secondary' });
};
