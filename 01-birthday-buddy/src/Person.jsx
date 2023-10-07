const Person = ({ name, age, imageURL }) => {

  return (
    <article className="person">
      {/* <img src={`./src/assets/${image}`} alt={name} className="img" /> */}
      <img src={imageURL} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
