type PackageData = {
  name: string;
  imageURL: string;
  price: number;
  details: string[];
}

type AdditionData = {
  minPrice?: number
  price: number
  detail: string;
}

export const packageData: PackageData[] = [
  {
    name: "Family",
    imageURL: "/images/main-carousel/IMG_0005.webp",
    price: 75,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
      "Shot at pre-selected locations, contact for more information",
    ]
  },
  {
    name: "Couples",
    imageURL: "/images/main-carousel/IMG_9509.webp",
    price: 50,
    details: [
      "10-15+ edited photos",
      "45 minute photoshoot",
      "Shot at pre-selected locations, contact for more information",
    ]
  },
  {
    name: "Children",
    imageURL: "/images/main-carousel/IMG_9719.webp",
    price: 50,
    details: [
      "10-15+ edited photos",
      "45 minute photoshoot",
      "Shot at pre-selected locations, contact for more information",
    ]
  },
  {
    name: "Seniors",
    imageURL: "/images/main-carousel/IMG_9346.webp",
    price: 75,
    details: [
      "20-25+ edited photos",
      "1 hour photoshoot",
      "1 outfit change",
      "Shot at pre-selected locations, contact for more information",
    ]
  },
];

export const packageAdditionsData = {
  additions: [
    { price: 25, detail: "Add 10 edited photos" },
  ] as AdditionData[],
  fees: [
    { price: 20, detail: "Travel fee" },
    { price: 15, detail: "Non-refundable deposit that goes towards the full package price to hold your booking." },
  ] as AdditionData[]
}