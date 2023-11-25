import { useState } from "react";
import data from "./data";
import Title from "./Title";
import Categories from "./Categories";
import MenuList from "./MenuList";

// Unique Categories data
// Old method using .reduce() method
// const categoryItems = menu.reduce((values, item) => {
//   if (!values.includes(item.category)) {
//     values.push(item.category);
//   }
//   return values;
// }, ["All"]);

// New method using set
const categoryList = data.map((item) => item.category);
const categorySet = new Set(categoryList);
const categoryItems = ["All", ...categorySet];
// console.log(categoryItems);

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(categoryItems);

  // Filter Categories Function
  const filterMenu = (category) => {
    if (category==="All") {
      setMenu(data);
    } else {
      const filteredMenu = data.filter(item => item.category === category);
      setMenu(filteredMenu);
    }
  };

  return (
    <main className="menu">
      <Title text="React Project 05 - Menu" />
      <Categories categories={categories} filterMenu={filterMenu} />
      <MenuList menu={menu} />
    </main>
  );
};

export default App;
