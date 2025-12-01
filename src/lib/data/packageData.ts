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
    price: 75,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Family package listed on your site."
  },
  {
    name: "Couples",
    imageURL: "/images/full/gallery/IMG_0053.webp",
    price: 50,
    details: [
      "10-15+ edited photos",
      "45 minute photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Couples package listed on your site."
  },
  {
    name: "Children",
    imageURL: "/images/full/main-carousel/IMG_9719.webp",
    price: 50,
    details: [
      "10-15+ edited photos",
      "45 minute photoshoot",
    ],
    message: "Hello Kaitlyn! I am interested in the Children package listed on your site."
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