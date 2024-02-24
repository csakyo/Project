import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(0);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>
        {title}: {count}
      </p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
