import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className=" mt-6 text-center ">
      {categories.map((category, index) => {
        return (
          <button
            className=" capitalize  text-orange-400 md:mx-6 px-1 py-1 hover:bg-orange-300 hover:text-white rounded-md hover:transition-all hover:ease-in-out"
            key={index}
            type="button"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
