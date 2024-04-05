import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Messaging from "./components/Chat/Messaging";

function App() {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Messaging />
    </div>
  );
}

export default App;
