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