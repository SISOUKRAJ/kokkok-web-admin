import React, { useContext, useState } from "react"
import { Row, Col, Button, Input, Select } from "antd"
import { CarOptionContext } from "../../../views/context/getCarOption";
import { DriverOptionContext } from "../../../views/context/getDriver";
import { Link } from "react-router-dom";
import { SmallDashOutlined } from '@ant-design/icons';
import TableCars from "../table";
import "./index.css";

const FilterData = () => {
    const { Option } = Select;

    const { cars, car_brands, car_type, car_models, car_type_second } = useContext(CarOptionContext);
    const { drivers } = useContext(DriverOptionContext);
    // console.log("drivers==>>>", drivers);

    const [form, setForm] = useState({
        name: "",
        brand: "",
        model: "",
        type: "",
    });
    // console.log("form==>>>", form);

    const dataName = form.name !== null ? cars.filter(car => car.name.toLowerCase().includes(form.name.toLowerCase())) : cars;
    // console.log("data==>>>", dataName);
    const dataBrand = form.brand === "" ? dataName : dataName.filter(brand => brand.car_brand.id === parseInt(form.brand));
    // console.log("dataBrand==>>>", dataBrand);
    const dataModel = form.model === "" ? dataBrand : dataBrand.filter(model => model.car_model.id === parseInt(form.model));
    // console.log("dataModel==>>>", dataModel);
    const dataType = form.type === "" ? dataModel : dataModel.filter(type => type.car_type.id === parseInt(form.type));
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
                                    <Input
                                        placeholder="search name"
                                        className="searchCarInput"
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        value={form.name}
                                    />
                                </Col>
                                <Col md={6} style={{ width: "100%" }}>
                                    <Select
                                        name="brands"
                                        className="SelectOption"
                                        placeholder="select Brands"
                                        value={form.brand}
                                        onSelect={(value) => setForm({ ...form, brand: value })}
                                    >
                                        <Option value="">Select Brands</Option>
                                        {car_brands.map((item, index) => {
                                            return <Option key={index} value={item.id}>{item.name}</Option>
                                        })}
                                    </Select>
                                </Col>
                                <Col md={6} style={{ width: "100%" }}>
                                    <Select
                                        name="model"
                                        className="SelectOption"
                                        placeholder="select Model"
                                        value={form.model}
                                        onSelect={(value) => setForm({ ...form, model: value })}
                                    >
                                        <Option value="">Select Model</Option>
                                        {car_models.map((item, index) => {
                                            return <Option key={index} value={item.id}>{item.name}</Option>
                                        })}
                                    </Select>
                                </Col>
                                <Col md={6} style={{ width: "100%" }}>
                                    <Select
                                        name="Type"
                                        className="SelectOption"
                                        placeholder="select Type"
                                        value={form.type}
                                        onSelect={(value) => setForm({ ...form, type: value })}
                                    >
                                        <Option value="">Select Type</Option>
                                        {car_type.map((item, index) => {
                                            return <Option key={index} value={item.id}>{item.name}</Option>
                                        })}
                                    </Select>
                                </Col>
                            </Row>
                            <Button type="link" className="resetButton"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setForm({
                                        name: "",
                                        brand: "",
                                        model: "",
                                        type: "",
                                    })
                                }}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                    <div className="amountBox">
                        <h3 className="amountItem">Total Cars: <strong style={{ color: "#FF9E1B " }}>{!!cars && cars.length}</strong> </h3>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="registerBox">
                        <Link to="/register/cars">
                            <Button type="primary"
                                icon={<SmallDashOutlined />}
                                className="registerButton"
                            >
                                Manage Cars
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <div style={{ padding: 10 }}>
                <TableCars
                    cars={dataType}
                    car_brands={car_brands}
                    car_type={car_type}
                    car_models={car_models}
                    car_type_second={car_type_second}
                    drivers={drivers}
                />
            </div>
        </div>
    )
}

export default FilterData