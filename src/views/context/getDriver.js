import React, { useState, useEffect, createContext } from "react"
import axios from "axios";

export const DriverOptionContext = createContext({ drivers: [] });

const GetDriver = (props) => {
    const [drivers, setDrivers] = useState([]);
    const [driverId,setDriverId]=useState('')
    const get_drivers = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/driver`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setDrivers(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        get_drivers();
    }, []);

    return (
        <div>
            <DriverOptionContext.Provider
                value={{ drivers,setDriverId,driverId }}
            >
                {props.children}
            </DriverOptionContext.Provider>
        </div>
    )
}

export default GetDriver