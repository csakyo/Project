import { useLayoutEffect, useEffect, useState } from "react";

const useTimer = () => {
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

  return {
    toggle,
    reset,
    time,
    isRunning,
  };
};

export default useTimer;
