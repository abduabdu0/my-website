/* ═══════════════════════════════════════════
   StudioPro — main.js
   PWA install, animations, form, nav
═══════════════════════════════════════════ */

// ── Active nav link ──
document.querySelectorAll('.nav a, .header_menu a').forEach(a => {
  if (a.href === location.href || a.href.endsWith(location.pathname.split('/').pop())) {
    a.classList.add('active');
  }
});

// ── Burger menu ──
const burger = document.querySelector('.header_burger');
const menu   = document.querySelector('.header_menu');
if (burger && menu) {
  // Clone nav links into mobile menu
  document.querySelectorAll('.nav a').forEach(a => {
    const clone = a.cloneNode(true);
    menu.appendChild(clone);
  });
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Intersection Observer for fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Toast ──
function showToast(msg, duration = 3500) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ── Form submission ──
document.querySelectorAll('#contactForm').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const orig = btn.textContent;
    btn.textContent = '…';
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (_) {}

    btn.textContent = orig;
    btn.disabled = false;
    form.reset();
    showToast('✓ Заявка отправлена — мы свяжемся с вами');
  });
});

// ── Offline indicator ──
function updateOnline() {
  document.body.classList.toggle('offline', !navigator.onLine);
}
window.addEventListener('online',  updateOnline);
window.addEventListener('offline', updateOnline);
updateOnline();

// ── Service Worker registration ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ── PWA Install prompt ──
let deferredPrompt;
const banner = document.getElementById('install-banner');
const installBtn = document.getElementById('install-btn');
const dismissBtn = document.getElementById('dismiss-btn');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  if (banner) banner.classList.add('show');
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (banner) banner.classList.remove('show');
  });
}

if (dismissBtn) {
  dismissBtn.addEventListener('click', () => {
    if (banner) banner.classList.remove('show');
  });
}

window.addEventListener('appinstalled', () => {
  if (banner) banner.classList.remove('show');
});
