// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");
// txstというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
    setTimeout(() => {
    console.log('document.getElementById("text") (非同期処理) ');
    // 2秒（2000ミリ秒）後t、xst要素を入替え表示する
    console.log(document.getElementById("text").innerHTML = "ボタンをクリックしました" );
    }, 2000);
});
