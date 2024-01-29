import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  return (
    <>
      <Child
        color="red"
        num={123}
        fn={hello}
        bool
        obj={{ name: "Tom", age: 12 }}
      />
      ;
    </>
  );
};

export default Example;
