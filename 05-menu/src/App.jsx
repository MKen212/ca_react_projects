import { useState } from "react";
import data from "./data";
import Title from "./Title";
import MenuList from "./MenuList";

function App() {
  const [menu, setMenu] = useState(data);

  // Unique Categories
  // Old method using .reduce() method
  // const categoryItems = menu.reduce((values, item) => {
  //   if (!values.includes(item.category)) {
  //     values.push(item.category);
  //   }
  //   return values;
  // }, ["All"]);

  // New method using set
  const categoryList = menu.map((item) => item.category);
  const categorySet = new Set(categoryList);
  const categoryItems = ["All", ...categorySet];
  
  const [categories, setCategories] = useState(categoryItems);
  // console.log(categories);



  return (
    <main className="menu">
      <Title text="React Project 05 - Menu" />
      <MenuList menu={menu} />
    </main>
  );
};

export default App;
