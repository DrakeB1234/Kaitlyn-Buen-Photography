type PackageData = {
  name: string;
  price: number;
  details: string[];
  message?: string;
}

type AdditionData = {
  minPrice?: number
  price: number
  detail: string;
}

export const weddingPackageData: PackageData[] = [
  {
    name: "Package 1",
    price: 675,
    details: [
      "3 Hours of Coverage on Your Wedding Day",
      "Includes ceremony coverage, detail shots, wedding party, family, and couple portraits",
      "One 8x14 Print of your choice",
      "Professionally edited online gallery",
      "Photographer + Asistant",
    ],
    message: "Hello Kaitlyn! I am interested in the Family package listed on your site."
  },
  {
    name: "Package 2",
    price: 975,
    details: [
      "6 Hours of Coverage on Your Wedding Day",
      "Includes ceremony coverage, detail shots, wedding party, family, and couple portraits",
      "Wedding morning preparations and candid reception moments are also included.",
      "One 8x14 Print of your choice",
      "Professionally edited online gallery",
      "Photographer + Asistant",
    ],
    message: "Hello Kaitlyn! I am interested in the Couples package listed on your site."
  },
  {
    name: "Engagement Package",
    price: 150,
    details: [
      "25 - 30 edited images",
      "1 hour photoshoot",
      "Lots of locations to choose from",
    ],
    message: "Hello Kaitlyn! I am interested in the Couples package listed on your site."
  },
];

export const weddingPackageAdditionsData: AdditionData[] = [
  {
    price: 100,
    detail: "Add an hour onto any package"
  },
  {
    price: 50,
    detail: "flat travel fee if more than 1 hour away from springfield mo."
  },
]