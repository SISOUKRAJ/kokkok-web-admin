import React from "react"
import CarOptionContext from "../../../views/context/getCarOption";
import ManageCars from "./manage";
const RegisterCars = (props) => {
    return (
        <div >
            <CarOptionContext >
                <ManageCars />
            </CarOptionContext>
        </div>
    )
}

export default RegisterCars