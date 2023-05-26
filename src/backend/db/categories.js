import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indoor Plants",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/categories/aglaonema-red-emerald-indoor.jpg",
    altText: "aglaonema red emerald indoor plant",
    description:
      "This plants grow under low sunlight and requires less maintenance.",
  },
  {
    _id: uuid(),
    categoryName: "Outdoor Plants",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/categories/adenium-white-double-flower-outdoor.jpg",
    altText: "adenium white double flower outdoor plant",
    description:
      "This plants grow under direct sunlight and requires you to water frequently.",
  },
  {
    _id: uuid(),
    categoryName: "Air Purifier Plants",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/categories/money-plant-air-purifier.jpg",
    altText: "money plant",
    description:
      "This plants requires very low sunlight, low maintenance and also purifies air.",
  },
  {
    _id: uuid(),
    categoryName: "Mosquito Repellent Plants",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/categories/lemon-balm-mosquito-repellent.jpg",
    altText: "lemon balm plant",
    description:
      "This plants are great natural mosquito repellers.",
  },
  {
    _id: uuid(),
    categoryName: "Bonsai Plants",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/categories/azalea-bonsai.jpg",
    altText: "azalea bonsai plant",
    description:
      "Bonsai trees are normal plants, but trained using sophisticated techniques to keep them miniature.",
  },
];
