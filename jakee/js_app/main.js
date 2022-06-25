// import "css/style.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  // alert("追加ボタンが押されました");
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());