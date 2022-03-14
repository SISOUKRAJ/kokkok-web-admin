import React, { useState } from "react"
import { Row, Col, Form, Input, Select, DatePicker, Button, Modal, Tabs, Table, InputNumber } from "antd"
import { EditOutlined } from '@ant-design/icons';
import "./index.css"

const ModalRegister = (props) => {
    const [visible, setVisible] = useState(false);
    const [tabActive, setTabActive] = useState("cars");
    const { cars, car_type, car_brands, car_models } = props
    // console.log("car_type==>>>", car_type);
    // console.log("car_brands==>>>", car_brands);
    // console.log("car_models==>>>", car_models);
    // console.log("===>", tabActive);

    const { TabPane } = Tabs;

    function callback(key) {
        // console.log(key);
        setTabActive(key);
    }

    const onFinish = (values) => {
        if (tabActive === "cars") {
            console.log("===>", "aaaa");
        } else {
            console.log("===>", "bbbb");
        }

        // const body = {
        //     ...values,
        //     fullName: `${values.first_name} ${values.last_name}`,
        //     birthday: moment(values.birthday._d).format("DD/MM/YYYY"),
        //     profile: !!values.profile && values.profile[0],
        //     identity_card: !!values.identity_card && values.identity_card[0],
        //     driver_license: !!values.driver_license && values.driver_license[0],
        // }
        console.log("data: ", values);
    };

    const columns_type = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
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
    ];

    const columns_model = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
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
    ];

    const columns_brands = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }
    ];

    const columns_price = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Distance',
            dataIndex: 'distance',
            key: 'distance',
        },
        {
            title: 'Type',
            dataIndex: 'car_type',
            key: 'car_type',
        }
    ]

    const columns_license_pate = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
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
        }
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

    const provinces = [
        {
            id: "Attapeu province",
            label: "Attapeu province",
        },
        {
            id: "Bokeo province",
            label: "Bokeo province",
        },
        {
            id: "Bolikhamsai province",
            label: "Bolikhamsai province",
        },
        {
            id: "Champasak  province",
            label: "Champasak  province",
        },
        {
            id: "Houaphanh  province",
            label: "Houaphanh  province",
        },
        {
            id: "Khammouane  province",
            label: "Khammouane  province",
        },
        {
            id: "Luang Namtha province",
            label: "Luang Namtha province",
        },
        {
            id: "Luang Prabang province",
            label: "Luang Prabang province",
        },
        {
            id: "Oudomxay  province",
            label: "Oudomxay  province",
        },
        {
            id: "Phongsaly  province",
            label: "Phongsaly  province",
        },
        {
            id: "Salavan  province",
            label: "Salavan  province",
        },
        {
            id: "Savannakhet  province",
            label: "Savannakhet  province",
        },
        {
            id: "Vientiane  province",
            label: "Vientiane  province",
        },
        {
            id: "Vientiane Prefecture",
            label: "Vientiane Prefecture",
        },
        {
            id: "Sainyabuli province",
            label: "Sainyabuli province",
        },
        {
            id: "Sekong province",
            label: "Sekong province",
        },
        {
            id: "Xaisomboun  province",
            label: "Xaisomboun  province",
        },
        {
            id: "Xiangkhouang province",
            label: "Xiangkhouang province",
        }
    ]

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
                    name: "type_name",
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
                    name: "brands_name",
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
                    name: "model_name",
                    message: "Please input Name!",
                    placeholder: "Name",
                    type: "text",
                },
                {
                    label: "Type",
                    name: "car_type",
                    message: "Please input Car's Type!",
                    placeholder: "select Type",
                    Option: car_type,
                    type: "select"
                },
                {
                    label: "Brands",
                    name: "car_brands",
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
                data: [],
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
                    name: "car",
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
                data: [],
                columns: columns_price
            },
            form: [
                {
                    label: "Price",
                    name: "price",
                    message: "Please input Price!",
                    placeholder: "1000000",
                    type: "text",
                },
                {
                    label: "Distance",
                    name: "distance",
                    message: "Please input Distance!",
                    placeholder: "1000",
                    type: "text",
                },
                {
                    label: "Car Type",
                    name: "car_type",
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
            label: "Note",
            name: "note",
            message: "Please input your Note!",
            placeholder: "Note",
            type: "text",
        }, {
            label: "Color",
            name: "color",
            message: "Please input your Color!",
            placeholder: "red",
            type: "text",
        }
    ]

    const car_form_middle = [
        {
            label: "Vehicle Type",
            name: "car_type",
            message: "Please input Vehicle Type!",
            placeholder: "select Vehicle Type",
            Option: car_type,
            type: "select",
        },
        {
            label: "Vehicle Brands",
            name: "car_brands",
            message: "Please input Vehicle Brands!",
            placeholder: "select Vehicle Brands",
            Option: car_brands,
            type: "select",
        },
        {
            label: "Vehicle Model",
            name: "car_model",
            message: "Please input Vehicle Model!",
            placeholder: "select Vehicle Model",
            Option: car_models,
            type: "select",
        },
    ]


    return (
        <div >
            <Button type="primary" onClick={() => setVisible(true)} className="BTNManage" icon={<EditOutlined />}>
                Manage
            </Button>
            <Modal
                title="Manage Cars"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={"90%"}
                footer={null}
            >
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Cars" key="cars">
                        <Form layout="vertical" onFinish={onFinish}>
                            <Row>
                                <Col md={8} className="inputSection">
                                    {car_form_left.map((item, index) =>
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
                                    <Col md={12} style={{ padding: 10 }}>
                                        <Table columns={item.table.columns} dataSource={item.table.data} pagination={{ pageSize: 5 }} scroll={{ y: 300 }} />
                                    </Col>
                                    <Col md={12} style={{ padding: 10 }}>
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
                                                        ]}>
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
                                                                ]}>
                                                                <InputNumber placeholder={item.placeholder} style={{ width: "100%" }} />
                                                            </Form.Item>
                                                            :
                                                            null
                                            )}
                                            <Button type="primary" htmlType="submit" className="BTNRegister">Submit</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </TabPane>
                        )
                    })}
                </Tabs>
            </Modal>
        </div>
    )
}

export default ModalRegister