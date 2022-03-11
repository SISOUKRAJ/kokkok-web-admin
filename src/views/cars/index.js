import React from "react"
import CarOptionProvider from "../../views/context/getCarOption";
import FilterData from "./filterData";

const CarsOption = () => {
    return (
        <div>
            <CarOptionProvider>
                <FilterData />
            </CarOptionProvider>
        </div>
    )
}

export default CarsOption
