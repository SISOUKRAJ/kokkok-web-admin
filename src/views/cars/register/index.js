import React from "react"
import CarOptionProvider from "../../../views/context/getCarOption";
import DriverOptionProvider from "../../../views/context/getDriver";
import ManageCars from "./manage";
const RegisterCars = () => {
    return (
        <div >
            <CarOptionProvider >
                <DriverOptionProvider >
                    <ManageCars />
                </DriverOptionProvider>
            </CarOptionProvider>
        </div>
    )
}

export default RegisterCars