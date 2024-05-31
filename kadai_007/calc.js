//変数numに1以上の正の数を代入する
let num = 15;

 // 変数numの値を出力する（確認用）
 console.log(num);

 //変数numが3と5の倍数の場合、「3と5の倍数です」を出力
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

//変数numが3の倍数の場合、「3の倍数です」と出力
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

 //変数numが5の倍数の場合、「5の倍数です」と出力
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

 //変数numが3と5の倍数以外の場合、変数numを出力
 else {
  console.log(num);
 }
