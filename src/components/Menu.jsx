import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="w-[80%] mx-auto md:w-[80%] md:gap-6 lg:grid grid-cols-2">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className=" md:flex mx-auto">
            <img
              src={img}
              alt={title}
              className="w-[100%] mx-auto max-h-[300px] md:max-w-[200px] md:max-h-[150px]  object-cover my-6 border-4 border-orange-400 rounded-md"
            />
            <div className="md:mt-5 md:ml-8 mx-auto">
              <header className="flex justify-between">
                <h4 className="uppercase font-semibold">{title}</h4>
                <h4 className="text-orange-400 font-semibold">${price}</h4>
              </header>
              <div className="border w-[100%] border-dotted border-gray-500  mt-3 mb-6 rounded-full md:block"></div>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
