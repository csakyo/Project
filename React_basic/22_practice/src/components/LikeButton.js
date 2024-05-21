import { useState } from "react";

// const LikeButton = () => {
//   const [count, setCount] = useState(999);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <span className="likeButton" onClick={handleClick}>
//       いいね！{count}
//     </span>
//   );
// };

const FetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch(() => alert("error"));

  return <></>;
};

export default FetchData;
