import { getProfileImageUrl } from "./initialize.mjs";  // 適切なパスに修正

// ユーザーのプロフィール画像URLを取得してフッターに表示する
async function displayFooterIcon(uid) {
    try {
        const imageUrl = await getProfileImageUrl(uid);  // ユーザーIDを指定
        const iconsContainer = document.getElementById('footer-icons');
        const img = document.createElement('img');
        img.src = imageUrl;
        iconsContainer.appendChild(img);
    } catch (error) {
        console.error('Failed to load user icon:', error);
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    displayFooterIcon('user_uid_here');  // 実際のユーザーUIDを渡す
});
