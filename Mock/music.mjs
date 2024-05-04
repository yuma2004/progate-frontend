import { db, auth, storage } from "./initialize.mjs";

function getMusicRef() {
  console.log("get music ref");
  return "";
}

/**
 * この関数が呼ばれた直後と、楽曲割り当て状態の更新が行われた際に、コールバックを呼び出す
 * @see {@link https://firebase.google.com/docs/firestore/query-data/listen?hl=ja}
 * @param {*} onSnapshotCallback
 * @returns
 */

let onSnapshotCallback_ = null;

export function updateDispatchUI(onSnapshotCallback) {
  onSnapshotCallback_ = onSnapshotCallback;
  onSnapshotCallback_({
    data: function () {
      return "dispatched";
      //割り当てられていない場合のテストをしたいとき
      //return null
    },
  });
}

/**
 * 楽曲をアップロードする
 * @param {File} musicFile 担当パートの音楽
 * @param {string} [name] 楽曲の名前
 * @param {File} [thumbnail] サムネイル
 * @throws アップロードが失敗した場合エラー
 */
export async function uploadMusic(musicFile, name, thumbnail) {
  console.log("upload music");
}

/**
 * 楽曲のダウンロード用URLを取得する
 * @param {Array<string>} authorIds 作成者の配列 インデックス0:ドラム,1:ベース,2:ギター,3:ボーカル
 * @param {Array<string>} refs 楽曲の参照の配列 インデックス0:ドラム,1:ベース,2:ギター,3:ボーカル
 * @returns {Array<URL>} ダウンロード用URLの配列
 */
export async function getMusicURLs(authorIDs, refs) {
  console.log("get music urls");
  return ["https://soundeffect-lab.info/sound/button/mp3/decision51.mp3"];
}

/**
 * 楽曲のサムネイル用URLを取得する
 * @param {string} ref サムネイルの参照
 * @returns {URL} ダウンロード用URL
 */
export async function getThumbnailURL(ref) {
  console.log("get thumbnail");
  return "https://firebasestorage.googleapis.com/v0/b/melody-chain.appspot.com/o/users%2FxRMrqZxkJ6Z4NQDFjXOUkKWmYHe2%2Fprofile.png?alt=media&token=659075db-1fa1-4609-ba57-16b64b61e481";
}

/**
 * 関与した楽曲を取得する
 * @param {string} [uid=uid=ログインしているユーザーのuid] uid
 * @returns ドキュメントの配列 @see {@link https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja}
 */
export async function getInvolvedMusic() {
  console.log("get involved music");
  return {
    data: function () {
      return {
        authorIDs: ["id001", "id002", "id003", "id004"],
        musicRefs: ["ref001", "ref002", "ref003", "ref004"],
        thumbnailRef: "thumbnailRef",
        date: new Date(),
        name: "music name",
      };
    },
  };
}

/**
 * 全ての楽曲の中からいくつかを取得する
 * @param {number} [limit=10] 取得する数
 * @param {} [startAfter] 指定したドキュメントの後から取得を開始する
 * @returns スナップショット @see {@link https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja}
 * for(const value of returnValue)で楽曲のドキュメントが取れる
 */
export async function getMusic(limit = 10, startAfter) {
  console.log("getMusic");
  const result = [];
  for (const i = 0; i < limit; i++) {
    result.push(getInvolvedMusic());
  }
  return result;
}

/**
 * 楽曲はドキュメント@see {@link https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja}で帰ってくる
 * const data = doc.data()
 * としたとき、
 * data.authorIDs:関わった人のIDの配列
 * data.musicRefs:楽曲の参照の配列
 * data.thumbnailRef:サムネイル画像の参照
 * data.date:作成日時
 * data.name:楽曲の名前
 */
