import React, { useContext, useState } from "react"
import { Row, Col, Form, Input, Select, DatePicker, Button } from "antd"
import { Link } from "react-router-dom";
import { CarOptionContext } from "../../../views/context/getCarOption";
import ModalRegister from "../ModalRegister";
import TableCars from "../table";
import "./index.css";

const FilterData = () => {
    const { cars, car_brands, car_type, car_models } = useContext(CarOptionContext);
    // console.log("cars==>>>", cars);

    const [carName, setCarName] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carType, setCarType] = useState("");
    // console.log("carModel==>>>", carType);

    const dataName = carName !== null ? cars.filter(car => car.name.toLowerCase().includes(carName.toLowerCase())) : cars;
    // console.log("data==>>>", dataName);

    const dataBrand = carBrand === "" ? dataName : dataName.filter(brand => brand.car_brand_id === parseInt(carBrand));
    // console.log("dataBrand==>>>", dataBrand);
    const dataModel = carModel === "" ? dataBrand : dataBrand.filter(model => model.car_model_id === parseInt(carModel));
    // console.log("dataModel==>>>", dataModel);
    const dataType = carType === "" ? dataModel : dataModel.filter(type => type.car_type_id === parseInt(carType));
    // console.log("dataType==>>>", dataType);

    return (
        <div>
            <Row style={{ padding: 10 }}>
                <Col md={4}>
                    <h2 style={{ color: "#FF9E1B ", padding: 10 }}>Cars</h2>
                </Col>
                <Col md={16}>
                    <div className="formDriverBox">

                        <div className="searchBox">
                            <Row >
                                <Col md={6} style={{ width: "100%" }}>
                                    <input
                                        placeholder="search"
                                        className="searchCarInput"
                                        onChange={(e) => setCarName(e.target.value)}
                                        value={carName}
                                    />
                                </Col>
                                <Col md={6} style={{ width: "100%" }}>
                                    <select
                                        name="brands"
                                        className="searchCarInput"
                                        placeholder="select Brands"
                                        onChange={(e) => setCarBrand(e.target.value)}
                                        value={carBrand}
                                    >
                                        <option value="">Select Brands</option>
                                        {car_brands.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </Col>
                                <Col md={6} style={{ width: "100%" }}>
                                    <select
                                        name="model"
                                        className="searchCarInput"
                                        placeholder="select Model"
                                        onChange={(e) => setCarModel(e.target.value)}
                                        value={carModel}
                                    >
                                        <option value="">Select Model</option>
                                        {car_models.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </Col>
                                <Col md={6} style={{ width: "100%" }}>
                                    <select
                                        name="Type"
                                        className="searchCarInput"
                                        placeholder="select Type"
                                        onChange={(e) => setCarType(e.target.value)}
                                        value={carType}
                                    >
                                        <option value="">Select Type</option>
                                        {car_type.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </Col>
                            </Row>
                            <a className="resetButton"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCarName("")
                                    setCarBrand("")
                                    setCarModel("")
                                    setCarType("")
                                }}
                            >
                                Reset
                            </a>
                        </div>
                    </div>
                    <div className="amountBox">
                        <h3 className="amountItem">Total Cars: <strong style={{ color: "#FF9E1B " }}>{!!cars && cars.length}</strong> </h3>
                        {/* <h3 className="amountItem">On Trips Drivers: <strong style={{ color: "#FF9E1B " }}>0</strong> </h3> */}
                        {/* <h3 className="amountItem">Cars Drivers: <strong style={{ color: "#FF9E1B " }}>0</strong> </h3> */}
                    </div>
                </Col>
                <Col md={4}>
                    <div className="registerBox">
                        {/* <Link to="/register/cars">
                            <Button type="primary"
                                // icon={<DownloadOutlined />} 
                                // size={size}
                                className="registerButton"
                            // onClick={() => setScreen("register")}
                            >
                                Register
                            </Button>
                        </Link> */}
                        <ModalRegister cars={cars} car_brands={car_brands} car_models={car_models} car_type={car_type} />
                    </div>
                </Col>
            </Row>
            <div style={{ padding: 10 }}>
                <TableCars cars={dataType} />
            </div>
        </div>
    )
}

export default FilterData