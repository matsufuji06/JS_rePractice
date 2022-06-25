// import "css/style.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成し、classNameでクラス名を付与
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成し、innerTextでテキストを付与
  const li = document.createElement("li");
  li.innerText = inputText;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了"


  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除"
  console.log(deleteButton);



  // divタグの子要素として、liタグを設定とボタン２つを生成
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());