import { useState } from "react";
// import Home from "../src/Pages/Home/index.jsx";
import Login from "../src/Pages/Auth/login.jsx";
import Register from "../src/Pages/Auth/signup.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
