import React, { useContext } from "react"
import { Row, Col, Form, Input, InputNumber, DatePicker, Select, Upload, Button, Tabs, Table } from "antd"
import { CDOptionContext } from "../../context/getCarOption";

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

const RegisterCars = () => {
    const { car_brands, car_models, car_type } = useContext(CDOptionContext);

    // console.log("car_brands==>>>", car_brands);
    // console.log("car_models==>>>", car_models);
    // console.log("car_type==>>>", car_type);

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

    const { TabPane } = Tabs;

    function callback(key) {
        // console.log(key);
    }

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
        <div style={{ padding: 10 }}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Car" key="car">
                    <Row>
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
                <TabPane tab="Car-Type" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Car-Brands" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Car-Model" key="4">
                    Content of Tab Pane 4
                </TabPane>
            </Tabs>
            {/* <Form layout="vertical" onFinish={onFinish}> */}
            {/* <Row>
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
                </Row> */}
            {/* </Form> */}
        </div>
    )
}

export default RegisterCars