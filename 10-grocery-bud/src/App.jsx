import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";

function App() {
  const defaultItems = JSON.parse(localStorage.getItem("reactBudList") || "[]");
  
  const setLocalStorage = (items) => {
    localStorage.setItem("reactBudList", JSON.stringify(items));
  };

  const [items, setItems] = useState(defaultItems);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item was added");
  };

  const toggleCompleted = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (id, itemName) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.info(`"${itemName}" was deleted.`);
  };

  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 10 - Grocery Bud</h2>
        <div className="title-underline"></div>
      </header>

      <main className="section-center">
        <ToastContainer position="top-center" />
        <Form addItem={addItem} />
        <Items
          items={items}
          toggleCompleted={toggleCompleted}
          removeItem={removeItem}
        />
      </main>
    </div>
  );
};

export default App;
