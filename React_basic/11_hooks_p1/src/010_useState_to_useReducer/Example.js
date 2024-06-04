import { useState, useReducer } from 'react';

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case '+':
        return prev + step;
      case '-':
        return prev - step;
    }
  }, 0);

  const add = () => {
    setState((prev) => ++prev);
  };
  const addr = () => {
    dispatch({ type: '+', step: 2 });
  };
  const minusr = () => {
    dispatch({ type: '-', step: 3 });
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={add}>ADD</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={addr}>ADDR</button>
        <button onClick={minusr}>MINUSR</button>
      </div>
    </>
  );
};

export default Example;
