"use client";

import "./lib";
import { useState, useEffect } from "react";

export default function SSR() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState("client loaded");
  }, []);
  return (
    <>
      <div>SSR Page</div>;
    </>
  );
}
