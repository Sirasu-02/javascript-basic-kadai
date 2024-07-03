// textというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');


// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click',() => {

  // 二秒後にテキストを変換する関数
  setTimeout(() => {
  // イベントの記述
  parentList.textContent = 'ボタンをクリックしました';
  }, 2000);

});