import { useDispatch } from 'react-redux';
import { add, minus } from '../store/modules/counter';

const CounterButton = ({ calcType, step }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log(step);
    const action = calcType === '+' ? add(step) : minus(step);
    console.log(action);
    dispatch(action);
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
