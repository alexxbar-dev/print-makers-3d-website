/**
 * @file header-nav.js
 * @description Manages the behavior of header:
 *   - Hide/show when scrolling
 *   - Mobile menu toggle with overlay and scroll lock
 */

const headerNav = document.querySelector('.header');
const navToggle = document.querySelector('.header__nav-toggle');
const overlay = document.querySelector('.header__overlay');
const navMenu = document.querySelector('.header__nav');
const menuIcon = navToggle.querySelector('img');
let lastScrollY = window.scrollY;
const threshold = 70;


// --- HEADER SCROLL BEHAVIOR ---
function handleScroll() {
  const currentScrollY = window.scrollY;
  if (Math.abs(currentScrollY - lastScrollY) < threshold) return;
  
  headerNav.classList.toggle("hidden", currentScrollY > lastScrollY);
  lastScrollY = currentScrollY;
}
window.addEventListener('scroll', handleScroll);


// --- MOBILE MENU TOGGLE ---
function toggleMenu() {
  const isActive = navToggle.classList.toggle('active'); 
  navMenu.classList.toggle('active', isActive);
  overlay.classList.toggle('active', isActive);
  document.body.classList.toggle('no-scroll', isActive);

  navToggle.innerHTML = isActive 
  ? '&times;' 
  : `${menuIcon?.outerHTML || ''}`;
}

function closeMenu() {
  overlay.classList.remove('active');
  navMenu.classList.remove('active');
  navToggle.classList.remove('active');
  document.body.classList.remove('no-scroll');
  navToggle.innerHTML = `${menuIcon?.outerHTML || ''}`; 
}

// Event bindings
navToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);