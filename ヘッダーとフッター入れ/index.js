import { getProfileImageUrl } from "./path_to_your_script.mjs";  // パスは適宜修正

document.addEventListener("DOMContentLoaded", function() {
  updateProfileImage();
});

async function updateProfileImage() {
  try {
    const imageUrl = await getProfileImageUrl(); // 現在ログインしているユーザーのUIDを自動で使用
    const imageElement = document.getElementById("footer-icons").querySelector("img");
    imageElement.src = imageUrl;
    imageElement.alt = "User Profile Image"; // 代替テキストも適宜設定してください
  } catch (error) {
    console.error("Failed to load user profile image:", error);
    // エラー発生時の処理をここに記述できます
  }
}
