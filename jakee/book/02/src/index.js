const onClickAdd = () => {
  // テキストボックスの要素を取得
  const textEl = document.getElementById("add-text");

  // テキストボックスの値を取得
  const text = textEl.value;

  // テキストボックスの値を初期化
  textEl.value = "";

  // リスト内のliタグとdivタグ追加
  const li = document.createElement("li");
  const div = document.createElement("div");

  // リストの内容をテキストボックスの内容に設定
  const p = document.createElement("p");
  p.textContent = text;

  // リストの削除ボタンを生成
  const button = document.createElement("button");
  button.textContent = "削除";

  // リストの削除ボタンを押した時の処理
  button.addEventListener("click", () => {
    // 削除対象のliを取得
    // closestは親要素に一致する文字列を探すメソッド
    const deleteTarget = button.closest("li");

    // ul内から上で特定した行を削除
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // リスト内に上記のliタグを設定
  document.getElementById("memo-list").appendChild(li);

  // リスト内のliタグ配下にdivタグを生成
  li.appendChild(div);
  
  // リスト内にpタグとbuttonタグを設定 
  div.appendChild(p);
  div.appendChild(button);

};

// テキストボックスを押した時の処理
document.getElementById("add-button").addEventListener("click", () => onClickAdd());