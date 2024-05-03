import { auth, db, storage } from "./initialize.mjs";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('.profile-settings form');
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  const fileButton = document.querySelector('.icon-button');
  fileButton.onclick = () => fileInput.click();  // ファイル選択をトリガー

  fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
      uploadProfileImage(this.files[0]);
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();  // フォームのデフォルト送信を阻止
    const nickname = form.nickname.value;
    const oshi = form.oshi.value;
    const part = Array.from(form.part.selectedOptions).map(option => option.value);
    uploadProfile(nickname, oshi, part, fileInput.files[0]);
  });

  loadProfile();
});

async function uploadProfileImage(imageFile) {
  try {
    await uploadBytes(getProfileImageRef(auth.currentUser.uid), imageFile);
    console.log("Image upload successful");
  } catch (error) {
    console.error("Failed to upload image", error);
  }
}

async function uploadProfile(nickname, oshi, part, image) {
  try {
    if (image) {
      await uploadProfileImage(image);
    }
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      nickname,
      oshi,
      part
    }, { merge: true });
    console.log("Profile updated successfully");
 
