import { AppContextProvider } from "../context/AppContext";
import Component2 from "./Component2";

function Component1() {
  return (
    <div>
      <h3>Component 1</h3>

      <AppContextProvider>
        <Component2 />
      </AppContextProvider>
    </div>
  );
}

export default Component1;
