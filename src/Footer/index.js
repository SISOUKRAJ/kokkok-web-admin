import React, { useContext } from "react";
import { ScreenContext } from "../views/context";
import "./index.css";

const Footer = () => {
    const { screen } = useContext(ScreenContext);
    return (
        <div>
            {screen === null || screen === "login" ? null
                : <div className="footer"><strong style={{ color: "white" }}>KoKKok DEV</strong></div>
            }
        </div>
    )
}

export default Footer