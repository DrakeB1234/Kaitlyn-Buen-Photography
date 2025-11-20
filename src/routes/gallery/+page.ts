import { mainCarouselImages } from "$lib/data/imageData";
import { shuffle } from "$lib/helpers/helpers";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const shuffledImages = shuffle(mainCarouselImages);

  return {
    images: shuffledImages
  };
};