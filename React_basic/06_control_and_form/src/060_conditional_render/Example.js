import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  return (
    <>
      {/* <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      ></input>
      <ul>
        {animals
          .filter((animal) => {
            const isMatcg = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul> */}
    </>
  );
};

export default Example;
