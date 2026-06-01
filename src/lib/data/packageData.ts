import { packagesImages, type ImageData } from "./imageData";

type PackageData = {
  name: string;
  imageObj: ImageData;
  price: number;
  details: string[];
  message?: string;
}

type AdditionData = {
  minPrice?: number
  price: number
  detail: string;
}

export const packageData: PackageData[] = [
  {
    name: "Family",
    imageObj: packagesImages[1],
    price: 150,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Family package listed on your site."
  },
  {
    name: "Couples",
    imageObj: packagesImages[0],
    price: 75,
    details: [
      "20-25+ edited photos",
      "45 minute photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Couples package listed on your site."
  },
  {
    name: "Seniors",
    imageObj: packagesImages[2],
    price: 100,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
      "1 outfit change",
    ],
    message: "Hello Kaitlyn! I am interested in the Seniors package listed on your site."
  },
  {
    name: "Studio",
    imageObj: packagesImages[3],
    price: 130,
    details: [
      "20-25+ edited photos",
      "30 minute photoshoot",
      "$40 booking deposit",
    ],
    message: "Hello Kaitlyn! I am interested in the Studio package listed on your site."
  },
];

export const packageAdditionsData = {
  additions: [
    { price: 25, detail: "Add 10 edited photos" },
    { price: 30, detail: "Seamless Studio Backdrop" },
  ] as AdditionData[],
  fees: [
    { price: 40, detail: "Studio 30 min booking" },
    { price: 20, detail: "Travel fee" },
    { price: 15, detail: "Non-refundable deposit that goes towards the full package price to hold your booking." },
  ] as AdditionData[]
}