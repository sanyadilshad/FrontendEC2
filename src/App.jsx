import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to My Deployed Frontend</h1>
      <p>
        This is a simple frontend project deployed on AWS EC2 by Sanya Dilshad.
      </p>
    </div>
  );
}

export default App;
