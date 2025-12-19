import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "200px",
          height: "100px",
          margin: "20px auto",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isRed ? "red" : "blue",
        }}
      >
        This div changes color
      </div>

      <button onClick={toggleColor}>
        Toggle Color
      </button>
    </div>
  );
}

export default App;
