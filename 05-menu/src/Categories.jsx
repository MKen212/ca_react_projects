
const Categories = ({ categories, filterMenu }) => {
  return (
    <section className="btn-container">
      {
        categories.map((category) => {
          return (
            <button
              type="button"
              className="btn"
              key={category}
              onClick={() => filterMenu(category)}
            >
              {category}
            </button>
          );
        })
      }
    </section>
  );
};

export default Categories;
