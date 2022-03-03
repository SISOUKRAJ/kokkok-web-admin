import React, { useContext } from "react";
import { Form, Input, Button, InputNumber, message } from 'antd';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { ScreenContext } from "../context/index";
import "./index.css";
import 'antd/dist/antd.css';

const Login_page = () => {
    const { setScreen } = useContext(ScreenContext);
    localStorage.setItem('token', "");

    const navigate = useNavigate();

    const onFinish = async (values) => {
        const body = {
            phone: values.phone,
            password: values.password
        }
        // console.log(body);
        await Axios.post("http://115.84.76.134:3000/api/v1/user/login", body)
            .then(res => {
                // console.log(res.data.data);
                setScreen("dashboard");
                localStorage.setItem('token', res.data.data.access_token);
                navigate('/dashboard');
            }).catch(err => {
                console.log(err);
                message.error('Incorrect Phone or Password');
            })
    };

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div>
            <div className="LoginPageBody" >
                <div className="formBox">
                    <h1 className="titleLogin">Log in</h1>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            // label="Username"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                },
                            ]}

                        >
                            <InputNumber
                                style={{
                                    width: "100%",
                                    padding: "10px 15px ",
                                }}
                                placeholder="Phone"
                            />
                        </Form.Item>

                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button className="LoginButton" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login_page;