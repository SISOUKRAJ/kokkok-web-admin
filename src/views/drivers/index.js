import React from "react"
import { Row, Col, Form, Input, Select, DatePicker, Button } from "antd"
import './index.css';

const drivers = () => {
    return (
        <div>
            <Row style={{ padding: 10 }}>
                <Col md={4}>
                    <h2 style={{ color: "orange", padding: 10 }}>Drivers</h2>
                </Col>
                <Col md={16}>
                    <div className="formBox">
                        <Form
                            layout="horizontal"
                            size="default"
                            initialValues={{
                                size: "default",
                            }}
                        >
                            <div className="searchBox">
                                <Form.Item style={{ margin: 0 }}>
                                    <Input placeholder="search" className="searchInput" />
                                </Form.Item>

                                <Form.Item style={{ margin: 0 }}>
                                    <Select className="selectInput">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item style={{ margin: 0 }}>
                                    <DatePicker className="dateInput" />
                                </Form.Item>
                                <a className="resetButton"
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); }}
                                // icon={<DownloadOutlined />} 
                                // size={size}
                                >
                                    Reset
                                </a>
                            </div>
                        </Form>
                    </div>
                    <div className="amountBox">
                        <h3 className="amountItem">Total Drivers: <strong style={{ color: "orange" }}>0</strong> </h3>
                        <h3 className="amountItem">On Trips Drivers: <strong style={{ color: "orange" }}>0</strong> </h3>
                        <h3 className="amountItem">Active Drivers: <strong style={{ color: "orange" }}>0</strong> </h3>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="registerBox">
                        <Button type="primary"
                            // icon={<DownloadOutlined />} 
                            // size={size}
                            className="registerButton"
                        >
                            Register
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default drivers