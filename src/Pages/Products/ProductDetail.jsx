import React, { useEffect, useState } from "react";
import Navbar from "../../Elements/Navbar.jsx";
import Footer from "../../Elements/Footer.jsx";
import { useParams } from "react-router-dom";
import KirstBenefits from "../../Elements/KirstBenefits.jsx";
import { productByID } from "../../apiCalls/products/products.js";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProductByID = async () => {
      try {
        const response = await productByID(`${id}`);
        setProduct(response.productDetails);
      } catch (error) {}
    };

    fetchProductByID();
  }, []);

  console.log("9090009", product);

  return (
    <>
      <Navbar />

      <div className="flex justify-center p-10 gap-2">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={product?.images[0]}
            className="w-[500px] h-[500px]"
            alt=""
          />

          <div className="flex gap-4">
            <img
              src={product?.images[1]}
              className="w-[150px] h-[150px]"
              alt=""
            />
            <img
              src={product?.images[2]}
              className="w-[150px] h-[150px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[25px] barlow-bold text-black">{product.name}</p>
          <p className="text-[18px]">${product.price}</p>
          <p className="text-[15px] barlow-regular text-wrap">
            {product.description}
          </p>
        </div>
      </div>

      <KirstBenefits />
      <Footer />
    </>
  );
};

export default ProductDetail;
