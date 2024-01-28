import "./Child.css";

const Child = ({ color = "green" }) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
