type PackageData = {
  name: string;
  imageURL: string;
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
    imageURL: "/images/full/gallery/IMG_0279.webp",
    price: 100,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Family package listed on your site."
  },
  {
    name: "Couples",
    imageURL: "/images/full/gallery/IMG_0053.webp",
    price: 75,
    details: [
      "15-20+ edited photos",
      "45 minute photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Couples package listed on your site."
  },
  {
    name: "Seniors",
    imageURL: "/images/full/gallery/IMG_0897.webp",
    price: 75,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
      "1 outfit change",
    ],
    message: "Hello Kaitlyn! I am interested in the Seniors package listed on your site."
  },
  {
    name: "In Studio",
    imageURL: "/images/full/gallery/IMG_1216.webp",
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
  ] as AdditionData[],
  fees: [
    { price: 40, detail: "Studio 30 min booking" },
    { price: 20, detail: "Travel fee" },
    { price: 15, detail: "Non-refundable deposit that goes towards the full package price to hold your booking." },
  ] as AdditionData[]
}