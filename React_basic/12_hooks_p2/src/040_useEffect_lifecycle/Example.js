import { useEffect, useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      console.log("update");

      return function cleanUp() {
        console.log("update cleanup");
      };
    },
    [state]
  );

  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("mount cleanup");
    };
  }, []);

  console.log("render");

  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
    </>
  );
};

export default Example;
