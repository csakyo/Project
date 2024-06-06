import { useState, useReducer } from 'react';

const Example = () => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case '+': {
        return prev + step;
      }
      case '-': {
        return prev - step;
      }
    }
  }, 0);

  const add = () => {
    dispatch({ type: '+', step: 1 });
  };
  const minus = () => {
    dispatch({ type: '-', step: 2 });
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </>
  );
};

export default Example;
