'use strict';

const header = document.querySelector('[data-header]');
const navbar = document.querySelector('[data-navbar]');
const backdrop = document.querySelector('.mobile-backdrop');
const navToggleButtons = document.querySelectorAll('[data-nav-toggler]');
const backTopButton = document.querySelector('[data-back-top-btn]');
const bookingForm = document.querySelector('#booking-form');
const successMessage = document.querySelector('#booking-success');

const closeMobileNav = () => {
  navbar.classList.remove('active');
  backdrop.classList.remove('active');
};

const toggleMobileNav = () => {
  const isOpen = navbar.classList.toggle('active');
  backdrop.classList.toggle('active', isOpen);
};

navToggleButtons.forEach((button) => {
  button.addEventListener('click', toggleMobileNav);
});

backdrop.addEventListener('click', closeMobileNav);

document.querySelectorAll('[data-nav-link]').forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY >= 80;
  header.classList.toggle('scrolled', isScrolled);
  backTopButton.classList.toggle('active', isScrolled);
});

document.querySelectorAll('.trip-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.trip-tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }
  bookingForm.hidden = true;
  successMessage.classList.add('visible');
});