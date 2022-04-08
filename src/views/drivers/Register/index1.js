import React from "react"
import { Row, Col, Form, Input, InputNumber, DatePicker, Select, Upload, Button } from "antd"
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import moment from "moment";
import axios from "axios";
import "./index.css"

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
        placeholder: "2099889988",
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

const RegisterDriver = () => {
const form = React.useRef()
    const normFile = (e) => {
        // console.log('Upload event:', e.file);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const onFinish = async (values) => {

        const body = {
            ...values,
            birthday: moment(values.birthday._d).format("DD/MM/YYYY"),
            profile: !!values.profile && values.profile[0],
            device_token: localStorage.getItem("token"),
            profileImage: !!values.profileImage && values.profileImage[0],
        }
        console.log("data: ", body);

        await axios.post(`${process.env.REACT_APP_API_URL_V1}/api/v1/driver/register`, body,
            {
                headers: {
                    
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                console.log(res.data);
                alert("Register Success!");
            })
            .catch((err) => console.log(err))

    };

    return (
        <div>
            <h2 className="registerTitle">Register Driver</h2>
            <Form layout="vertical" onFinish={onFinish}>
                <Row>
                    <Col md={8} className="inputSection">
                    </Col>
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
                                                    </Select>
                                                </Form.Item>
                                                :
                                                null
                        )}
                    </Col>
                    
                    <Col md={8} className="inputSection">
                        <Form.Item
                            name="profileImage"
                            label="Profile Image"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        // extra="longgggggggggggggggggggggggggggggggggg"
                        // required
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: "Please input your Image!",
                        //     },
                        // ]}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className="BTNRegister">
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default RegisterDriver