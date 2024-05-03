import { auth, db, storage } from "./initialize.mjs";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('.profile-settings form');
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  const iconButton = document.querySelector('.icon-button');
  iconButton.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', async function() {
    if (this.files.length > 0) {
      const file = this.files[0];
      await uploadProfileImage(file);
      setProfileImage(file);
    }
  });
55
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nickname = form.nickname.value;
    const oshi = form.oshi.value;
    const part = Array.from(form.part.selectedOptions).map(option => option.value);
    await uploadProfile(nickname, oshi, part, fileInput.files[0]);
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

async function setProfileImage(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const iconButton = document.querySelector('.icon-button');
    iconButton.style.backgroundImage = `url(${e.target.result})`;
    iconButton.innerHTML = ''; // Remove the plus icon
  };
  reader.readAsDataURL(file);
}

async function uploadProfile(nickname, oshi, part, image) {
  try {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      nickname,
      oshi,
      part
    }, { merge: true });
    console.log("Profile updated successfully");
  } catch (error) {
    console.error("Failed to update profile", error);
  }
}

async function loadProfile() {
  const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
  if (docSnap.exists()) {
    const data = docSnap.data();
    document.querySelector('[name="nickname"]').value = data.nickname || '';
    document.querySelector('[name="oshi"]').value = data.oshi || '';
    document.querySelector('[name="part"]').value = data.part || [];
    if (data.image) {
      setProfileImage(data.image);
    }
  } else {
    console.log("No profile data found");
  }
}


