import React, { useState } from "react"
import { Row, Col, Form, Input, Select, Button, Modal, InputNumber, message } from "antd"
import { EditOutlined } from '@ant-design/icons';
import axios from "axios";
import "./index.css"

const ModalRegister = (props) => {
    const [form] = Form.useForm();

    const [visible, setVisible] = useState(false);
    // const [tabActive, setTabActive] = useState("cars");
    // const { data, tabActive, car_brands, car_type, car_models, car_type_second, drivers } = props
    const { data, tabActive, car_brands, car_type, car_models, car_type_second, drivers, provinces, cars } = props
    // console.log("car_type==>>>", car_type);
    // console.log("car_brands==>>>", car_brands);
    // console.log("car_models==>>>", car_models);
    // console.log("===>", data);
    // console.log(`${tabActive}`, tabActive);

    const onFinish = async (values) => {
        const dataForm = {
            ...values,
            id: data.id,
        }
        if (tabActive === "cars") {
            handleUpdate("/api/v1/admin/oauth/car", dataForm);
        } else if (tabActive === "car_type") {
            handleUpdate("/api/v1/admin/oauth/car-type", dataForm);
        } else if (tabActive === "car_brands") {
            handleUpdate("/api/v1/oauth/car-brand", dataForm);
        } else if (tabActive === "car_model") {
            handleUpdate("/api/v1/admin/oauth/car-model", dataForm);
        } else if (tabActive === "license_plate") {
            handleUpdate("/api/v1/admin/oauth/car-license-plate", dataForm);
        } else if (tabActive === "price") {
            handleUpdate("/api/v1/admin/oauth/car-price", dataForm);
        }
    };

    switch (tabActive) {
        case "cars":
            form.setFieldsValue({
                name: data.name,
                color: data.color,
                note: data.note,
                driver_id: !!data.driver && data.driver.id,
                car_brand_id: !!data.car_brand && data.car_brand.id,
                car_model_id: !!data.car_model && data.car_model.id,
                car_type_id: !!data.car_type && data.car_type.id,
                car_type_second_id: !!data.car_type_second && data.car_type_second.id,
            })
            break;
        case "car_type":
            form.setFieldsValue({
                name: data.name,
            })
            break;
        case "car_brands":
            form.setFieldsValue({
                name: data.name,
            })
            break;
        case "car_model":
            form.setFieldsValue({
                name: data.name,
                car_type_id: !!data.car_type && data.car_type_id,
                car_brand_id: !!data.car_brand && data.car_brand_id,
            })
            break;
        case "license_plate":
            form.setFieldsValue({
                word: data.word,
                number: data.number,
                province: data.province,
                car_id: !!data.car && data.car.id,
            })
            break;
        case "price":
            form.setFieldsValue({
                price: data.price,
                distance: data.distance,
                car_type_id: !!data.car_type && data.car_type.id,
            })
            break;
        default:
            message.warning("data not found, please check again");
            break;
    }

    const handleUpdate = async (api, body) => {
        console.log("api==>>>", api);
        console.log("body==>>>", body);
        try {
            await axios.put(`${process.env.REACT_APP_API_URL_V1}${api}/${body.id}`, body,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then(res => {
                    // setCars(res.data.data);
                    // console.log(res.data);
                    message.success("Update success");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                    message.error("Update fail, Please try again later or contact admin");
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div >
            <Button onClick={() => setVisible(true)} style={{ marginLeft: 10, backgroundColor: "#ffc107", color: "white", border: "none" }} icon={<EditOutlined />} />

            <Modal
                title={
                    tabActive === "cars" ?
                        `Update Car`
                        : tabActive === "car_type" ?
                            `Update Type`
                            : tabActive === "car_brands" ?
                                `Update Brand`
                                : tabActive === "car_model" ?
                                    `Update Modal`
                                    : tabActive === "license_plate" ?
                                        `Update License Plate`
                                        : tabActive === "price" ?
                                            `Update Price`
                                            : null
                }
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={"60%"}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    {tabActive === "cars" ?
                        <Row>
                            <Col sm={12} style={{ padding: 10 }}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                >
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item
                                    label="Color"
                                    name="color"
                                >
                                    <Input placeholder="Color" />
                                </Form.Item>
                                <Form.Item
                                    label="Note"
                                    name="note"
                                >
                                    <Input placeholder="Note" />
                                </Form.Item>
                                <Form.Item
                                    label="Driver"
                                    name="driver_id"
                                >
                                    <Select placeholder="select Driver">
                                        {!!drivers && drivers.map((option, index) =>
                                            <Select.Option key={index} value={option.id}>{option.first_name + " " + option.last_name}</Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col sm={12} style={{ padding: 10 }}>
                                <Form.Item
                                    label="Brand"
                                    name="car_brand_id"
                                >
                                    <Select placeholder="select Brand">
                                        {!!car_brands && car_brands.map((option, index) =>
                                            <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Model"
                                    name="car_model_id"
                                >
                                    <Select placeholder="select Model">
                                        {!!car_models && car_models.map((option, index) =>
                                            <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Type"
                                    name="car_type_id"
                                >
                                    <Select placeholder="select Type">
                                        {!!car_type && car_type.map((option, index) =>
                                            <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Type For Company"
                                    name="car_type_second_id"
                                >
                                    <Select placeholder="select Type">
                                        {!!car_type_second && car_type_second.map((option, index) =>
                                            <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                                <Button htmlType="submit" className="BTNUpdate">Update</Button>
                            </Col>
                        </Row>
                        : tabActive === "car_type" ?
                            <Row>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    style={{ width: "100%" }}
                                >
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Button htmlType="submit" className="BTNUpdate">Update</Button>
                            </Row>
                            : tabActive === "car_brands" ?
                                <Row>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        style={{ width: "100%" }}
                                    >
                                        <Input placeholder="Name" />
                                    </Form.Item>
                                    <Button htmlType="submit" className="BTNUpdate">Update</Button>
                                </Row>
                                : tabActive === "car_model" ?
                                    <Row>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            style={{ width: "100%" }}
                                        >
                                            <Input placeholder="Name" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Type"
                                            name="car_type_id"
                                            style={{ width: "100%" }}
                                        >
                                            <Select placeholder="select Type" >
                                                {!!car_type && car_type.map((option, index) =>
                                                    <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                )}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            label="Brand"
                                            name="car_brand_id"
                                            style={{ width: "100%" }}
                                        >
                                            <Select placeholder="select Brand" >
                                                {!!car_brands && car_brands.map((option, index) =>
                                                    <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                )}
                                            </Select>
                                        </Form.Item>
                                        <Button htmlType="submit" className="BTNUpdate">Update</Button>
                                    </Row>
                                    : tabActive === "license_plate" ?
                                        <Row>
                                            <Form.Item
                                                label="Word"
                                                name="word"
                                                style={{ width: "100%" }}
                                            >
                                                <Input placeholder="ກກ" maxLength={2} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Number"
                                                name="number"
                                                style={{ width: "100%" }}
                                                rules={[
                                                    {
                                                        pattern: /^(?:\d*)$/,
                                                        message: "Value should contain just number",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="9988" maxLength={4} />
                                            </Form.Item>
                                            <Form.Item
                                                label="Province"
                                                name="province"
                                                style={{ width: "100%" }}
                                            >
                                                <Select placeholder="select Province" >
                                                    {!!provinces && provinces.map((option, index) =>
                                                        <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                    )}
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                label="Car"
                                                name="car_id"
                                                style={{ width: "100%" }}
                                            >
                                                <Select placeholder="select Car" >
                                                    {!!cars && cars.map((option, index) =>
                                                        <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                    )}
                                                </Select>
                                            </Form.Item>
                                            <Button htmlType="submit" className="BTNUpdate">Update</Button>
                                        </Row>
                                        : tabActive === "price" ?
                                            <Row>
                                                <Form.Item
                                                    label="Price"
                                                    name="price"
                                                    style={{ width: "100%" }}
                                                    rules={[
                                                        {
                                                            pattern: /^(?:\d*)$/,
                                                            message: "Value should contain just number",
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber placeholder="Price" style={{ width: "100%" }} />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Distance"
                                                    name="distance"
                                                    style={{ width: "100%" }}
                                                    rules={[
                                                        {
                                                            pattern: /^(?:\d*)$/,
                                                            message: "Value should contain just number",
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber placeholder="Distance" style={{ width: "100%" }} />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Type"
                                                    name="car_type_id"
                                                    style={{ width: "100%" }}
                                                >
                                                    <Select placeholder="select Brand" >
                                                        {!!car_type && car_type.map((option, index) =>
                                                            <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                        )}
                                                    </Select>
                                                </Form.Item>
                                                <Button htmlType="submit" className="BTNUpdate">Update</Button>
                                            </Row>
                                            : null}
                </Form>
            </Modal>
        </div>
    )
}

export default ModalRegister