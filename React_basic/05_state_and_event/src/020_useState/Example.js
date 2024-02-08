const Example = () => {
  let displayVal;
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          displayVal = e.target.value;
        }}
      />
      = {displayVal}
    </>
  );
};

export default Example;
