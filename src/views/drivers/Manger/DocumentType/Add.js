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
            label: "DocumentType Name",
            name: "name",
            message: "Please input DocumentType Name!",
            placeholder: "DocumenType Name",
            type: "text",
        }
    ]
    const onFinish = async (values) => {

        const body = {
            ...values,
        }
        console.log("data: ", body);

        await axios.post(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/docs-type`, body,
            {
                headers: {
                    
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                console.log(res.data);
                alert("Add Document Type Success!");
            })
            .catch((err) => console.log(err))

    };

    return (

        <div>
            <h2 className="registerTitle">Add Doucment Type</h2>
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
                            Add Document Type
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
