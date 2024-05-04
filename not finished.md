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

# フッター
aタグじゃなくてbottunでする

# プロフィール画面
フォントもっとかっこよく

#タイトル、サムネ追加css
.title {
  /* width: 70%;
    margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  margin-top: 50px;
  justify-content: center; /* 水平方向に中央揃え */
}

input[type="title"] {
  width: 80%;
  padding: 10px;
  margin: 30px 0;
  margin-right: 20px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.samune {
  /* background-color: #ffffff;
  margin-bottom: 100px; */

  display: flex; /* フレックスコンテナを設定 */
  align-items: center; /* 中央揃え */
  background-color: #ffffff;
  margin-bottom: 100px;
  position: relative; /* ボタンの絶対位置の基準点 */
}

.thumbnail-container {
  width: 100%;
  height: 200px;
}
.samune-pic {
  width: 100%;
  height: 200px;
  max-width: 100%;
  max-height: 100%;
  margin-top: 20px;
}

.play-button-samune {
  position: absolute;
  right: 20px;
  top: 65%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
}

/* 必要に応じて追加のスタイリング */

.samune.pic img {
  width: 100%;
  height: auto;
  overflow: hidden;
  width: 372px;
  height: 250px;
  margin-top: 0px;
}