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
    imageURL: "/images/main-carousel/IMG_9998.webp",
    price: 75,
    details: [
      "25+ edited photos",
      "1 hour shoot",
      "Shot at pre-selected locations",
    ]
  },
  {
    name: "Couples",
    imageURL: "/images/main-carousel/IMG_9509.webp",
    price: 50,
    details: [
      "20+ edited photos",
      "30 minute shoot",
      "Shot at pre-selected locations",
    ]
  },
  {
    name: "Newborns",
    imageURL: "/images/main-carousel/IMG_0206.webp",
    price: 50,
    details: [
      "30+ edited photos",
      "2 hour shoot",
      "Shot in our studio",
    ]
  },
];

export const packageAdditionsData = {
  additions: [
    { price: 40, detail: "Add 10 edited photos" },
  ] as AdditionData[],
  fees: [
    { price: 20, detail: "Travel fee" },
  ] as AdditionData[]
}