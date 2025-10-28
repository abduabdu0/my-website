// assets/main.js
document.addEventListener('DOMContentLoaded', ()=> {
  // IntersectionObserver for fade-in
  const opts = {threshold:0.12};
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, opts);
  document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));

  // Form submit to backend
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      try{
        const res = await fetch('/submit', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(payload)
        });
        const js = await res.json();
        if(js.ok){ alert('Спасибо! Ваша заявка принята.'); form.reset(); }
        else alert('Ошибка отправки: ' + js.error);
      }catch(err){
        alert('Ошибка сети: ' + err.message);
      }
    });
  }
});
