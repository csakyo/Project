import { useSelector } from 'react-redux';
const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector((state) => state);
  return <h3>{state.counter}</h3>;
};

export default CounterResult;
