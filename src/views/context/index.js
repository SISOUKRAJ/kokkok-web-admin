import React, {
    useState,
    createContext,
} from "react";

export const ScreenContext = createContext({ screen: "" });

const Index = (props) => {
    const indexScreen = localStorage.getItem("screen");
    const [screen, setScreen] = useState(indexScreen);

    return (
        <div>
            <ScreenContext.Provider
                value={{ screen, setScreen }}
            >
                {props.children}
            </ScreenContext.Provider>
        </div>
    );
};

export default Index;
