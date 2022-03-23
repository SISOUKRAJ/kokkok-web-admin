import React, { useContext } from "react";
import { Form, Input, Button, InputNumber, message } from 'antd';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { ScreenContext } from "../context/index";
import "./index.css";

const Login_page = () => {
    const { setScreen } = useContext(ScreenContext);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const body = {
            phone: values.phone,
            password: values.password
        }
        await Axios.post(`${process.env.REACT_APP_API_URL_V1}/api/v1/user/login`, body)
            .then(res => {
                setScreen("dashboard");
                localStorage.setItem('token', res.data.data.access_token);
                localStorage.setItem('screen', "dashboard");
                navigate('/dashboard');
            }).catch(err => {
                console.log(err);
                message.error('Incorrect Phone or Password');
            })
    };

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
                        autoComplete="off"
                    >
                        <Form.Item
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
                                maxLength={10}
                                placeholder="Phone"
                            />
                        </Form.Item>
                        <Form.Item
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