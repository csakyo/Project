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

  useEffect(() => {
    let intervalId = null;
    intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
        <button>スタート</button>
        <button>リセット</button>
      </div>
    </>
  );
};

export default Example;
