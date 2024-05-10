import "./lib";
import ClientComp from "./components/ClientComp";

export default function SSR() {
  return (
    <>
      <div>SSR Page</div>
      <ClientComp />
    </>
  );
}
