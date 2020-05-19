import {
  scrollHome,
  scrollToAbout,
  scrollToContact,
  aboutHeaderSlide,
  leftSlide,
  contactHeaderSlide,
  formSlide,
  socialSlide,
  socialHead,
} from './gsap.js';

// GSAP animations on about section
const sliding = () => {
  aboutHeaderSlide();
  leftSlide();
};

// Gsap animations on contact section
const contactSlides = () => {
  contactHeaderSlide();
  formSlide();
  socialSlide();
  socialHead();
};

const about = $('.header-secondary');
const contact = $('.contact-secondary');
let triggeredAbout = false;
let triggeredContact = false;

$(window).scroll(() => {
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();

  const aboutTop = $(about).offset().top;
  const aboutBottom = aboutTop + $(about).height();

  const contactTop = $(contact).offset().top;
  const contactBottom = contactTop + $(contact).height();
  if (
    !triggeredAbout &&
    aboutBottom <= docViewBottom &&
    aboutTop >= docViewTop
  ) {
    sliding();
    triggeredAbout = true;
  }
  if (
    !triggeredContact &&
    contactBottom <= docViewBottom &&
    contactTop >= docViewTop
  ) {
    contactSlides();
    triggeredContact = true;
  }
});

// Scroll back home
$('.scrollhome').click(event => {
  event.preventDefault();
  scrollHome();
});

// Scroll contact with navlink
$('.scrollcontact').click(event => {
  event.preventDefault();
  scrollToContact();
});
// Scroll to about with navlink
$('.scrollabout').click(event => {
  event.preventDefault();
  scrollToAbout();
});

// Scroll to contact section with btn
$('.btn').click(event => {
  event.preventDefault();
  scrollToContact();
});
