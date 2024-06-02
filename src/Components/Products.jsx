import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../state/actions/products';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      console.log(data);
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
        <h2 className=" text-3xl font-bold text-black pb-5">All Products</h2>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.category.image}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category.name}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
