import React from "react"
import DriverOptionProvider from "../context/getDriver";
import FilterData from "./filterData";
import './index.css';

const Drivers = () => {
    return (
        <div>
            <DriverOptionProvider>
                <FilterData />
            </DriverOptionProvider>
        </div>
    )
}

export default Drivers