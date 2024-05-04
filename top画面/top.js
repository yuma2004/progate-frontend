import { getProfileImageUrl } from "../Mock/profile.mjs";
import { auth } from "../Mock/initialize.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  const imgElement = document.getElementById("art").querySelector("img"); // フッターのimg要素を取得
  try {
    const imageUrl = await getProfileImageUrl(auth.currentUser.uid); // プロフィール画像のURLを取得
    imgElement.src = imageUrl; // imgタグのsrc属性を更新
  } catch (error) {
    console.error("Failed to load user profile image:", error);
  }
});

