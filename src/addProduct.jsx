import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { storage } from "./firebase/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addProduct } from "./apiCalls/products/products.js";

const AddProduct = () => {
  const [product, setProduct] = useState({
    brandName: "",
    productName: "",
    productDescription: "",
    price: "",
    discountedPrice: "",
    stock: "",
    category: "",
    subCategory: "",
    images: [],
  });

  // const [img, setImg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = async (e) => {
    const imageUrl = e.target.files[0];

    if (imageUrl) {
      const uniqueFileName = `${imageUrl.name}-${v4()}`;
      const imageRef = ref(storage, `kristImagesUrl/${uniqueFileName}`);

      try {
        const snapshot = await uploadBytes(imageRef, imageUrl);

        const downloadURL = await getDownloadURL(snapshot.ref);

        if (downloadURL) {
          setProduct((prevProduct) => ({
            ...prevProduct,
            images: [...(prevProduct.images || []), downloadURL],
          }));
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
      }
    } else {
      alert("Please select an image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addProduct(product);
      alert("Product added successfully!");
      setProduct({
        brandName: "",
        productName: "",
        productDescription: "",
        price: "",
        discountedPrice: "",
        stock: "",
        category: "",
        subCategory: "",
        images: [],
      });
    } catch (error) {
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div>
          <label>Brand Name:</label>
          <input
            type="text"
            name="brandName"
            value={product.brandName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            name="productDescription"
            value={product.productDescription}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Discounted Price:</label>
          <input
            type="number"
            name="discountedPrice"
            value={product.discountedPrice}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Subcategory:</label>
          <input
            type="text"
            name="subCategory"
            value={product.subCategory}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div>
          <label>Images (Max 4):</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
      <style jsx>{`
        .add-product-form {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .product-form div {
          margin-bottom: 15px;
        }
        .input-field {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit-button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default AddProduct;
