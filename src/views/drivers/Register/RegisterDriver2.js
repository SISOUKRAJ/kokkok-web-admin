import React, { Component } from "react";
import { DataContent } from "./context";
import moment from "moment";
import axios from "axios";
import "./index.css";
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
import { serialize } from 'object-to-formdata';

import { useQuery } from "react-query";
export default class RegisterDriver2 extends Component {
  static contextType = DataContent;
  render() {
    let [driver_id, setDriver_id] = this.context;


    const RegisterDriver = () => {
      const [docsType, setDocsType] = React.useState([]);
      const { data, error, isError, isLoading } = useQuery("post", fetchPosts2);
      
  const { data1, error1, isError1, isLoading1 } = useQuery("docDriver", fetchDocDriver);
 const [docDriver, setdocDriver] = React.useState([]);

      const form = React.useRef();
      const file = React.useRef();

async function fetchDocDriver() {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/driver/docs/`+driver_id,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return setdocDriver(data.data);
      }
        const dataSource =  docDriver.map((item, index) => {

        return {
          id:item.id,
        
          
        }

        })
    
    const columns = [
      { 
        title:"ID",
    dataIndex:"id",
  key:"id",
},
  
      {
          title: 'operation',
          dataIndex: '',
          key: 'button',
          render: (text, docsType) =>
              <div className="operationBox">

</div>

}
    ];


      const options = {
        /**
         * include array indices in FormData keys
         * defaults to false
         */
        indices: false,
      
        /**
         * treat null values like undefined values and ignore them
         * defaults to false
         */
        nullsAsUndefineds: false,
      
        /**
         * convert true or false to 1 or 0 respectively
         * defaults to false
         */
        booleansAsIntegers: false,
      
        /**
         * store arrays even if they're empty
         * defaults to false
         */
        allowEmptyArrays: false,
      
        /**
         * don't include array notation in FormData keys for Files in arrays
         * defaults to false
         */
        noFilesWithArrayNotation: false,
      
        /**
         * use dots instead of brackets for object notation in FormData keys
         * defaults to false
         */
        dotsForObjectNotation: false,
      };
      const user_form_Left = [
        {
          label: "ID Driver",
          name: "driver_id",
          message: "Please input your driver_id !",
          placeholder: "Select Driver ID",
          type: "text",
        },
        {
          label: "Docs Type",
          name: "document_type_id",
          message: "Please input your Docs Type!",
          placeholder: "Select Docs Type",
          Option: docsType,
          type: "select",
        },
        {
          label: "Expired Date",
          name: "expired_date",
          message: "Please input your Expired Date!",
          placeholder: "Expired Date",
          type: "date",
        },
      ];

      async function fetchPosts2() {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/docs-type`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return setDocsType(data.data);
      }

      const normFile = (e) => {  
        return e.file;
      };

   

      const onFinish =  async (values) => {
  

        const fd = new FormData();

 fd.append("driver_id",values.driver_id)
 fd.append("document_type_id",values.document_type_id)
 fd.append("expired_date",moment(values.birthday).format("DD/MM/YYYY"))
 //fd.append("driver_doc_pdf",values.driver_doc_pdf.originFileObj)  

 fd.append("driver_doc_pdf",values.driver_doc_pdf.xhr.responseURL+" "+values.driver_doc_pdf.name) 
  const fe=Object.fromEntries(fd.entries())
 console.log("Value  :",values.driver_doc_pdf.name)
 console.log("Value  :",values.driver_doc_pdf.xhr.responseURL)

 console.log("Value  :",values)

 console.log("fe  :",fe)


        console.log("fromEntries",fd)
           await axios.post(
             `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/driver/docs`,
            fd,
              {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                  ContentType: `multipart/form-data`,
                  Type:"formData"
              },
          }
            )
        .then((res) => {
          console.log(res);
            alert("Docstype Driver Success!");
        })
            .catch((err) => console.log(err));
      };
      
      const onSubmitForm = (event) => {

        const formData = new FormData(form.current)
        
console.log(form.current)
  axios.post(
     `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/driver/docs`
     ,formData,
   {
      headers: {   
          Authorization: `Bearer ${localStorage.getItem("token")}`,
            ContentType: `multipart/form-data`,
  }
 }
   )
  .then((res) => {
    console.log(res);
    alert("Docstype Driver Success!");
  })
   .catch((err) => console.log(err));
    }
      return (
        <>
          <h2 className="registerTitle">Docstype Driver</h2>



                       <Form  layout="vertical" onFinish={onFinish}  ref={form}>

            <Row>

              <Col md={8} className="inputSection">

              <Table dataSource={dataSource} columns={columns} scroll={{ y: 300 }} pagination={{ pageSize: 5 }} />


              </Col>

              <Col md={8} className="inputSection">


                {user_form_Left.map((item, index) =>
                  item.type === "select" ? (
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
                      <Select
                        style={{ textAlign: "left" }}
                        placeholder={item.placeholder}
                      >
                        {item.Option.map((option, index) => (
                          <Select.Option key={index} value={option.id}>
                            {option.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  ) : item.type === "text" ? (
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
                      { item.name === "driver_id" ? ( <Input
                        placeholder={item.placeholder}
                        size="small"
                        disabled={false}
                        defaultValue={driver_id}
                        

                      />):( <Input
                        placeholder={item.placeholder}
                        size="small"
                        disabled={false}

                      />)
                      }
                   
                    </Form.Item>
                  ) : item.type === "date" ? (
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
                  ) : null
                )}

                <Form.Item
                  name="driver_doc_pdf"
                  label="Docstype "
                  valuePropName="file"
                  getValueFromEvent={normFile}
                  required
                 id="file"
                >
                  <Upload name="logo" action="/upload.do" listType="picture" maxCount={1}                
>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item> 
              </Col>

              <Col md={8} className="inputSection">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="BTNRegister"
                >
                  Docstype
                </Button>   

              </Col>  
            </Row>
              </Form>

        </>
      );
    };

    return (
      <div>
        <RegisterDriver />
      </div>
    );
  }
}
