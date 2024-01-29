import "./Child.css";

const Child = ({ color = "green", num, fn, obj }) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn("props")}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
