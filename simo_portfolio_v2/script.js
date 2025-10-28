// script.js v2 - site-wide behaviors
try{ document.getElementById('year').textContent = new Date().getFullYear(); }catch(e){}
// Background rotator (for index)
const rotator = document.getElementById('bg-rotator');
if(rotator){
  const urls = ["https://cdn.coverr.co/videos/coverr-wedding-dancing-1575?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-sunset-beach-1547?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-city-night-1508?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-cinematic-couple-1599?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-cinematic-waves-1608?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-urban-walk-1620?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-forest-trail-1615?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-slow-motion-flowers-1569?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-drone-coast-1584?token=eyJhbGciOiJIUzI1NiJ9", "https://cdn.coverr.co/videos/coverr-couple-lake-1632?token=eyJhbGciOiJIUzI1NiJ9"];
  let i = 0;
  function playNext(){ rotator.src = urls[i]; rotator.play().catch(()=>{}); i = (i+1) % urls.length; }
  rotator.addEventListener('ended', playNext);
  setTimeout(playNext, 200);
}
// Portfolio lightbox (simple)
document.querySelectorAll('.work img').forEach(img=>{
  img.addEventListener('click', ()=>{
    const src = img.src;
    const light = document.createElement('div');
    light.style.position='fixed'; light.style.inset=0; light.style.background='rgba(0,0,0,0.85)'; light.style.display='flex'; light.style.alignItems='center'; light.style.justifyContent='center'; light.style.zIndex=9999;
    const big = document.createElement('img'); big.src=src; big.style.maxWidth='90%'; big.style.maxHeight='90%'; big.style.borderRadius='8px';
    light.appendChild(big);
    light.addEventListener('click', ()=> document.body.removeChild(light));
    document.body.appendChild(light);
  });
});
// Contact form demo handler
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена (демо). Мы свяжемся с вами.');
    form.reset();
  });
}
// Call button
const callBtn = document.getElementById('callBtn');
if(callBtn){
  callBtn.addEventListener('click', ()=> window.location.href='tel:+79000000000');
}
