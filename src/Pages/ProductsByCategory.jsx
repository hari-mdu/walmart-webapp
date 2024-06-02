import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductsByCategory = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  console.log(id, "id");

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
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

export default ProductsByCategory;
