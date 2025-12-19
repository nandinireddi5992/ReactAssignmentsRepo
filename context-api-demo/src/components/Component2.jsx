import Component3 from "./Component3";

function Component2() {
  return (
    <div>
      <h3>Component 2</h3>
      {/* Completely unaware of context */}
      <Component3 />
    </div>
  );
}

export default Component2;
