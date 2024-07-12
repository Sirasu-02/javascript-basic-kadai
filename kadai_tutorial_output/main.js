// 変数の初期化
let untyped = '';  //提示される文字、未入力文字列を入れる変数
let typed = '';    //入力済み文字列を入れる変数
let score = 0;

// 必要なHTMLのオブジェクトの取得(どこに表示させるか指定)
const untypedfield = document.getElementById('untyped');   //未入力文字列を表示するため
const typedfield = document.getElementById('typed');       //入力済み文字列を表示するため
const wrap = document.getElementById('warp')
const start = document.getElementById('start')      //スタートボタンのオブジェクト
const count = document.getElementById('count');  //カウントのオブジェクト

// 複数のテキストを格納する配列(画面に表示する文字列を入れる変数を準備している)
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];



// ランダムなテキストを表示
const createText = () => {

  // 正タイプした文字列をクリア
  typed = '';                         //『''』=　クリア
  typedfield.textContent = typed;

  // 配列のインデックス数からランダムな数値を生成している
  let random = Math.floor(Math.random() * textLists.length);
  
  
  untyped = textLists[random];       //untypedに代入している_random(配列textListsのインデックス数のランダムな数)を

  untypedfield.textContent = untyped;  //画面に表示されるように設定している(HTML要素を含むuntypedfieldのtextContentプロパティに代入する)
};




 
// キー入力の判定
const keyPress = e => {

   // 誤タイプの場合
   if(e.key !== untyped.substring(0, 1)) {   //不一致の場合・・・
    wrap.classList.add('mistyped');  //CSSのmistypedをオブジェクト(warp)に追加_バックグラウンドが赤に

    // 100ms後に背景色を元に戻す
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    },100);

    return;   //処理を終了する
  }

  // 正タイプの場合

  // スコアのインクリメント
  score++;
  wrap.classList.remove('mistyped');//誤タイプ→正タイプ時に色に戻す
  typed += untyped.substring(0,1);  //変数untypedの先頭文字を取得し、変数typedの末尾に追加する
  untyped = untyped.substring(1);   //変数untypedの先頭文字を削除する

  typedfield.textContent = typed;    //定数typedfieldのtextContentプロパティに変数typedを代入
  untypedfield.textContent = untyped;  //定数untypedfieldのtextContentプロパティに変数untypedを代入

  // テキストがなくなったら新しいテキストを表示
  if(untyped === '') {       //もし入力されてuntypedの中にテキストがない場合．．．
    createText();            //新たに文字データを出力
  }
};
 
// タイピングスキルのランクを判定
const rankCheck = score => {

   // テキストを格納する変数を作る
   let text = '';

   // スコアに応じて異なるメッセージを変数textに格納する
   if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}です。`;
   }

   else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}です。`;
   }

   else if(score < 300) {
    text = `あなたのランクはAです。\nSランクまであと${300 - score}です。`;
   }

   else if(score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます!`;
   }


  // 生成したメッセージと一緒に文字列を返す
  return `${score}文字打てました!\n${text}\n[OK] リトライ / [キャンセル] 終了`;

};
 
// ゲームを終了
const gameOver = id => {
  clearInterval(id);

  const result = confirm(rankCheck(score));

  // OKボタンをクリックされたらリロードする
  if(result == true) {
    window.location.reload();
  }
};
 
// カウントダウンタイマー
const timer = () => {

  // タイマー部分のHTMLのオブジェクト（p要素）を取得する
  let time = count.textContent;

  const id = setInterval(() => {

      // カウントダウンする
      time--;
      count.textContent = time;

      // カウントが0になったらタイマーを停止する
      if(time <= 0) {
        gameOver(id);
      }
  },1000);
};


// キーボードのイベント処理(keypressイベントで関数keyPress_キー入力の判定を実行する)
document.addEventListener('keypress',keyPress); 


// ゲームスタート時の処理
start.addEventListener('click', () => {

   // カウントダウンタイマーを開始する
  timer();

   // ランダムなテキストを表示する
  createText();

  // 「スタート」ボタンを非表示にする
  start.style.display = 'none';

  // キーボードのイベント処理(関数keyPressを処理)
  document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = 'スタートボタンで開始';

