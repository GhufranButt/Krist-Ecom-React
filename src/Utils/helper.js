import menImgCar from "../../assets/menCar.png";
import womenImgCar from "../../assets/womenCar.png";
import kidImgCar from "../../assets/kidCar.jpg";
import indianCar from "../../assets/inidanCar.jpg";
import westernCar from "../../assets/westernCar.jpg";
import footCar from "../../assets/footCar.jpg";
import productFeatCar from "../../assets/productFeatCar.jpg";

const categories = [
  {
    name: "Casual Men",
    image: menImgCar,
    items: [
      "T-Shirts",
      "Casual",
      "Formal Shirts",
      "Jackets",
      "Blazers and Coats",
    ],
  },
  {
    name: "Indian & Festive Wear",
    image: indianCar,
    items: ["Kurta & Kurta Sets", "Shairwamis"],
  },
  {
    name: "Women",
    image: womenImgCar,
    items: [
      "Kurta & Suits",
      "Sareers",
      "Ethnic Wear",
      "Lehenga Cholis",
      "Jackets",
    ],
  },
  {
    name: "Western Wears",
    image: westernCar,
    items: ["Dresses", "Jump Suits"],
  },
  {
    name: "Footwear",
    image: footCar,
    items: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
    ],
  },
  {
    name: "Product Features",
    image: productFeatCar,
    items: ["360 Product Viewer", "Produt with Video"],
  },
  {
    name: "Kids",
    image: kidImgCar,
    items: [
      "T-Shirts",
      "Shirts",
      "Jeans",
      "Trousers",
      "Party Wear",
      "Innerwear & Thermal",
      "Track Pants",
      "Value Pack",
    ],
  },
];

export default categories;
