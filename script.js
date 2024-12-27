const text = document.querySelector("#input_text");
const divver = document.querySelector("#divver");
const tennou = document.querySelector(".tennou");
const meiji = document.querySelector(".meiji")
const ichigaya = document.querySelector(".ichigaya");
const back = document.querySelector(".back");
const form = document.querySelector("form");

function show(taishou) {
  taishou.classList.add("show");
  taishou.classList.remove("none");
}

function none(taishou) {
  taishou.classList.add("none");
  taishou.classList.remove("show");
}

function gettext(event) {
  event.preventDefault(); // フォームのデフォルト動作（送信）を防ぐ

  const textValue = text.value.trim(); // 入力値を取得して前後の空白を削除

  // 入力されたテキストをコンソールに表示して確認
  console.log("入力されたキーワード: ", textValue);

  // クリップボードにコピー
  navigator.clipboard.writeText(textValue).catch(err => console.error("クリップボードにコピーできませんでした: ", err));

  // 「天皇」キーワードに対する処理
  if (textValue === "天皇") {
    console.log("天皇が選ばれました");
    show(back);
    show(tennou);
    none(form);
    // 「市ヶ谷」または「市谷」キーワードに対する処理
  } else if (textValue === "市ヶ谷" || textValue === "市谷") {
    console.log("市ヶ谷が選ばれました");
    show(back);
    show(ichigaya);
    none(form);

    // 入力が一致しない場合のエラーメッセージ
  } else if (textValue === "明治神宮外苑いちょう並木") {
    show(meiji);
    show(back);
    none(form)
  }
  
  
  else {
    console.log("キーワードが違います");
    divver.textContent = "キーワードが違います";
    text.value = ""; // 入 力欄をクリア
  }
}

function backform() {
  // 入力画面に戻る
  none(tennou);
  none(ichigaya);
  none(meiji)
  none(back);
  show(form);

  text.value = ""; // 入力欄をクリア
  console.log("入力画面に戻ります");
}

// フォーム全体にsubmitイベントを追加
form.addEventListener("submit", gettext);

// 戻るボタンにクリックイベントを追加
back.addEventListener("click", backform);
