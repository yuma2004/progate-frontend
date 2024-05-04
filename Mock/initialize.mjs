export function isNotificationGranted() {
  return Notification.permission === "granted";
}

export function isNotificationAsked() {
  return Notification.permission !== "default";
}

export const db = null;
export const auth = null;
export const storage = null;

export const messaging = null;
