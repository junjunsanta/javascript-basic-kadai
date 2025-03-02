//btn,text idを持つHTML要素を取得し、定数に代入
const btn = document.getElementById("btn");
const text = document.getElementById("text");

//クリックされたときにイベント処理を実行
btn.addEventListener("click",() => {
  setTimeout (() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});

