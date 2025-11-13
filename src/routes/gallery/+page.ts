import { mainCarouselImages } from "$lib/data/imageData";
import type { PageLoad } from "./$types";

function shuffle<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const load: PageLoad = async () => {
  const shuffledImages = shuffle(mainCarouselImages);

  return {
    images: shuffledImages
  };
};