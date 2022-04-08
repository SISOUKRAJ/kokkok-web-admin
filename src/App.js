import React, { useContext } from "react";
import { ScreenContext } from "./views/context";
import Routes from "./routes"
import LoginPage from "./views/login_page";
import './App.css';

function App() {
  const { screen } = useContext(ScreenContext);
  const handleLogin = () => {
    alert("Please Login and Try again");
    localStorage.clear();
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", height: "10vh" }}>
          <div style={{ marginLeft: 20, backgroundColor: "#FF9E1B ", width: 50, height: "auto" }}>Img </div>
          <div style={{ marginLeft: 20 }}>
            <strong style={{ color: "#FF9E1B " }}>KoK KoK</strong> Web admin
            <br /> Dashboard
          </div>
        </div>
        <LoginPage />
      </div>
    )
  }
  return (
    <>
      {screen === null ?
        handleLogin()
        : <Routes />
      }
    </>
  );
}

export default App;