const content = '다채로운 나를 찾을 준비가 되셨나요?\n캐치미로 초대합니다!';

const text = document.getElementById('intro_text');
let index = 0;
let txt = '';

function typing() {
  if (index < content.length) {
    txt += content[index];
    text.innerText = txt;
    index++;
  }
}
setInterval(typing, 100);

let skipBtn = document.getElementById('button');
let upBtn = document.getElementById('up_button');
// go버튼 뿐 만아니라 다른 menu버튼에도 똑같이 부드러운 스크롤을 적용.

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
