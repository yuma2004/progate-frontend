
// 長方形をクリックした際の処理
document.getElementById('rectangle').addEventListener('click', function(event) {
  console.log("ok")
  // 円がクリックされた場合は、その処理のみ実行
  if (event.target.id === 'circle') return;

  // ファイル選択インプットを動的に作成
  let fileInputRectangle = document.createElement('input');
  fileInputRectangle.type = 'file';
  fileInputRectangle.style.display = 'none'; // インプットを非表示にする

  // ファイルが選択されたときのイベント
  fileInputRectangle.onchange = function(e) {
      let file = e.target.files[0];
      console.log("Rectangle selected file:", file.name);
  };

  // クリックイベントを発生させる
  fileInputRectangle.click();
});

// 円をクリックした際の処理
document.getElementById('circle').addEventListener('click', function() {
  // ファイル選択インプットを動的に作成
  let fileInputCircle = document.createElement('input');
  fileInputCircle.type = 'file';
  fileInputCircle.style.display = 'none'; // インプットを非表示にする

  // ファイルが選択されたときのイベント
  fileInputCircle.onchange = function(e) {
      let file = e.target.files[0];
      console.log("Circle selected file:", file.name);
  };

  // クリックイベントを発生させる
  fileInputCircle.click();
});

// import { onAuthStateChanged } from "./auth.mjs";
// import { getInvolvedMusic, getMusicURLs } from "./music.mjs";
// import {
//   updateProfileUI,
//   uploadProfile,
//   getProfileImageUrl,
// } from "./profile.mjs";

// const redirectHandler = () => (window.location.href = "http://localhost:3000");
// async function setup() {
//   //画像選択用UIにイベントリスナーを追加
//   const imageSelector = document.getElementById("image_selector");
//   const figureImage = document.getElementById("figure_image");
//   const figure = document.getElementById("figure");
//   imageSelector.addEventListener("change", (event) => {
//     //画像が選択されたことを表すプロパティ
//     imageSelector.changed = true;
//     const [file] = event.target.files;
//     if (file) {
//       figureImage.setAttribute("src", URL.createObjectURL(file));
//       figure.style.display = "block";
//     } else {
//       figure.style.display = "none";
//     }
//   });

//   try {
//     //プロフィール画像のURLを取得し、取得に成功したら表示する
//     const url = await getProfileImageUrl();
//     if (url) {
//       figureImage.setAttribute("src", url);
//       figure.style.display = "block";
//     } else {
//       figure.style.display = "none";
//     }
//   } catch (error) {
//     console.error("Failed to retrieve the profile image.");
//     console.log(error);
//   }

//   const name = document.getElementById("name");
//   const favorite = document.getElementById("favorite");
//   const part = document.getElementById("part_selector");
//   updateProfileUI((doc) => {
//     if (doc.data()) {
//       name.value = doc.data().name;
//       favorite.value = doc.data().favorite;
//       part.value = doc.data().part;
//     }
//   });
//   const button = document.getElementById("update");
//   button.addEventListener("click", () => {
//     const image = imageSelector.changed ? imageSelector.files[0] : null;
//     console.log(name.value);
//     uploadProfile(name.value, favorite.value, part.value, image);
//   });

//   //制作に携わった楽曲を取得
//   try {
//     const involvedMusic = await getInvolvedMusic();
//     involvedMusic.forEach((doc) => {
//       console.log(`${doc.data().name}`);
//       getMusicURLs(doc.data().authorIDs, doc.data().musicRefs)
//         .then((urls) => {
//           console.log(urls);
//         })
//         .catch((error) => {
//           console.error("There was an error while retrieving the music URLs.");
//           console.log(error);
//         });
//     });
//   } catch (error) {
//     console.error("There was an error while retrieving the involved musics.");
//     console.log(error);
//   }
// }
// $(function() {
//   $('.file__label input[type=file]').on('change', function () {
//       var file = $(this).prop('files')[0];
//       $('.file__none').text(file.name);
//   });
// });


// onAuthStateChanged(setup, redirectHandler);
