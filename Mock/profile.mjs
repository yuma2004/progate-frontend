import { auth, db, storage } from "./initialize.mjs";

/**
 * プロフィール画像の参照を取得する
 * @param {string} [uid=ログインしているユーザーのuid] 対象のuid
 * @returns プロフィール画像の参照
 */
export function getProfileImageRef() {
  console.log("get profile image ref");
  return "profile image ref";
}

/**
 * プロフィールを取得する
 * @param {string}[uid=ログインしているユーザー] 対象のuid
 * @returns プロフィール returnValue.data().[name/favorite/part]でそれぞれの値を取得することができる
 */
export async function getProfile() {
  console.log("get profile");
  return {
    data: function () {
      return {
        name: "test name",
        favorite: "favorite music",
        part: "0",
      };
    },
  };
}

let uploadProfileCallback = null;

/**
 * プロフィールをアップロードする
 * @param {string} name 名前
 * @param {string} favorite 好きなバンド
 * @param {number} part パート(0:)
 * @param {File} [image] 画像
 * @returns アップロードが成功した場合true,そうでないならfalse
 */
export async function uploadProfile(name, favorite, part, image) {
  console.log("upload profile");
  uploadProfileCallback({
    data: function () {
      return {
        name: name,
        favorite: favorite,
        part: part,
      };
    },
  });
}

/**
 * この関数が呼ばれた直後と、ユーザープロフィールの更新が行われた際に、コールバックを呼び出す。
 * 何らかの理由でデータベースの書き込みが失敗した際に、失敗前の値をコールバックで取得することができる。
 * @see https://firebase.google.com/docs/firestore/query-data/listen?hl=ja
 * @param {} onSnapshotCallback
 * @param {string} [uid=ログインしているユーザーのuid] uid
 * @returns
 */
export function updateProfileUI(
  onSnapshotCallback,
) {
  console.log("update profile ui");
  uploadProfileCallback = onSnapshotCallback;
}

/**
 *
 * @param {string} [uid=ログインしているユーザーのuid] uid
 * @returns {URL} プロフィール画像のURL
 * @throws データが取得できなかった時エラー
 */
export async function getProfileImageUrl() {
  return "https://firebasestorage.googleapis.com/v0/b/melody-chain.appspot.com/o/users%2FxRMrqZxkJ6Z4NQDFjXOUkKWmYHe2%2Fprofile.png?alt=media&token=659075db-1fa1-4609-ba57-16b64b61e481";
}
