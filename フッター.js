import { onAuthStateChanged, redirectToLoginPage } from "./auth.mjs";
import { auth } from "./initialize.mjs";
import { signOut } from "firebase/auth";

function setup() {
  const button1 = document.getElementById("toppage");
  button1.addEventListener("click", () => {
    window.location.href = "./mypage.html";
    // 遷移ページを変える
  });

  const button2 = document.getElementById("Music-Detail-Page");
  button1.addEventListener("click", () => {
    window.location.href = "./mypage.html";
    // 遷移ページを変える
  });

  const button3 = document.getElementById("upload");
  button3.addEventListener("click", () => {
    window.location.href = "./upload.html";
  });

  const button4 = document.getElementById("mypage");
  button1.addEventListener("click", () => {
    window.location.href = "./mypage.html";
    // 遷移ページを変える
  });

  

  // ログアウト専用

  // const button5 = document.getElementById("Music-Detail-Page");
  // button2.addEventListener("click", async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });

}

window.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(user => {
    if (user) {
      updateFooterImage(user.uid);
    }
  });
});

async function updateFooterImage(uid) {
  try {
    const imageUrl = await getProfileImageUrl(uid);
    const footerImage = document.getElementById('footer-icon-img');
    if (footerImage && imageUrl) {
      footerImage.src = imageUrl;
    }
  } catch (error) {
    console.error('Failed to update footer image:', error);
  }
}

onAuthStateChanged(setup, redirectToLoginPage);