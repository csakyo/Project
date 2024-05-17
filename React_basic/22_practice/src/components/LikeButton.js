import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      いいね！{count}
    </span>
  );
};

export default LikeButton;
