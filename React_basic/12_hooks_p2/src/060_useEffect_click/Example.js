import { useLayoutEffect, useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>
        {" "}
        {isDisp ? "非表示" : "表示"}
      </button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRuning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRuning((prev) => !prev);
  };
  const reset = () => {
    setTime(0);
    setIsRuning((prev) => !prev);
  };

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
        <button onClick={toggle}>{isRunning ? "一時停止" : "スタート"}</button>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example;
