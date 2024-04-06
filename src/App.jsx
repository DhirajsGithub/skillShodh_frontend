import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Messaging from "./components/Chat/Messaging";
import ChatWindow from "./components/Chat/ChatWindow";

function App() {
  const [conatactWindow, setContactWindow] = useState(true);
  const [user, setUser] = useState({});
  const setUserHandler = (user) => {
    setUser(user);
    setContactWindow(false);
  };

  const backBtnHandler = () => {
    setContactWindow(true);
  };
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {conatactWindow && <Messaging setUserHandler={setUserHandler} />}
      {!conatactWindow && (
        <ChatWindow user={user} backBtnHandler={backBtnHandler} />
      )}
    </div>
  );
}

export default App;
