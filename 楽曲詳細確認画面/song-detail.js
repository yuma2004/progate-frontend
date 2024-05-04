import { uploadThumbnail, uploadMusic } from './js/music.mjs';

// サムネイル入力が変更されたときの処理
document.getElementById('thumbnail_input').addEventListener('change', function(event) {
    const [file] = event.target.files;
    if (file) {
        // FileReaderを使用してローカルでファイルを読み込む
        const reader = new FileReader();
        reader.onload = function(e) {
            // 読み込んだ画像をサムネイルとして表示
            document.getElementById('samune-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// フォームの送信処理
document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title_input').value;
    const fileInput = document.getElementById('thumbnail_input');
    const file = fileInput.files[0];

    if (file && title) {
        try {
            // サムネイルをFirebaseにアップロードし、そのURLを取得
            const imageUrl = await uploadThumbnail(file);
            // 楽曲もFirebaseにアップロード（ここで楽曲のファイルも同様にfileとして渡す場合）
            await uploadMusic(file, title, file);
            // アップロード後、サムネイルを更新
            document.getElementById('samune-image').src = imageUrl;
            alert('楽曲とサムネイルが正常にアップロードされました！');
        } catch (error) {
            console.error('楽曲とサムネイルのアップロードに失敗しました。', error);
            alert('アップロードに失敗しました。');
        }
    } else {
        alert('タイトルとサムネイルの両方を入力してください。');
    }
});

