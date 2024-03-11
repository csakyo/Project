const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }
  const helloAnimals = animals.map((animal) => {
    return <li key={animal}>Hello {animal}</li>;
  });
  return (
    <>
      <h3>配列の操作</h3>
      {/* <ul>{animalLi/¥st}</ul> */}
      <ul>{helloAnimals}</ul>
    </>
  );
};

export default Example;
