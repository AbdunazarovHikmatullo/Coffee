// Sticky header border on scroll
const header = document.getElementById('site-header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menu tabs
const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-list');

function activateTab(name) {
  tabs.forEach(t => {
    const active = t.dataset.tab === name;
    t.classList.toggle('is-active', active);
    t.setAttribute('aria-selected', active);
  });
  panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === name));
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
});

// Hero quick-nav jumps straight to a menu category
document.querySelectorAll('.quick-nav__item').forEach(btn => {
  btn.addEventListener('click', () => {
    activateTab(btn.dataset.jump);
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });
});