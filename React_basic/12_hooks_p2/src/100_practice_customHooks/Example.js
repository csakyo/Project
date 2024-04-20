import useCount from "./hooks";

const Example = () => {
  const { count, countUp } = useCount();
  return (
    <>
      <h2>練習問題</h2>
      <p>TEST</p>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
