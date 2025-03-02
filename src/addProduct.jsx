import React, { useState } from "react";
import { v4 } from "uuid";
import { storage } from "./firebase/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addProduct } from "./apiCalls/products/products.js";
import { toast } from "react-toastify";

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

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "brandName":
      case "productName":
      case "category":
      case "subCategory":
        if (!value.trim()) {
          error = `${name} is required`;
        } else if (value.trim().length < 2) {
          error = `${name} must be at least 2 characters`;
        }
        break;

      case "productDescription":
        if (!value.trim()) {
          error = "Product Description is required";
        } else if (value.trim().length < 10) {
          error = "Product Description must be at least 10 characters";
        }
        break;

      case "price":
      case "discountedPrice":
      case "stock":
        if (!value) {
          error = `${name} is required`;
        } else if (isNaN(value) || value < 0) {
          error = `${name} must be a valid positive number`;
        }
        break;

      case "images":
        if (!value || value.length === 0) {
          error = "At least one image is required";
        } else if (value.length > 4) {
          error = "You can upload a maximum of 4 images";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(product).forEach((field) => {
      const error = validateField(field, product[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    // Validate the field on change
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleImageChange = async (e) => {
    setImageLoading(true);
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
          setImageLoading(false);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      alert("Please select an image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await addProduct(product);

      if (response.status === 201) {
        toast.success(response.message);
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
      } else {
        toast.error(response.message || "Failed to add product.");
      }
    } catch (error) {
      toast.error("Error adding product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-5 lg:mx-auto my-8 p-6 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-8">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Brand Name", name: "brandName", type: "text" },
            { label: "Product Name", name: "productName", type: "text" },
            {
              label: "Product Description",
              name: "productDescription",
              type: "textarea",
            },
            { label: "Price", name: "price", type: "number" },
            {
              label: "Discounted Price",
              name: "discountedPrice",
              type: "number",
            },
            { label: "Stock", name: "stock", type: "number" },
            { label: "Category", name: "category", type: "text" },
            { label: "Subcategory", name: "subCategory", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}:
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={product[field.name]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={product[field.name]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Images (Max 4):
            </label>
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.images && (
              <p className="text-red-500 text-sm mt-1">{errors.images}</p>
            )}
            <div className="flex gap-2 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
              ))}
              {imageLoading && (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {isLoading ? (
          <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <div className="w-full flex justify-center items-center">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="w-full px-4 py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
