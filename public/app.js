// welcome catchme
const content = '다채로운 나를 찾을 준비가 되셨나요?\n캐치미로 초대합니다!';

const text = document.getElementById('intro_text');
let index = 0;
let txt = '';

// typing animation
function typing() {
  if (index < content.length) {
    txt += content[index];
    text.innerText = txt;
    index++;
  }
}
setInterval(typing, 100);

// button smooth scroll animation
let skipBtn = document.getElementById('button');
let upBtn = document.getElementById('up_button');

skipBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  document
    .getElementById('window6')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
});

upBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  document
    .getElementById('window1')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
});
