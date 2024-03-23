import SingleItem from "./SingleItem";

const Items = ({ items, toggleCompleted, removeItem }) => {
  return (
    <section className="items">
      {
        items.map((item) => {
          return (
            <SingleItem
              key={item.id}
              item={item}
              toggleCompleted={toggleCompleted}
              removeItem={removeItem}
            />
          );
        })
      }
    </section>
  );
};

export default Items;
