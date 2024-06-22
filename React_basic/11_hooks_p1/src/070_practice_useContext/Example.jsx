import Input from './component/Input';
import Select from './component/Select';
import Result from './component/Result';
import { CalcProvider } from './Context/CalcContext';

const Example = () => {
  return (
    /* 完成系のJSX */
    <CalcProvider>
      <Input name='a' />
      <Input name='b' />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
