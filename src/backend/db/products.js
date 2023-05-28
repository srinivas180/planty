import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Philodendron Heartleaf",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/Bloomscape-Philodendron-Heartleaf.webp",
    price: "30",
    categoryName: "indoor",
  },
  {
    _id: uuid(),
    title: "Cast Iron Plant",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/cast-iron-plant.webp",
    price: "32",
    categoryName: "indoor",
  },
  {
    _id: uuid(),
    title: "Golden Pothos",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/golden-pothos.webp",
    price: "20",
    categoryName: "indoor",
  },
  {
    _id: uuid(),
    title: "Monstera Deliciosa",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/lon--george-monstera-deliciosa.webp",
    price: "25",
    categoryName: "indoor",
  },
  {
    _id: uuid(),
    title: "Lucky Bamboo",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/lucky-bamboo.webp",
    price: "30",
    categoryName: "indoor",
  },
  {
    _id: uuid(),
    title: "Snake Plant",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/snake-plant.webp",
    price: "50",
    categoryName: "indoor",
  },
  {
    _id: uuid(),
    title: "ZZ Plant",
    imageLink: "https://raw.githubusercontent.com/srinivas180/planty/main/src/images/products/zz-plant.webp",
    price: "40",
    categoryName: "indoor",
  },
];
