/**
 * StudioPro — Main JavaScript
 * Mobile Menu, PWA Install, Form Integration
 */

// ═══════════════════════════════════════════════════════
// ═ CONFIGURATION
// ═══════════════════════════════════════════════════════
const CONFIG = {
  whatsapp: '+992005990620', // Номер WhatsApp
  telegram: 'M_A_910',   // Telegram username или ID чата
};

// ═══════════════════════════════════════════════════════
// ═ MOBILE MENU
// ═══════════════════════════════════════════════════════
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  const legacyBurger = document.querySelector('.header_burger');
  const legacyMenu = document.querySelector('.header_menu');
  const legacyNav = document.querySelector('.nav');

  if (legacyBurger && legacyMenu && legacyNav) {
    if (legacyMenu.children.length === 0) {
      legacyNav.querySelectorAll('a').forEach(a => {
        const clone = a.cloneNode(true);
        legacyMenu.appendChild(clone);
      });
    }

    legacyBurger.addEventListener('click', () => {
      legacyBurger.classList.toggle('open');
      legacyMenu.classList.toggle('open');
      document.body.style.overflow = legacyMenu.classList.contains('open') ? 'hidden' : '';
    });

    legacyMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        legacyBurger.classList.remove('open');
        legacyMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (!legacyBurger.contains(e.target) && !legacyMenu.contains(e.target)) {
        legacyBurger.classList.remove('open');
        legacyMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

// ═══════════════════════════════════════════════════════
// ═ HEADER SCROLL EFFECT
// ═══════════════════════════════════════════════════════
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════
// ═ SET ACTIVE NAV LINK
// ═══════════════════════════════════════════════════════
function initActiveNavLink() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link, .nav a, .header_menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ═══════════════════════════════════════════════════════
// ================================================================
// PWA INSTALL PROMPT HANDLING
// ================================================================
let deferredInstallPrompt = null;
let installHintShown = false;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  showInstallHint();
});

window.addEventListener('appinstalled', () => {
  localStorage.setItem('appInstalled', '1');
  const installHint = document.getElementById('installHint');
  if (installHint) {
    installHint.classList.add('hidden');
  }
  deferredInstallPrompt = null;
});

function isStandaloneMode() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function showInstallHint() {
  if (localStorage.getItem('appInstalled') === '1') return;
  if (installHintShown) return;
  if (isStandaloneMode()) return;

  installHintShown = true;
  const installHint = document.getElementById('installHint');
  if (installHint) {
    installHint.classList.remove('hidden');
  }
}

function startInstall() {
  const button = document.getElementById('installBtn');
  const progressRow = document.getElementById('installProgress');
  const bar = document.querySelector('#installProgress .bar');
  const status = document.getElementById('installStatus');

  if (button) button.disabled = true;

  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        status.innerText = 'Приложение установлено! 🎉';
        localStorage.setItem('appInstalled', '1');
        setTimeout(() => {
          document.getElementById('installHint').classList.add('hidden');
        }, 800);
      } else {
        status.innerText = 'Установка отменена';
        if (button) button.disabled = false;
      }
      deferredInstallPrompt = null;
    });
  } else {
    if (progressRow) progressRow.style.display = 'block';
    if (status) status.innerText = 'Установка...';

    let value = 0;
    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 12) + 7;
      if (value > 100) value = 100;
      if (bar) bar.style.width = value + '%';

      if (value >= 100) {
        clearInterval(timer);
        if (status) status.innerText = 'Установлено! 🎉';
        localStorage.setItem('appInstalled', '1');
        setTimeout(() => {
          const hint = document.getElementById('installHint');
          if (hint) hint.classList.add('hidden');
        }, 800);
      }
    }, 350);
  }
}

function initPWABanner() {
  showInstallHint();
}

// ═══════════════════════════════════════════════════════
// ═ OFFLINE DETECTION
// ═══════════════════════════════════════════════════════
function initOfflineDetection() {
  const offlineBar = document.getElementById('offlineBar');

  if (!offlineBar) return;

  function updateOnlineStatus() {
    if (navigator.onLine) {
      offlineBar.classList.remove('show');
    } else {
      offlineBar.classList.add('show');
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  // Проверить начальный статус
  updateOnlineStatus();
}

// ═══════════════════════════════════════════════════════
// ═ FORM SUBMISSION
// ═══════════════════════════════════════════════════════
function initFormSubmission() {
  const form = document.getElementById('quickContactForm');
  const telegramBtn = document.getElementById('telegramBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      sendToWhatsApp();
    });

    if (telegramBtn) {
      telegramBtn.addEventListener('click', () => {
        sendToTelegram();
      });
    }
  }

  initLegacyContactForm();
}

function initLegacyContactForm() {
  const legacyForm = document.getElementById('contactForm');
  if (!legacyForm) return;

  legacyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✓ Заявка отправлена — мы свяжемся с вами');
    legacyForm.reset();
  });
}

function getFormData() {
  const form = document.getElementById('quickContactForm');
  const name = form.querySelector('input[name="name"]').value;
  const phone = form.querySelector('input[name="phone"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  return { name, phone, message };
}

function sendToWhatsApp() {
  const { name, phone, message } = getFormData();
  
  const text = `Заявка от сайта StudioPro\n\n👤 Имя: ${name}\n📱 Контакт: ${phone}\n💬 Сообщение: ${message}`;
  const encodedText = encodeURIComponent(text);
  const whatsappLink = `https://wa.me/${CONFIG.whatsapp}?text=${encodedText}`;

  window.open(whatsappLink, '_blank');
  showToast('✓ Отправляем вас в WhatsApp...');
  
  // Очистить форму
  document.getElementById('quickContactForm').reset();
}

function sendToTelegram() {
  const { name, phone, message } = getFormData();
  
  const text = `Заявка от сайта StudioPro\n\n👤 Имя: ${name}\n📱 Контакт: ${phone}\n💬 Сообщение: ${message}`;
  const encodedText = encodeURIComponent(text);
  const telegramLink = `https://t.me/${CONFIG.telegram}?text=${encodedText}`;

  window.open(telegramLink, '_blank');
  showToast('✓ Отправляем вас в Telegram...');
  
  // Очистить форму
  document.getElementById('quickContactForm').reset();
}

// ═══════════════════════════════════════════════════════
// ═ TOAST NOTIFICATION
// ═══════════════════════════════════════════════════════
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Показать тост
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Удалить тост
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// Добавляем стили для toast
const toastStyles = `
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: linear-gradient(135deg, #6366f1, #ec4899);
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  z-index: 2000;
  opacity: 0;
  transition: all 0.3s ease-out;
  pointer-events: none;
  white-space: nowrap;
  font-size: 0.95rem;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);

// ═══════════════════════════════════════════════════════
// ═ SERVICE WORKER REGISTRATION
// ═══════════════════════════════════════════════════════
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.log('Service Worker registration failed:', err);
    });
  }
}

// ═══════════════════════════════════════════════════════
// ═ INITIALIZATION
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initActiveNavLink();
  initPWABanner();
  initOfflineDetection();
  initFormSubmission();
  initServiceWorker();
  
  // Smooth scroll для якорей
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// ═══════════════════════════════════════════════════════
// ═ DARK MODE SUPPORT (Optional)
// ═══════════════════════════════════════════════════════
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Сайт будет автоматически адаптироваться к светлой теме
}
