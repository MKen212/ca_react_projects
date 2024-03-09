import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";


function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
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
  };

  // UP TO REMOVE ITEM

  return (
    <div>
      <header className="title" style={{marginBottom: "3rem"}}>
        <h2>React Project 10 - Grocery Bud</h2>
        <div className="title-underline"></div>
      </header>

      <main className="section-center">
        <Form addItem={addItem} />
        <Items items={items} toggleCompleted={toggleCompleted} />
      </main>

    </div>
  );
};

export default App;
