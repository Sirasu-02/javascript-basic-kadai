// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn =document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const  parentElement =document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click',() => {

  // parentElementのテキストを変換する
  parentElement.textContent = 'ボタンをクリックしました';
});