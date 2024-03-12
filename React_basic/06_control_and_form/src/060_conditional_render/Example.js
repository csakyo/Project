import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      ></input>
    </>
  );
};

export default Example;
