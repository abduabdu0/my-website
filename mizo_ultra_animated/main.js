
// Enhanced JS: reveal on scroll, package selection, animated totals, and modal
document.addEventListener('DOMContentLoaded', function(){
  // Reveal on scroll using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal, .reveal-section');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r=>io.observe(r));

  // animated counters in hero
  function animateCounter(el){
    const to = Number(el.dataset.to || 0);
    const from = Number(el.dataset.from || 0);
    const ms = 800;
    const start = performance.now();
    requestAnimationFrame(function tick(now){
      const t = Math.min(1,(now-start)/ms);
      const val = Math.round(from + (to-from)*t);
      el.textContent = val;
      if(t < 1) requestAnimationFrame(tick);
    });
  }
  document.querySelectorAll('.count').forEach(el => {
    // animate when visible
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en => { if(en.isIntersecting){ animateCounter(el); obs.disconnect(); } });
    }, {threshold:0.5});
    obs.observe(el);
  });

  // package selection and price calc
  const pkgs = Array.from(document.querySelectorAll('.pkg'));
  const addonInputs = Array.from(document.querySelectorAll('.addon input[type="checkbox"]'));
  const totalEl = document.getElementById('totalAmount');
  const btnPay = document.getElementById('btnPay');
  const whatsappLink = document.getElementById('whatsappLink');
  let active = pkgs[0];

  function setActive(pkg){
    pkgs.forEach(p=>p.classList.remove('active'));
    pkg.classList.add('active');
    active = pkg;
    updateTotal();
  }
  pkgs.forEach(p=>p.addEventListener('click', ()=> setActive(p)));

  function updateTotal(){
    const base = Number(active.dataset.price || 0);
    const addons = addonInputs.reduce((s, i)=> s + (i.checked ? Number(i.dataset.price || 0) : 0), 0);
    const total = base + addons;
    animateNumber(totalEl, Number(totalEl.textContent || 0), total, 450);
    // update whatsapp message
    const name = document.getElementById('client_name').value || 'Клиент';
    const phone = document.getElementById('client_phone').value || '+992000000000';
    const msg = encodeURIComponent(`Заказ: ${active.dataset.id}, Сумма: ${total}$. Имя: ${name}, Тел: ${phone}`);
    whatsappLink.href = 'https://wa.me/992000000000?text=' + msg;
  }

  function animateNumber(el, from, to, duration){
    const start = performance.now();
    requestAnimationFrame(function tick(now){
      const t = Math.min(1, (now - start) / duration);
      const cur = Math.round(from + (to - from) * t);
      el.textContent = cur;
      if(t < 1) requestAnimationFrame(tick);
    });
  }

  addonInputs.forEach(i => i.addEventListener('change', updateTotal));
  document.getElementById('client_name').addEventListener('input', updateTotal);
  document.getElementById('client_phone').addEventListener('input', updateTotal);

  // set initial active and total
  setActive(pkgs[0]);

  // handle pay (simulate) -> show modal
  btnPay.addEventListener('click', ()=>{
    const name = document.getElementById('client_name').value.trim();
    const phone = document.getElementById('client_phone').value.trim();
    if(!name || !phone){ alert('Пожалуйста, укажите имя и телефон'); return; }
    document.getElementById('modalSuccess').style.display = 'flex';
    document.getElementById('modalClose').addEventListener('click', ()=> document.getElementById('modalSuccess').style.display='none');
    // Here you would send data to server or integrate payments
  });

  // contact form handling
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Заявка отправлена — менеджер скоро свяжется');
      contactForm.reset();
    });
  }

  // mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  mobileBtn.addEventListener('click', ()=>{
    const nav = document.querySelector('.main-nav');
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

});
