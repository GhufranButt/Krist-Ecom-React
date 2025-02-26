import React, { useEffect, useState } from "react";
import Navbar from "../../Elements/Navbar.jsx";
import Footer from "../../Elements/Footer.jsx";
import { useParams } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import KirstBenefits from "../../Elements/KirstBenefits.jsx";
import { productByID } from "../../apiCalls/products/products.js";
import StarIcon from "../../../assets/iconsStar.png";
import { addCart } from "../../apiCalls/cart/cart.js";
import { getProductsByCat } from "../../apiCalls/products/products.js";
import { CiStar } from "react-icons/ci";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";
import { reviews } from "../../apiCalls/reviews/reviews.js";

const colors = [
  { id: "Red,", color: "#FF0000" },
  { id: "Blue,", color: "#0000FF" },
  { id: "Orange,", color: "#FFA500" },
  { id: "Black,", color: "#000000" },
  { id: "Green,", color: "#008000" },
  { id: "Yellow", color: "#FFFF00" },
];

const sizes = [
  { id: "small", name: "S" },
  { id: "medium", name: "M" },
  { id: "large", name: "L" },
  { id: "extraLarge", name: "XL" },
  { id: "doubleExtra", name: "XXL" },
];

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("");
  const [product, setProduct] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [catProduct, setCatProduct] = useState();
  const [cat, setCat] = useState(null);
  const [data, setData] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [sentSize, setSentSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // console.log("sentSize, selectedColor", sentSize, selectedColor);
  console.log("product", product);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await reviews();
        const reviewsData = response.map((data) => data);
        setData(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    fetchProductByID();
  }, []);

  useEffect(() => {
    if (cat) abc();
  }, [cat]);

  const abc = async () => {
    try {
      const realtedProduct = await getProductsByCat(`${cat}`);
      setCatProduct(realtedProduct.products);
    } catch (error) {}
  };

  const fetchProductByID = async () => {
    try {
      const response = await productByID(`${id}`);
      setProduct(response.productDetails);
      setCat(response.productDetails.category);
    } catch (error) {}
  };

  const { id } = useParams();
  const stars = Array(5).fill(null);

  const handleSizeClick = (sizeId) => {
    setSelectedSize(sizeId);
    setSentSize(sizeId);
  };

  const addToCart = async () => {
    const productDetails = {
      productName: product?.productName,
      productPrice: product?.price,
      productImage: product?.thumbnail,
    };

    const cartItem = {
      ...productDetails,
      size: sentSize,
      color: selectedColor,
      quantity: quantity,
    };

    console.log("cartItem", cartItem);

    addCart(cartItem);
  };

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="bg-gray-100 cursor-pointer w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[300px] xl:h-[530px] xl:w-[530px] p-4 flex flex-col items-center justify-center relative">
              <img
                src={product?.images}
                className="w-full h-auto max-h-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="flex gap-2 sm:gap-5 overflow-x-auto py-2">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer bg-gray-100 flex-shrink-0"
                >
                  <img
                    src={product?.images}
                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-2xl sm:text-[28px] barlow-bold text-black">
                {product?.brandName}
              </p>
              <p className="text-lg sm:text-[19px]">{product?.productName}</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {stars.map((_, i) => (
                    <img
                      key={i}
                      src={StarIcon}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      alt=""
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-sm sm:text-[14px] mt-1">
                  5.0 (121 Reviews)
                </p>
              </div>
              <div className="flex gap-2 mt-1">
                <p>${product?.discountedPrice}.00</p>
                <p className="text-gray-400 line-through decoration-gray-400">
                  ${product?.price}.00
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-[15px] max-w-full lg:max-w-[550px]">
              {product?.productDescription}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-xl sm:text-[25px] barlow-semibold">Color</p>
                <div className="flex gap-2">
                  {colors.map((obj) => (
                    <div key={obj.id}>
                      <div
                        onClick={() => handleColor(obj.color)}
                        style={{ backgroundColor: obj.color }}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-[4px] border border-gray-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl sm:text-[25px] barlow-semibold">Size</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <div
                      onClick={() => {
                        handleSizeClick(size.id);
                      }}
                      className={`flex justify-center cursor-pointer rounded-[8px] items-center border border-black p-2 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] ${
                        selectedSize === size.id
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                      key={size.id}
                    >
                      <div>{size.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex justify-center items-center gap-3 sm:gap-5 border py-2 border-black w-[80px] sm:w-[100px] rounded-[8px]">
                <p
                  onClick={decreaseQuantity}
                  className="text-lg sm:text-[20px] cursor-pointer button"
                >
                  -
                </p>
                <p className="text-lg sm:text-[20px]">{quantity}</p>
                <p
                  onClick={increaseQuantity}
                  className="text-lg sm:text-[20px] cursor-pointer button"
                >
                  +
                </p>
              </button>
              <button
                onClick={() => addToCart()}
                className="bg-black rounded-[8px] py-2 sm:py-3 w-[200px] sm:w-[300px] hover:bg-gray-800 cursor-pointer text-white"
              >
                Add to Cart
              </button>
              <button className="rounded-[8px] flex cursor-pointer justify-center items-center border py-2 w-[40px] sm:w-[50px] border-black">
                <div className="button">
                  <IoHeartOutline size={20} className="sm:w-6 sm:h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="flex gap-3 sm:gap-5 border-b border-gray-300 mt-5">
            <p
              onClick={() => setActiveTab("description")}
              className={`text-lg sm:text-[20px] cursor-pointer barlow-medium pb-2 ${
                activeTab === "description"
                  ? "border-b-2 barlow-bold border-black"
                  : ""
              }`}
            >
              Description
            </p>
            <p
              onClick={() => setActiveTab("additional")}
              className={`text-lg sm:text-[20px] cursor-pointer barlow-medium pb-2 ${
                activeTab === "additional"
                  ? "border-b-2 barlow-bold border-black"
                  : ""
              }`}
            >
              Additional Information
            </p>
            <p
              onClick={() => setActiveTab("reviews")}
              className={`text-lg sm:text-[20px] cursor-pointer barlow-medium pb-2 ${
                activeTab === "reviews"
                  ? "border-b-2 barlow-bold border-black"
                  : ""
              }`}
            >
              Reviews
            </p>
          </div>
          <div className="mt-4">
            {activeTab == "description" && (
              <p className="text-[18px] max-w-[650px]">
                {product?.productDescription}
              </p>
            )}
            {activeTab == "additional" && (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex gap-8">
                  <p className="text-[25px] barlow-semibold">Color</p>
                  <div className="flex gap-1 text-[19px] justify-center items-center">
                    {colors.map((color) => {
                      return <div key={color.id}>{color.id}</div>;
                    })}
                  </div>
                </div>
                <div className="flex gap-8">
                  <p className="text-[25px] barlow-semibold">Size</p>
                  <div className="flex gap-1 text-[19px] justify-center items-center">
                    {sizes.map((size) => {
                      return (
                        <div key={size.id}>
                          <div>{size.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {activeTab == "reviews" && (
              <div className="flex flex-col gap-5 border-b border-gray-200">
                {data.map((obj) => {
                  const starsArray = [...Array(obj.rating).keys()];
                  return (
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <img
                          src={obj.profilePicture}
                          className="rounded-full overflow-hidden object-cover h-10 w-10"
                          alt="picture"
                        />
                        <div className="flex flex-col gap-1 items-start">
                          <p className="text-[14px] barlow-bold">{obj.name}</p>
                          <div className="flex">
                            {starsArray.map((_, index) => (
                              <img
                                key={index}
                                src={StarIcon}
                                alt="Star"
                                className="w-[12px] h-[12px]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-[17px] barlow-medium">
                        {obj.reviewText}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="text-[40px] barlow-medium">Related Product</p>
        <div className="flex">
          {catProduct
            ?.filter((_, i) => i < 4)
            .map((obj) => {
              return (
                <div
                  className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative group"
                  key={obj.id}
                >
                  <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-lg lg:h-[300px] xl:h-[350px] xl:w-[280px] p-4 flex items-center justify-center relative">
                    <img
                      src={obj.images}
                      className="w-full h-auto max-h-full object-cover rounded-lg"
                      alt="Product"
                    />
                    <div className="flex absolute right-5 top-10 flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      <div
                        onClick={() => addtowishList(obj._id)}
                        className="bg-white rounded-full button p-1 shadow-md"
                      >
                        <CiStar size={20} />
                      </div>
                      <div className="bg-white rounded-full button p-1 shadow-md">
                        <HiMiniArrowsRightLeft size={20} />
                      </div>
                      <div
                        onClick={() => {}}
                        className="bg-white rounded-full button p-1 shadow-md"
                      >
                        <FiEye size={20} />
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(obj)}
                      className="absolute bottom-5 left-[50%] -translate-x-1/2 w-[60%] p-2 rounded-[9px] button text-[13px] bg-white text-gray-600 font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <p className="text-[20px] barlow-bold mt-2">
                    {obj.brandName}
                  </p>
                  <p className="text-[15px] barlow-medium">{obj.productName}</p>
                  <div className="flex gap-2">
                    <p>${obj.price}</p>
                    <p className="text-gray-400 line-through decoration-gray-400">
                      ${obj.discountedPrice}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <KirstBenefits />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
