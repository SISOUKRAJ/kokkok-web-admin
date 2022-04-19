import React, { Component } from 'react'
import { Row, Col, Form, Input, InputNumber, DatePicker, Select, Upload, Button } from "antd"
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import moment from "moment";
import axios from "axios";

export default class Add extends Component {
  render() {

    const App=()=>{

            const user_form = [

        {
            label: "Driver Name",
            name: "driver_type_name",
            message: "Please input Driver Name!",
            placeholder: "Driver Name",
            type: "text",
        }
    ]
    const onFinish = async (values) => {

        const body = {
            ...values,
        }

        await axios.post(`${process.env.REACT_APP_API_URL_V1}/api/v1/driver-type`, body,
            {
                headers: {
                    
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                console.log(res.data);
                alert("Add Driver Type Success!");
            })
            .catch((err) => console.log(err))

    };

    return (

        <div>
            <h2 className="registerTitle">Add Driver Type</h2>
            <Form layout="vertical" onFinish={onFinish}>
                <Row>
                  
                    <Col md={20} className="inputSection">
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
                                
                                                :
                                                null
                        )}
                         <Button type="primary" htmlType="submit" className="BTNRegister">
                            Add Driver Type
                        </Button>
                    </Col>
                    
              
                </Row>
            </Form>
        </div>
    )    
}



    return (
      <div>

          <App/>






      </div>
    )






  }
}
