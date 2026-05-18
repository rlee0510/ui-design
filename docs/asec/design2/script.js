/* Mobile drawer nav */
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

function toggleDrawer(open) {
  const isOpen = open === undefined ? !drawer.classList.contains('open') : open;
  drawer.classList.toggle('open', isOpen);
  drawerOverlay.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  drawerOverlay.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleDrawer());
drawerClose.addEventListener('click', () => toggleDrawer(false));
drawerOverlay.addEventListener('click', () => toggleDrawer(false));

// Close drawer on link click
drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => toggleDrawer(false));
});

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 20;
  header.classList.toggle('scrolled', scrolled);
});

// Service page tabs and panels
const tabButtons = document.querySelectorAll('.svc-tab-btn');
const sideButtons = document.querySelectorAll('.svc-nav__btn');
const panels = document.querySelectorAll('.svc-panel');
const nextLinks = document.querySelectorAll('.svc-panel__next');

const serviceLabels = {
  accounting: '會計',
  payroll: '薪資',
  taxation: '稅務',
  'hk-incorporation': '香港公司成立',
  'offshore-incorporation': '離岸公司成立',
  'company-secretary': '公司秘書',
  'registered-office': '註冊辦事處',
  'sfc-licensing': '證監會牌照申請',
  compliance: '合規支援',
  'due-diligence': '盡職審查',
  'it-solutions': '企業技術支援方案',
};

function switchService(service) {
  tabButtons.forEach(btn => {
    const active = btn.dataset.service === service;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  sideButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.service === service));
  panels.forEach(panel => panel.classList.toggle('active', panel.id === `panel-${service}`));
  const label = serviceLabels[service] || '服務範圍';
  document.title = `${label} | A Secretarial Services Limited`;
}

[...tabButtons, ...sideButtons].forEach(button => {
  button.addEventListener('click', () => switchService(button.dataset.service));
});

nextLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    switchService(link.dataset.next);
    const targetTab = document.querySelector(`.svc-tab-btn[data-service="${link.dataset.next}"]`);
    if (targetTab) {
      targetTab.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  });
});

// Load panel from URL hash
const currentHash = window.location.hash.replace('#', '');
if (currentHash && serviceLabels[currentHash]) {
  switchService(currentHash);
}

// Contact form demo submit
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const successMsg = document.getElementById('formSuccess');
  if (!form || !successMsg) return;
  form.hidden = true;
  successMsg.hidden = false;
}
