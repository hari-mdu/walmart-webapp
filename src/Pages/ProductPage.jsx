import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../state/actions";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);


  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product?.category?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.category?.name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.title}
              </h1>
              <div className="flex mb-4">{/* Ratings SVG code here */}</div>
              <p className="leading-relaxed">{product?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Color selection and Size selection code here */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" 
                 onClick={() => dispatch(addToCart(product))}>
                  Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {/* Heart SVG code here */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!Object.keys(product).length > 0 && <div>Product not found</div>}
    </>
  );
};

export default ProductPage;
