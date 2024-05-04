import { onAuthStateChanged } from "./auth.mjs";
import { getProfile, getProfileImageUrl } from "./profile.mjs";

function setup() {
    onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const profileData = await getProfile(user.uid);
                const profileUrl = await getProfileImageUrl(user.uid);

                document.getElementById('header-image').src = profileUrl;
                document.getElementById('profile-image').src = profileUrl;
                document.getElementById('nickname-value').textContent = profileData.name;
                document.getElementById('favorite-value').textContent = profileData.favorite;
                document.getElementById('part-value').textContent = profileData.part;
                
            } catch (error) {
                console.error("Error fetching profile data: ", error);
            }
        } else {
            // Handle not authenticated state
        }
    }, () => {
        console.error("User is not logged in");
    });
}

setup();
