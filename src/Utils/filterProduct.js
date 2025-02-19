const productCategories = [
  { id: "menCheckBox", label: "Men" },
  { id: "womenCheckBox", label: "Women" },
  { id: "kidsCheckBox", label: "Kids" },
  { id: "bagsCheckBox", label: "Bags" },
  { id: "beltsCheckBox", label: "Belts" },
  { id: "walletsCheckBox", label: "Wallets" },
  { id: "watchesCheckBox", label: "Watches" },
  { id: "accessoriesCheckBox", label: "Accessories" },
];

const sizeCategories = [
  { id: "small", label: "S", qualtity: "10" },
  { id: "medium", label: "M", qualtity: "18" },
  { id: "large", label: "L", qualtity: "30" },
  { id: "extra large", label: "XL", qualtity: "44" },
  { id: "double XL", label: "XXL", qualtity: "50" },
  { id: "triple Xl", label: "XXl", qualtity: "19" },
];

const colorCategories = [
  { id: "red", label: "Red", qualtity: "18", color: "#FF0000" },
  { id: "blue", label: "Blue", qualtity: "18", color: "#0000FF" },
  { id: "orange", label: "Orange", qualtity: "18", color: "#FFA500" },
  { id: "black", label: "Black", qualtity: "18", color: "#000000" },
  { id: "green", label: "Green", qualtity: "18", color: "#008000" },
  { id: "yellow", label: "Yellow", qualtity: "18", color: "#FFFF00" },
];

export default { colorCategories, sizeCategories, productCategories };
