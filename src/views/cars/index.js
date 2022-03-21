import React from "react"
import CarOptionProvider from "../../views/context/getCarOption";
import DriverContextProvider from "../../views/context/getDriver";
import FilterData from "./filterData";

const CarsOption = () => {
    return (
        <div>
            <CarOptionProvider>
                <DriverContextProvider>
                    <FilterData />
                </DriverContextProvider>
            </CarOptionProvider>
        </div>
    )
}

export default CarsOption
