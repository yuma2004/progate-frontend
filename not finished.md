# 直すとこ
top.html imgの設定

下まで行ったらもう１０っ曲読み込み
参考
export async function getMusic(limit = 10, startAfter) {
  console.log("getMusic");
  const result = [];
  for (const i = 0; i < limit; i++) {
    result.push(getInvolvedMusic());
  }
  return result;
}

# html,css細かい変更点.

全体
ヘッダー、フッダーの割合を合わせる。ボタンはある程度大きいほうが押しやすい

プロフィール設定画面
担当パート選択複数可能にする

top画面
サムネ、タイトルを取得してくるからhtmlを変更する
