import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(0);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? (
        <Count key="A" title="A" count={countA} setCount={setCountA} />
      ) : (
        <Count key="B" title="B" count={countB} setCount={setCountB} />
      )}
    </>
  );
};

const Count = ({ count, title, setCount }) => {
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
