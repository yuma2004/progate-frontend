export function onAuthStateChanged(onAuthenticated, onNotAuthenticated) {
  console.log("on auth state changed");
  onAuthenticated();
}

/**
 * ログインページにリダイレクトする
 */
export function redirectToLoginPage() {
  console.log("redirect to login page");
  window.location.href = "./";
}

export async function signOut() {
  console.log("sign out");
}

export function registerToken() {
  console.log("registor token");
}
