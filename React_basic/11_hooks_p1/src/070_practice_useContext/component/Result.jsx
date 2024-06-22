import { useCalc, useCalcDispatch } from '../Context/CalcContext';

const Result = () => {
  const state = useCalc();
  return (
    <>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Result;
