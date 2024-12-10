// Child-komponent
const Greeting = ({ name }) => <p>Hej, {name}! Velkommen til React.</p>;

// Parent-komponent
const ReactComponent = () => (
  <div>
    <h1>Velkommen</h1>
    {["Benjamin", "Anna", "Lukas"].map((name, index) => (
      <Greeting key={index} name={name} />
    ))}
  </div>
);

export default ReactComponent;