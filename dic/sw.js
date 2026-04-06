self.addEventListener('install', (event) => {
  console.log('Service Worker установлен');
});

self.addEventListener('fetch', (event) => {
  // можно добавить кэширование
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  document.getElementById('installBtn').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', () => {
  deferredPrompt.prompt();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
const dictations = [
  "Привет как дела",
  "Сегодня хорошая погода",
  "Я изучаю программирование"
];
localStorage.setItem("best", errors);

-- Диктанты
function next(){
  current++;

  if(current >= data.length){
    current = 0; // или можно сделать "конец"
  }

  answers = [];
  document.getElementById('result').innerHTML = '';
  load();
}
function showAnswer(){
  const item = data[current];

  item.gaps.forEach((g,i)=>{
    const gap = document.querySelector(`[data-gap='${i}']`);
    gap.innerText = g.correct;

    // подсветка
    gap.style.color = "#16a34a"; // зелёный
  });

  document.getElementById('result').innerHTML = "Правильный ответ показан ✅";
}