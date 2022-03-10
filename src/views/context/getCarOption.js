import React, {
    useState,
    createContext,
    useEffect
} from "react";
import axios from "axios";

// export const CDOptionContext = createContext({ drivers: [], cars: [], car_type: [], car_brands: [], car_models: [] });
export const CDOptionContext = createContext({ drivers: [] });

const GetCarOption = (props) => {

    const [drivers, setDrivers] = useState([]);
    const [cars, setCars] = useState([]);
    const [car_type, setCarType] = useState([]);
    const [car_brands, setCarBrands] = useState([]);
    const [car_models, setCarModels] = useState([]);

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

    const get_cars = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCars(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }
    const get_car_type = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car-type`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCarType(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }
    const get_car_brands = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/oauth/car-brand`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCarBrands(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }
    const get_car_models = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car-model`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCarModels(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        get_drivers();
        get_cars();
        get_car_type();
        get_car_brands();
        get_car_models();
    }, []);

    // console.log("drivers", drivers);
    // console.log("cars", cars);
    // console.log("car_type", car_type);
    // console.log("car_brands", car_brands);
    // console.log("car_models", car_models);

    return (
        <div>
            <CDOptionContext.Provider
                value={{ drivers, cars, car_brands, car_models, car_type }}
            // value={{ drivers }}
            >
                {props.children}
            </CDOptionContext.Provider>
        </div>
    )
}

export default GetCarOption