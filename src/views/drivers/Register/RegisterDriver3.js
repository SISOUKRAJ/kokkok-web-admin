import React, { Component } from "react";
import { DataContent } from "./context";

import {
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Upload,
  Button,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import moment from "moment";
import axios from "axios";
import "./index.css";

import { useQuery } from "react-query";
export default class RegisterDriver1 extends Component {
  static contextType = DataContent;
  render() {
    let [user, setUser] = this.context;
    let [btnNext, setBtnNext] = this.context;
    let [driver_id, setDriver_id] = this.context;

    const user_form_left = [
      {
        label: "Driver ID",
        name: "driver_id",
        message: "Please input your Driver ID !",
        placeholder: "Driver ID",
        type: "text",
      },
    
      {
        label: "Fee",
        name: "fee",
        message: "Please input your Fee !",
        placeholder: "50,000 kip",
        type: "text",
      },
    

    ];


    const RegisterDriver = () => {
      const { data, error, isError, isLoading } = useQuery("post", fetchPosts1);

      const [dataDriverType, setDatadrivetype] = React.useState([]);

      async function fetchPosts1() {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL_V1}/api/v1/driver-type`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
     
        return setDatadrivetype(data.data);
      }


      const onFinish = async (values) => {
        const body = {
          ...values,
        

        };
        
console.log(body)
        await axios
          .post(
            `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/fee`,
            body,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            alert("Fee Driver Success!");
            setBtnNext(true)
          })
          .catch((err) => console.log(err));
      };

      return (
        <div>
          <h2 className="registerTitle">Fee </h2>

          <Form layout="vertical" onFinish={onFinish}>
            <Row>

              <Col md={8} className="inputSection">

              </Col>


              <Col md={8} className="inputSection">
                            
              {user_form_left.map((item, index) =>
                  item.type === "text" ? (
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
                    {  item.name === "driver_id" ? (
                      <Input placeholder={item.placeholder} size="small" disabled={true} defaultValue={driver_id} />
                    
                    ):(<Input placeholder={item.placeholder} size="small" />)
                    }
           
                      
                    </Form.Item>
                  ) :
     
     
                  null )
                  
                  
                  
                  }
              </Col>

              <Col md={8} className="inputSection">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="BTNRegister"
                
                >
                  Fee
                </Button>
              
           
              
           
              </Col>
            </Row>
          </Form>
        </div>
      );
    };
    return (
      <div>
        <RegisterDriver />

      </div>
    );
  }
}
