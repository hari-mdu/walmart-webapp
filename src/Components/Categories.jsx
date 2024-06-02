import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchProductsByCategory(categoryId);
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className=" text-3xl font-bold text-black pb-5">Categories</h2>
            <div className="flex flex-wrap -m-4">
              {categories.map((category) => (
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full" key={category.id}>
                  <Link to={`/category/${category.id}/products`}>
                    <div
                      href="#"
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={category.image}
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        className="text-gray-500 text-xs tracking-widest title-font mb-1"
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        {category.name}
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
