import SingleItem from "./SingleItem";

const Items = ({ items, toggleCompleted }) => {
  return (
    <section className="items">
      {
        items.map((item) => {
          return (
            <SingleItem
              key={item.id}
              item={item}
              toggleCompleted={toggleCompleted}
            />
          );
        })
      }
    </section>
  );
};

export default Items;
