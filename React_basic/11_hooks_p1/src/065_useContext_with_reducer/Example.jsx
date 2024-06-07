import Counter from './components/Counter';
import CounterProvider from './context/CounterContext';

// POINT useContext x useReducer
const Example = () => {
  const countUp = () => {
    dispatch({ type: '+', step: 2 });
  };
  const countDown = () => {
    dispatch({ type: '-', step: 2 });
  };
  return (
    <>
      <CounterProvider>
        <Counter state={state} countUp={countUp} countDown={countDown} />
      </CounterProvider>
    </>
  );
};

export default Example;
