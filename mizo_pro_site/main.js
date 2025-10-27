// Main JS: packages selection, addons and price calc + modal
document.addEventListener('DOMContentLoaded', ()=>{
  const pkgs = Array.from(document.querySelectorAll('.pkg'));
  const addons = Array.from(document.querySelectorAll('.addon input[type="checkbox"]'));
  const totalEl = document.getElementById('totalAmount');
  const whatsappLink = document.getElementById('whatsappLink');
  const btnPay = document.getElementById('btnPay');
  let activePkg = pkgs[0];
  function setActive(pkgEl){
    pkgs.forEach(p=>p.classList.remove('active'));
    pkgEl.classList.add('active');
    activePkg = pkgEl;
    update();
  }
  pkgs.forEach(p=>p.addEventListener('click', ()=> setActive(p)));
  function update(){
    const base = Number(activePkg.dataset.price||0);
    let addonsSum = 0;
    addons.forEach(a=>{ if(a.checked) addonsSum+=Number(a.dataset.price||0)});
    const total = base + addonsSum;
    // animate number
    animateNumber(totalEl, Number(totalEl.textContent||0), total, 400);
    // update whatsapp
    const name = document.getElementById('client_name').value||'Клиент';
    const phone = document.getElementById('client_phone').value||'+992000000000';
    const msg = encodeURIComponent(`Заказ: ${activePkg.dataset.id}, Сумма: ${total}$. Имя: ${name}, Тел: ${phone}`);
    whatsappLink.href = 'https://wa.me/992000000000?text='+msg;
  }
  function animateNumber(el, from, to, ms){
    const diff = to - from;
    const start = performance.now();
    requestAnimationFrame(function step(now){
      const t = Math.min(1,(now-start)/ms);
      const cur = Math.round(from + diff * t);
      el.textContent = cur;
      if(t<1) requestAnimationFrame(step);
    });
  }
  addons.forEach(a=>a.addEventListener('change', update));
  document.getElementById('client_name').addEventListener('input', update);
  document.getElementById('client_phone').addEventListener('input', update);
  // set initial
  setActive(pkgs[0]);
  // handle pay (simulate)
  btnPay.addEventListener('click', ()=>{
    const name = document.getElementById('client_name').value;
    const phone = document.getElementById('client_phone').value;
    // basic validation
    if(!name || !phone){ alert('Пожалуйста, укажите имя и телефон'); return; }
    // show modal success
    document.getElementById('modalSuccess').style.display='flex';
    document.getElementById('modalClose').addEventListener('click', ()=> document.getElementById('modalSuccess').style.display='none');
    // in real: send to server or integrate Stripe
  });
  // contact form send
  const contactForm = document.getElementById('contactForm');
  if(contactForm) contactForm.addEventListener('submit', (e)=>{ e.preventDefault(); alert('Заявка отправлена — менеджер свяжется'); contactForm.reset() });
});