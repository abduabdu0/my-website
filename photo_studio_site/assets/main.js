// assets/main.js - simple interactivity
document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'Клиент';
      // Here we simulate sending — replace with real endpoint later.
      alert('Спасибо, ' + name + '! Ваша заявка отправлена (симуляция).\nИспользуйте Formspree или сервер для реальных отправок.');
      form.reset();
    })
  }
});
