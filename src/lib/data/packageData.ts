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
];

export const packageAdditionsData = {
  additions: [
    { price: 40, detail: "Add 10 edited photos" },
  ] as AdditionData[],
  fees: [
    { price: 40, detail: "Travel fee" },
    { price: 50, detail: "Extra shooting location" },
    { minPrice: 100, price: 200, detail: "Studio booking" },
  ] as AdditionData[]
}