import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./components/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main className="sm:w-[95%] md:w-[90%] m-4 mx-auto ">
      <section>
        <div>
          <h2 className="text-4xl font-semibold tracking-wider text-center">
            Our Menu
          </h2>
          <div className="border-2 border-orange-400 rounded-full w-[10%] mx-auto"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
