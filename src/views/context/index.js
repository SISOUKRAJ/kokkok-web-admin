import React, {
    useState,
    createContext,
    useEffect,
    SetStateAction,
    Dispatch,
} from "react";

export const ScreenContext = createContext({ screen: "" });

const Index = (props) => {
    const [screen, setScreen] = useState("");
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
