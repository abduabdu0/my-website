/* ═══════════════════════════════════════════
   StudioPro — main.js
   - Burger / Mobile Drawer
   - Scroll effects
   - Form → WhatsApp + Telegram
   - PWA Install Banner
   - Offline indicator
   - Animations
═══════════════════════════════════════════ */

/* ── Config: замените на свои номера ── */
const WHATSAPP_PHONE = '992928747070';   // ← Ваш номер без +
const TELEGRAM_BOT   = 'simo_isfara';   // ← Ваш Telegram username

/* ══════════════════════════════
   ACTIVE NAV LINK
══════════════════════════════ */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .drawer-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ══════════════════════════════
   HEADER SCROLL SHADOW
══════════════════════════════ */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ══════════════════════════════
   BURGER + MOBILE DRAWER
══════════════════════════════ */
const burger  = document.getElementById('burger');
const drawer  = document.getElementById('mobile-drawer');
const backdrop = document.getElementById('drawer-backdrop');
const drawerClose = document.getElementById('drawer-close');

function openDrawer() {
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  drawer.classList.remove('open');
  document.body.style.overflow = '';
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}

if (burger) burger.addEventListener('click', () => {
  burger.classList.contains('open') ? closeDrawer() : openDrawer();
});
if (backdrop) backdrop.addEventListener('click', closeDrawer);
if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

// Close on drawer link click
document.querySelectorAll('.drawer-nav a').forEach(a => {
  a.addEventListener('click', closeDrawer);
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDrawer();
    closeLightbox();
  }
});

/* ══════════════════════════════
   INTERSECTION OBSERVER (fade-up)
══════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
function showToast(msg, isError = false) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = isError ? '#c4856a' : '#1a5f5a';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

/* ══════════════════════════════
   FORM → WHATSAPP + TELEGRAM
══════════════════════════════ */
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = form.querySelector('[name="name"]')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || '';
    const note  = form.querySelector('[name="note"]')?.value.trim() || '';
    const type  = form.querySelector('[name="type"]')?.value || '';

    if (!name || !phone) {
      showToast('⚠️ Заполните имя и контакт', true);
      return;
    }

    // Build message text
    let msg = `🎬 *Новая заявка — StudioPro*\n\n`;
    msg += `👤 *Имя:* ${name}\n`;
    msg += `📱 *Контакт:* ${phone}\n`;
    if (type) msg += `📸 *Тип съёмки:* ${type}\n`;
    if (note) msg += `📝 *Задача:* ${note}\n`;
    msg += `\n📅 Дата: ${new Date().toLocaleString('ru-RU')}`;

    // WhatsApp link
    const waMsg  = encodeURIComponent(msg.replace(/\*/g, ''));
    const waUrl  = `https://wa.me/${WHATSAPP_PHONE}?text=${waMsg}`;

    // Telegram link
    const tgMsg  = encodeURIComponent(msg);
    const tgUrl  = `https://t.me/${TELEGRAM_BOT}?text=${tgMsg}`;

    // Show choice modal
    showSendModal(waUrl, tgUrl, form);
  });
});

/* Send choice modal */
function showSendModal(waUrl, tgUrl, form) {
  // Remove existing
  document.getElementById('send-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'send-modal';
  modal.innerHTML = `
    <div class="send-overlay"></div>
    <div class="send-box">
      <div class="send-box-icon">✉️</div>
      <h3 style="font-family:'Playfair Display',serif;margin-bottom:8px">Куда отправить заявку?</h3>
      <p class="small" style="margin-bottom:24px">Выберите мессенджер — откроется чат с готовым сообщением</p>
      <div style="display:flex;flex-direction:column;gap:12px">
        <a href="${waUrl}" target="_blank" rel="noopener" class="send-btn send-wa">
          <span>💬</span> Отправить в WhatsApp
        </a>
        <a href="${tgUrl}" target="_blank" rel="noopener" class="send-btn send-tg">
          <span>✈️</span> Отправить в Telegram
        </a>
        <button class="send-btn send-cancel" onclick="document.getElementById('send-modal').remove()">
          Отмена
        </button>
      </div>
    </div>
  `;

  // Inline styles for modal (no extra CSS file needed)
  const style = document.createElement('style');
  style.textContent = `
    #send-modal { position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px; }
    .send-overlay { position:absolute;inset:0;background:rgba(19,72,69,.7);backdrop-filter:blur(6px); }
    .send-box { position:relative;background:#fff;border-radius:20px;padding:36px 28px;max-width:360px;width:100%;text-align:center;box-shadow:0 40px 80px rgba(0,0,0,.25);animation:popIn .3s cubic-bezier(.4,0,.2,1) both; }
    @keyframes popIn { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
    .send-box-icon { font-size:2.5rem;margin-bottom:12px; }
    .send-btn { display:flex;align-items:center;justify-content:center;gap:10px;padding:14px 20px;border-radius:12px;font-size:.9rem;font-weight:500;font-family:'DM Sans',sans-serif;text-decoration:none;cursor:pointer;border:none;transition:all .2s; }
    .send-wa { background:#25D366;color:#fff; }
    .send-wa:hover { background:#1ebe5d;color:#fff;transform:translateY(-1px); }
    .send-tg { background:#0088cc;color:#fff; }
    .send-tg:hover { background:#007ab8;color:#fff;transform:translateY(-1px); }
    .send-cancel { background:#f3f4f6;color:#6b7280; }
    .send-cancel:hover { background:#e5e7eb; }
  `;
  document.head.appendChild(style);

  document.body.appendChild(modal);

  // Close on overlay click
  modal.querySelector('.send-overlay').addEventListener('click', () => modal.remove());

  // After clicking WA or TG, reset form and show toast
  modal.querySelectorAll('.send-wa, .send-tg').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        modal.remove();
        form.reset();
        showToast('✓ Заявка отправлена! Ждите ответа.');
      }, 300);
    });
  });
}

/* ══════════════════════════════
   LIGHTBOX
══════════════════════════════ */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');

function closeLightbox() {
  if (lb) lb.classList.remove('open');
}

if (lb) {
  document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.querySelectorAll('.masonry-item img, .port-item img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

/* ══════════════════════════════
   PORTFOLIO FILTERS
══════════════════════════════ */
document.querySelectorAll('.ftab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const f = tab.dataset.filter;
    document.querySelectorAll('[data-cat]').forEach(item => {
      item.style.display = (f === 'all' || item.dataset.cat === f) ? '' : 'none';
    });
  });
});

/* ══════════════════════════════
   PWA INSTALL BANNER
══════════════════════════════ */
let deferredPrompt = null;
const pwaBanner  = document.getElementById('pwa-banner');
const pwaInstall = document.getElementById('pwa-install');
const pwaDismiss = document.getElementById('pwa-dismiss');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  // Show banner after 3 seconds delay (not too aggressive)
  setTimeout(() => {
    if (pwaBanner) pwaBanner.classList.add('visible');
  }, 3000);
});

if (pwaInstall) {
  pwaInstall.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    pwaBanner.classList.remove('visible');
    if (outcome === 'accepted') showToast('🎉 Приложение установлено!');
  });
}

if (pwaDismiss) {
  pwaDismiss.addEventListener('click', () => {
    pwaBanner.classList.remove('visible');
    // Don't show again for this session
    sessionStorage.setItem('pwa-dismissed', '1');
  });
}

window.addEventListener('appinstalled', () => {
  if (pwaBanner) pwaBanner.classList.remove('visible');
});

// Don't show if already dismissed
if (sessionStorage.getItem('pwa-dismissed')) {
  if (pwaBanner) pwaBanner.style.display = 'none';
}

/* ══════════════════════════════
   OFFLINE
══════════════════════════════ */
function updateOnline() {
  document.body.classList.toggle('offline', !navigator.onLine);
}
window.addEventListener('online', updateOnline);
window.addEventListener('offline', updateOnline);
updateOnline();

/* ══════════════════════════════
   SERVICE WORKER
══════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.log('SW registration failed:', err));
  });
}
