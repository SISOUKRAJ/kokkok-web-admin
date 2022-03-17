import React, {
    useState,
    createContext,
    useEffect
} from "react";
import axios from "axios";

export const CarOptionContext = createContext({
    cars: [],
    car_type: [],
    car_type_second: [],
    car_brands: [],
    car_models: [],
    car_license_plate: [],
    car_price: [],
});

const GetCarOption = (props) => {
    const [cars, setCars] = useState([]);
    const [car_type, setCarType] = useState([]);
    const [car_type_second, setCarTypeSecond] = useState([]);
    const [car_brands, setCarBrands] = useState([]);
    const [car_models, setCarModels] = useState([]);
    const [car_price, setCarPrice] = useState([]);
    const [car_license_plate, setCarLicensePlate] = useState([]);

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
    const get_car_type_second = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car-type-second`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCarTypeSecond(res.data.data);
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

    const get_car_price = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car-price`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCarPrice(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }

    const get_car_license_plate = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car-license-plate`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                setCarLicensePlate(res.data.data);
                // console.log(res.data.data);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        get_cars();
        get_car_type();
        get_car_type_second();
        get_car_brands();
        get_car_models();
        get_car_price();
        get_car_license_plate();
    }, []);

    // console.log("drivers", drivers);
    // console.log("cars", cars);
    // console.log("car_type==>", car_type);
    // console.log("car_brands", car_brands);
    // console.log("car_models", car_models);

    return (
        <div>
            <CarOptionContext.Provider
                value={{ cars, car_brands, car_models, car_type, car_type_second, car_price, car_license_plate }}
            >
                {props.children}
            </CarOptionContext.Provider>
        </div>
    )
}

export default GetCarOption