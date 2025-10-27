
/* script.js - small interactive behaviors */
document.getElementById('year').textContent = new Date().getFullYear();

// Play preview video on hover
const preview = document.getElementById('sample-preview');
if(preview){
  preview.addEventListener('mouseenter', ()=> preview.play());
  preview.addEventListener('mouseleave', ()=> { preview.pause(); preview.currentTime = 0; });
}

// Simple contact form handler (demo)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена (демо). Мы свяжемся с вами.');
    form.reset();
  });
}

document.getElementById('callBtn').addEventListener('click', ()=> {
  window.location.href = 'tel:+79000000000';
});
