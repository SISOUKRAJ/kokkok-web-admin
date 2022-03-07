import React, {
    useState,
    createContext,
    useEffect,
    SetStateAction,
    Dispatch,
} from "react";

export const ScreenContext = createContext({ screen: "" });

const Index = (props) => {
    const indexScreen = localStorage.getItem("screen");
    // console.log("indexScreen", indexScreen);
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
