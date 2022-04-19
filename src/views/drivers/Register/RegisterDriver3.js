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
  Table,
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
      const [feeDriver, setFeeDriver] = React.useState([]);

      async function fetchPosts1() {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/fees/driver?driver_id=`+driver_id,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
     
        return setFeeDriver(data.data);
      }
      const dataSource =  feeDriver.map((item, index) => {

        return {
          id:item.id,
          fee:item.fee,
          register_date:item.register_date,

          expired_date:item.expired_date,
        }
  
        })
    
      const columns = [
        { 
          title:"ID",
      dataIndex:"id",
    key:"id",
    }, 
     { 
      title:"Fee",
  dataIndex:"fee",
key:"fee",
}, 
 { 
  title:"Register Date",
dataIndex:"register_date",
key:"register_date",
render:text=>
<>
    <div className="tableBirthday">
            {moment(text).format("DD/MM/YYYY HH:MM:SS")}
        </div>
</>,
},
  { 
  title:"Expired Date",
dataIndex:"expired_date",
key:"expired_date",
render:text=>
<>
    <div className="tableBirthday">
            {moment(text).format("DD/MM/YYYY HH:MM:SS")}
        </div>
</>,

    }
      ];

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

       
            <Row>

              <Col span={17} className="inputSection">
              <Table dataSource={dataSource} columns={columns} scroll={{ y: 300 }} pagination={{ pageSize: 5 }} />

              </Col>
<Col  span={1} className="inputSection">
</Col>

              <Col span={5} className="inputSection">
                   <Form layout="vertical" onFinish={onFinish}>            
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

                     <Button
                  type="primary"
                  htmlType="submit"
                  className="BTNRegister"
                
                >
                  Fee
                </Button>
                </Form>
              </Col>

             
             
            </Row>
         
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
