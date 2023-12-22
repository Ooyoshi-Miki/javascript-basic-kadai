// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");
// txstというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // txst要素を入替える
    document.getElementById("text").innerHTML = "ボタンをクリックしました"
});
