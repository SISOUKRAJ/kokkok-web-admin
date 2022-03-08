import React from "react"
import { Row, Col, Form, Input, InputNumber, DatePicker, Select, Upload, Button } from "antd"
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import "./index.css"
import moment from "moment";

const user_form = [
    {
        label: "First Name",
        name: "first_name",
        message: "Please input your First Name!",
        placeholder: "kokkok",
        type: "text",
    },
    {
        label: "Last Name",
        name: "last_name",
        message: "Please input your Last Name!",
        placeholder: "DEV",
        type: "text",
    },
    {
        label: "Phone",
        name: "phone",
        message: "Please input your Phone!",
        placeholder: "20999999",
        type: "number",
    },
    {
        label: "Password",
        name: "password",
        message: "Please input your Password!",
        placeholder: "Password",
        type: "password",
    },
    {
        label: "Birthday",
        name: "birthday",
        message: "Please input your Birthday!",
        placeholder: "Birthday",
        type: "date",
    },
    {
        label: "Gender",
        name: "gender",
        message: "Please input your Gender!",
        placeholder: "select gender",
        Option: [
            { value: "male", label: "Male" },
            { value: "female", label: "FeMale" },
        ],
        type: "select",
    },
    {
        label: "Address",
        name: "address",
        message: "Please input your Address!",
        placeholder: "Village, District, Province",
        type: "text",
    },
]

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

const doc_form = [
    { label: "Profile", name: "profile" },
    { label: "Identity card", name: "identity_card" },
    { label: "Driver license", name: "driving_license" },
    { label: "contract", name: "contract" },
]

const registerDriver = () => {

    const normFile = (e) => {
        // console.log('Upload event:', e.file);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const onFinish = (values) => {

        const body = {
            ...values,
            birthday: moment(values.birthday._d).format("DD/MM/YYYY"),
            profile: values.profile[0],
            identity_card: values.identity_card[0],
            driver_license: values.driver_license[0],
        }
        // console.log("data: ", body);
    };

    return (
        <div>
            <h2 className="registerTitle">Register Driver</h2>
            <Form layout="vertical" onFinish={onFinish}>
                <Row>
                    <Col md={8} className="inputSection">
                        {user_form.map((item, index) =>
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
                                    : item.type === "password" ?
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
                                            <Input.Password placeholder={item.placeholder} style={{ width: "100%" }} />
                                        </Form.Item>
                                        : item.type === "date" ?
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
                                                <DatePicker style={{ width: "100%" }} />
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
                                                        {/* <Select.Option value="Male">Male</Select.Option>
                                                        <Select.Option value="FeMale">FeMale</Select.Option> */}
                                                    </Select>
                                                </Form.Item>
                                                :
                                                null
                        )}
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
                        {doc_form.map((item, index) =>
                            <Form.Item
                                key={index}
                                name={item.name}
                                label={item.label}
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            // extra="longgggggggggggggggggggggggggggggggggg"
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>
                        )}
                        {/* <Form.Item
                            name="upload"
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="longgggggggggggggggggggggggggggggggggg"
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item> */}

                        <Button type="primary" htmlType="submit" className="BTNRegister">
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default registerDriver