import React, { useState } from "react"
import { Row, Col, Form, Input, Select, DatePicker, Button, Modal, Tabs, Table, InputNumber } from "antd"

const car_form = [
    {
        label: "Vehicle Brand",
        name: "car_brand",
        message: "Please input your Vehicle Brand!",
        placeholder: "select Vehicle Brand",
        Option: [
            { value: "TOYOTA", label: "TOYOTA" },
            { value: "HONDA", label: "HONDA" },
        ],
        type: "select",
    },
    {
        label: "Model",
        name: "model",
        message: "Please input your Model!",
        placeholder: "Camry",
        type: "text",
    },
    {
        label: "License plate",
        name: "license_plate",
        message: "Please input your License plate!",
        placeholder: "ກກ 9999",
        type: "text",
    },
    {
        label: "User Type",
        name: "user_type",
        message: "Please input your User Type!",
        placeholder: "select User Type",
        Option: [
            { value: "Gold", label: "Gold" },
            { value: "Silver", label: "Silver" },
        ],
        type: "select",
    },
    {
        label: "Fee",
        name: "fee",
        message: "Please input your Fee!",
        placeholder: "50000",
        type: "number",
    }
]

const ModalRegister = (props) => {
    const [visible, setVisible] = useState(false);
    const { car_type, car_brands, car_models } = props
    const { TabPane } = Tabs;

    function callback(key) {
        // console.log(key);
    }

    const onFinish = (values) => {

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

    const columns = [
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

    const formate_car_type = car_type.map(item => {
        return {
            id: item.id,
            name: item.name,
            price: item.car_price.price,
            distance: item.car_price.distance,
            total_amount: item.car_price.total_amount,
        }
    })

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)}>
                Manage
            </Button>
            <Modal
                title="Manage Car"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Cars" key="cars">
                        <Form layout="vertical" onFinish={onFinish}>
                            <Row>
                                <Col md={8} className="inputSection">
                                </Col>
                                <Col md={8} className="inputSection">
                                    {car_form.map((item, index) =>
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
                                                            <Select.Option key={index} value={option.value}>{option.label}</Select.Option>
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
                                </Col>
                                <Col md={8} className="inputSection">
                                    <Button type="primary" htmlType="submit" className="BTNRegister">
                                        Register
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </TabPane>
                    <TabPane tab="Car Price" key="car_price">
                        price
                    </TabPane>
                    <TabPane tab="Car Type" key="car_type">
                        Con <Row>
                            <Col md={12} style={{ padding: 10 }}>
                                <Table dataSource={formate_car_type} columns={columns} />
                            </Col>
                            <Col md={12} style={{ padding: 10 }}>
                                <Form layout="vertical" onFinish={onFinish}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Car Brands" key="car_brands">
                        Brands
                    </TabPane>
                    <TabPane tab="Car Model" key="car_model">
                        model
                    </TabPane>
                    <TabPane tab="License Plate" key="license_plate">
                        License Plate
                    </TabPane>
                </Tabs>
            </Modal>
        </div>
    )
}

export default ModalRegister