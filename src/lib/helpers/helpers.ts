export const emailLink = "kaitlynbuenphotography@gmail.com";
export const facebookLink = "https://www.facebook.com/profile.php?id=61582624177580";
export const messengerLink = "https://www.messenger.com/t/61582624177580";
export const instagramLink = "https://www.instagram.com/kaitlynbuenphotography";

export function shuffle<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}