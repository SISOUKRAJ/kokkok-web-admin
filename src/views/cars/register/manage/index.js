import React, { useState, useContext } from "react"
import { Row, Col, Form, Input, Select, Popconfirm, Button, Tabs, Table, InputNumber, message } from "antd"
import { DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { CarOptionContext } from "../../../../views/context/getCarOption";
import { DriverOptionContext } from "../../../../views/context/getDriver";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalUpdate from "../../Modal";
import "./index.css";

const ManageCars = () => {
    const [form] = Form.useForm();
    const [tabActive, setTabActive] = useState("cars");
    const { cars, car_brands, car_type, car_models, car_type_second, car_price, car_license_plate, setCarRefresh } = useContext(CarOptionContext);
    const { drivers } = useContext(DriverOptionContext);

    const { TabPane } = Tabs;

    function callback(key) {
        setTabActive(key);
    }

    const onFinish = async (values) => {
        if (tabActive === "cars") {
            handleInsert("/api/v1/admin/oauth/car", values);
        } else if (tabActive === "car_type") {
            handleInsert("/api/v1/admin/oauth/car-type", values);
        } else if (tabActive === "car_brands") {
            handleInsert("/api/v1/oauth/car-brand", values);
        } else if (tabActive === "car_model") {
            handleInsert("/api/v1/admin/oauth/car-model", values);
        } else if (tabActive === "license_plate") {
            handleInsert("/api/v1/admin/oauth/car-license-plate", values);
        } else if (tabActive === "price") {
            handleInsert("/api/v1/admin/oauth/car-price", values);
        }
    };

    const handleInsert = async (api, body) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL_V1}${api}`, body,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then(res => {
                    setCarRefresh(res.data.data);
                    message.success("Register success");
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
            message.error("Register fail, Please try again later or contact admin");
        }
    }

    const onDelete = (key) => {
        if (tabActive === "cars") {
            handleDelete("/api/v1/admin/oauth/car", key);
        } else if (tabActive === "car_type") {
            handleDelete("/api/v1/admin/oauth/car-type", key);
        } else if (tabActive === "car_brands") {
            handleDelete("/api/v1/oauth/car-brand", key);
        } else if (tabActive === "car_model") {
            handleDelete("/api/v1/admin/oauth/car-model", key);
        } else if (tabActive === "license_plate") {
            handleDelete("/api/v1/admin/oauth/car-license-plate", key);
        } else if (tabActive === "price") {
            handleDelete("/api/v1/admin/oauth/car-price", key);
        }
    };

    const handleDelete = async (api, body) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL_V1}${api}/${body}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then(res => {
                    message.success("Delete success");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
            message.error("Delete fail, Please try again later or contact admin");
        }
    }

    const provinces = [
        {
            id: "ອັດຕະປື",
            label: "ອັດຕະປື",
        },
        {
            id: "ບໍ່ແກ້ວ",
            label: "ບໍ່ແກ້ວ",
        },
        {
            id: "ບໍລິຄໍາໄຊ",
            label: "ບໍລິຄໍາໄຊ",
        },
        {
            id: "ຈໍາປາສັກ",
            label: "ຈໍາປາສັກ",
        },
        {
            id: "ຫົວພັນ",
            label: "ຫົວພັນ",
        },
        {
            id: "ຄໍາມ່ວນ",
            label: "ຄໍາມ່ວນ",
        },
        {
            id: "ຫຼວງນ້ຳທາ",
            label: "ຫຼວງນ້ຳທາ",
        },
        {
            id: "ຫຼວງພະບາງ",
            label: "ຫຼວງພະບາງ",
        },
        {
            id: "ອຸດົມໄຊ",
            label: "ອຸດົມໄຊ",
        },
        {
            id: "ຜົ້ງສາລີ",
            label: "ຜົ້ງສາລີ",
        },
        {
            id: "ສາລະວັນ",
            label: "ສາລະວັນ",
        },
        {
            id: "ສະຫວັນນະເຂດ",
            label: "ສະຫວັນນະເຂດ",
        },
        {
            id: "ວຽງຈັນ",
            label: "ວຽງຈັນ",
        },
        {
            id: "ກຳແພງນະຄອນ",
            label: "ກຳແພງນະຄອນ",
        },
        {
            id: "ໄຊຍະບູລີ",
            label: "ໄຊຍະບູລີ",
        },
        {
            id: "ເຊກອງ",
            label: "ເຊກອງ",
        },
        {
            id: "ໄຊສົມບູນ",
            label: "ໄຊສົມບູນ",
        },
        {
            id: "ຊຽງຂວາງ",
            label: "ຊຽງຂວາງ",
        }
    ]

    const columns_type = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            align: 'center',
            width: 50,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text, record) => {
                return <>{text.toLocaleString()}</>
            }
        },
        {
            title: 'Distance',
            dataIndex: 'distance',
            key: 'distance',
            render: (text, record) => {
                return <>{text.toLocaleString()}</>
            }
        },
        {
            title: 'Total Amount',
            dataIndex: 'total_amount',
            key: 'total_amount',
            render: (text, record) => {
                return <>{text.toLocaleString()}</>
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            fixed: 'right',
            render: (_, record) =>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ModalUpdate data={record} tabActive={tabActive} />

                    <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id)}>
                        <Button
                            type="link"
                            icon={<DeleteOutlined />}
                            style={{ marginLeft: 10, backgroundColor: "#dc3545", color: "white", border: "none", paddingLeft: 10, paddingRight: 10 }}
                        />
                    </Popconfirm>
                </div>
        },
    ];

    const columns_model = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            align: 'center',
            width: 50,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: (text, record) => {
                return <>{record.car_brand.name}</>
            }
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return <>{record.car_type.name}</>
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            fixed: 'right',
            render: (text, record) =>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ModalUpdate data={record} tabActive={tabActive} car_brands={car_brands} car_type={car_type} />

                    <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id)}>
                        <Button
                            type="link"
                            icon={<DeleteOutlined />}
                            style={{ marginLeft: 10, backgroundColor: "#dc3545", color: "white", border: "none", paddingLeft: 10, paddingRight: 10 }}
                        />
                    </Popconfirm>
                </div>
        },
    ];

    const columns_brands = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            align: 'center',
            width: 50,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ModalUpdate data={record} tabActive={tabActive} />

                    <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id)}>
                        <Button type="link" icon={<DeleteOutlined />} style={{ marginLeft: 10, backgroundColor: "#dc3545", color: "white", border: "none" }} />
                    </Popconfirm>
                </div>
        },
    ];

    const columns_price = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            align: 'center',
            width: 50,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text, record) => {
                return <>{text.toLocaleString()}</>
            }
        },
        {
            title: 'Distance(m)',
            dataIndex: 'distance',
            key: 'distance',
            render: (text, record) => {
                return <>{text.toLocaleString()}</>
            }
        },
        {
            title: 'Total Amount',
            dataIndex: 'total_amount',
            key: 'total_amount',
            render: (text, record) => {
                return <>{text.toLocaleString()}</>
            }
        },
        {
            title: 'Type',
            dataIndex: 'car_type_id',
            key: 'car_type',
            render: (text, record) => {
                return <>{record.car_type.name}</>
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            fixed: 'right',
            render: (text, record) =>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ModalUpdate data={record} tabActive={tabActive} car_type={car_type} />

                    <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id)}>
                        <Button
                            type="link"
                            icon={<DeleteOutlined />}
                            style={{ marginLeft: 10, backgroundColor: "#dc3545", color: "white", border: "none", paddingLeft: 10, paddingRight: 10 }}
                        />
                    </Popconfirm>
                </div>
        },
    ]

    const columns_license_pate = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            align: 'center',
            width: 50,
        },
        {
            title: 'Word',
            dataIndex: 'word',
            key: 'word',
        },
        {
            title: 'Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Province',
            dataIndex: 'province',
            key: 'province',
        },
        {
            title: 'Car',
            dataIndex: 'car',
            key: 'car',
            render: (text, record) => {
                return <>{record.car.name}</>
            }
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            fixed: 'right',
            render: (_, record) =>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ModalUpdate data={record} tabActive={tabActive} provinces={provinces} cars={cars} />

                    <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id)}>
                        <Button
                            type="link"
                            icon={<DeleteOutlined />}
                            style={{ marginLeft: 10, backgroundColor: "#dc3545", color: "white", border: "none", paddingLeft: 10, paddingRight: 10 }}
                        />
                    </Popconfirm>
                </div>
        },
    ]

    const formate_car_type = car_type.map(item => {
        return {
            ...item,
            key: item.id,
            price: item.car_price.price,
            distance: item.car_price.distance,
            total_amount: item.car_price.total_amount,
        }
    })

    const formate_brands = car_brands.map(item => {
        return {
            ...item,
            key: item.id,
        }
    })

    const formate_models = car_models.map(item => {
        return {
            ...item,
            key: item.id,
        }
    })

    const formate_price = car_price.map(item => {
        return {
            ...item,
            key: item.id,
        }
    })

    const formate_license_plate = car_license_plate.map(item => {
        return {
            ...item,
            key: item.id,
        }
    })

    const tab_formate = [
        {
            key: "car_type",
            label: "Type",
            table: {
                data: formate_car_type,
                columns: columns_type
            },
            form: [
                {
                    label: "Name",
                    name: "name",
                    message: "Please input name!",
                    placeholder: "Name",
                    type: "text",
                },
            ]
        },
        {
            key: "car_brands",
            label: "Brands",
            table: {
                data: formate_brands,
                columns: columns_brands
            },
            form: [
                {
                    label: "Name",
                    name: "name",
                    message: "Please input Name!",
                    placeholder: "Name",
                    type: "text",
                },
            ]
        },
        {
            key: "car_model",
            label: "Model",
            table: {
                data: formate_models,
                columns: columns_model
            },
            form: [
                {
                    label: "Name",
                    name: "name",
                    message: "Please input Name!",
                    placeholder: "Name",
                    type: "text",
                },
                {
                    label: "Type",
                    name: "car_type_id",
                    message: "Please input Car's Type!",
                    placeholder: "select Type",
                    Option: car_type,
                    type: "select"
                },
                {
                    label: "Brands",
                    name: "car_brand_id",
                    message: "Please input Car's Brands!",
                    placeholder: "select Brands",
                    Option: car_brands,
                    type: "select"
                },
            ]
        },
        {
            key: "license_plate",
            label: "License Plate",
            table: {
                data: formate_license_plate,
                columns: columns_license_pate
            },
            form: [
                {
                    label: "Word",
                    name: "word",
                    message: "Please input word!",
                    placeholder: "ກກ",
                    type: "text",
                },
                {
                    label: "Number",
                    name: "number",
                    message: "Please input Number!",
                    placeholder: "9988",
                    type: "text",
                },
                {
                    label: "Province",
                    name: "province",
                    message: "Please input Province!",
                    placeholder: "select Province",
                    Option: provinces,
                    type: "select"
                },
                {
                    label: "Car",
                    name: "car_id",
                    message: "Please input Car!",
                    placeholder: "select Car",
                    Option: cars,
                    type: "select"
                },
            ]
        },
        {
            key: "price",
            label: "Price",
            table: {
                data: formate_price,
                columns: columns_price
            },
            form: [
                {
                    label: "Price",
                    name: "price",
                    message: "Please input Price!",
                    placeholder: "1000000",
                    type: "number",
                },
                {
                    label: "Distance(m)",
                    name: "distance",
                    message: "Please input Distance!",
                    placeholder: "1000",
                    type: "number",
                },
                {
                    label: "Car Type",
                    name: "car_type_id",
                    message: "Please input Car's Type!",
                    placeholder: "select Type",
                    Option: car_type,
                    type: "select"
                },
            ]
        }
    ]

    const car_form_left = [
        {
            label: "Name",
            name: "name",
            message: "Please input your Name!",
            placeholder: "Name",
            type: "text",
        },
        {
            label: "Color",
            name: "color",
            message: "Please input your Color!",
            placeholder: "red",
            type: "text",
        },
        {
            label: "Note",
            name: "note",
            message: "Please input your Note!",
            placeholder: "Note",
            type: "text",
        },
    ]

    const car_form_middle = [
        {
            label: "Vehicle Brands",
            name: "car_brand_id",
            message: "Please input Vehicle Brands!",
            placeholder: "select Vehicle Brands",
            Option: car_brands,
            type: "select",
        },
        {
            label: "Vehicle Model",
            name: "car_model_id",
            message: "Please input Vehicle Model!",
            placeholder: "select Vehicle Model",
            Option: car_models,
            type: "select",
        },
        {
            label: "Vehicle Type",
            name: "car_type_id",
            message: "Please input Vehicle Type!",
            placeholder: "select Vehicle Type",
            Option: car_type,
            type: "select",
        },
        {
            label: "Vehicle Type for Company",
            name: "car_type_second_id",
            message: "Please input Vehicle Type!",
            placeholder: "select Vehicle Type",
            Option: car_type_second,
            type: "select",
        },
    ]

    const car_form_right = [
        {
            label: "Driver",
            name: "driver_id",
            message: "Please input Driver!",
            placeholder: "select Driver",
            Option: drivers,
            type: "select",
        },
    ]

    return (
        <div style={{ padding: 20 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Link to="/cars">
                    <h2
                        className="clickBack" style={{ color: "#ff9e1b" }}
                    >
                        Cars
                    </h2>
                </Link>
                <h2> / Manage Cars</h2>
            </div>

            <Tabs defaultActiveKey={`${tabActive}`} onChange={callback}>
                <TabPane tab="Cars" key="cars">
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row>
                            <Col md={8} className="inputSection">
                                {car_form_left.map((item, index) =>
                                    item.type === "text" ?
                                        <Form.Item
                                            key={index}
                                            label={item.label}
                                            name={item.name}
                                            required={item.name === "note" ? false : true}
                                            rules={[
                                                {
                                                    required: item.name === "note" ? false : true,
                                                    message: item.message,
                                                },
                                            ]}>
                                            <Input placeholder={item.placeholder} />
                                        </Form.Item>
                                        : item.type === "number" ?
                                            <Form.Item
                                                key={index}
                                                label={item.label}
                                                name={item.name}
                                                required
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: item.message,
                                                    },
                                                ]}>
                                                <InputNumber placeholder={item.placeholder} style={{ width: "100%" }} />
                                            </Form.Item>
                                            :
                                            null
                                )}
                            </Col>
                            <Col md={8} className="inputSection">
                                {car_form_middle.map((item, index) =>
                                    item.type === "select" ?
                                        <Form.Item
                                            key={index}
                                            label={item.label}
                                            name={item.name}
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message: item.message,
                                                },
                                            ]}
                                        >
                                            <Select placeholder={item.placeholder}>
                                                {item.Option.map((option, index) =>
                                                    <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                )}
                                            </Select>
                                        </Form.Item>
                                        : null
                                )}
                            </Col>
                            <Col md={8} className="inputSection">
                                {car_form_right.map((item, index) =>
                                    item.type === "select" ?
                                        <Form.Item
                                            key={index}
                                            label={item.label}
                                            name={item.name}
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message: item.message,
                                                },
                                            ]}
                                        >
                                            <Select placeholder={item.placeholder}>
                                                {item.Option.map((option, index) =>
                                                    <Select.Option key={index} value={option.id}>{option.first_name + " " + option.last_name}</Select.Option>
                                                )}
                                            </Select>
                                        </Form.Item>
                                        : null
                                )}
                                <Button type="primary" htmlType="submit" className="BTNRegister">
                                    Register
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </TabPane>

                {tab_formate.map((item, index) => {
                    return (
                        <TabPane tab={item.label} key={item.key}>
                            <Row>
                                <Col md={16} style={{ padding: 10 }}>
                                    <Table
                                        columns={item.table.columns}
                                        dataSource={item.table.data}
                                        pagination={{ pageSize: 5 }}
                                        scroll={{ y: 300, x: 500 }}
                                    />
                                </Col>
                                <Col md={8} style={{ padding: 10 }}>
                                    <Form layout="vertical" onFinish={onFinish}>
                                        {item.form.map((item, index) =>
                                            item.type === "text" ?
                                                <Form.Item
                                                    key={index}
                                                    label={item.label}
                                                    name={item.name}
                                                    required
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: item.message,
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder={item.placeholder} />
                                                </Form.Item>
                                                : item.type === "select" ?
                                                    <Form.Item
                                                        key={index}
                                                        label={item.label}
                                                        name={item.name}
                                                        required
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: item.message,
                                                            },
                                                        ]}
                                                    >
                                                        <Select placeholder={item.placeholder}>
                                                            {item.Option.map((option, index) =>
                                                                <Select.Option key={index} value={option.id}>{option.name}</Select.Option>
                                                            )}
                                                        </Select>
                                                    </Form.Item>
                                                    : item.type === "number" ?
                                                        <Form.Item
                                                            key={index}
                                                            label={item.label}
                                                            name={item.name}
                                                            required
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: item.message,
                                                                },
                                                                {
                                                                    pattern: /^(?:\d*)$/,
                                                                    message: "Value should contain just number",
                                                                },
                                                            ]}>
                                                            <InputNumber placeholder={item.placeholder} style={{ width: "100%" }} />
                                                        </Form.Item>
                                                        :
                                                        null
                                        )}
                                        <Button icon={<SaveOutlined />} type="primary" htmlType="submit" className="BTNRegister">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    )
}

export default ManageCars