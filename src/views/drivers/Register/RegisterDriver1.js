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
    let [driver_id, setDriver_id] = this.context;
    let [btnNext, setBtnNext] = this.context;
    const user_form_left = [
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
    ];

    const RegisterDriver = () => {

      const { data, error, isError, isLoading } = useQuery("post", fetchPosts1);
      const [dataDriverType, setDatadrivetype] = React.useState([]);
    
      const user_form_right = [
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
        {
          label: "Driver Type",
          name: "driver_type_id",
          message: "Please input your Driver Type!",
          placeholder: "select Driver Type",
          Option: dataDriverType,
          type: "select",
        },
      ];

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
          device_token: localStorage.getItem("token"),
        };


        
        await axios
          .post(
            `${process.env.REACT_APP_API_URL_V1}/api/v1/driver/register`,
            body,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
const {id}=res.data.data
setDriver_id(id)

          })
          .catch((err) => console.log(err));
      };

      return (
        <div>
          <h2 className="registerTitle">Register Driver</h2>
          <Form layout="vertical" onFinish={onFinish}>
            <Row>
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
                      <Input placeholder={item.placeholder} size="small" />
                    </Form.Item>
                  ) : item.type === "number" ? (
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
                      <InputNumber
                        placeholder={item.placeholder}
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  ) : item.type === "password" ? (
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
                      <Input.Password
                        size="small"
                        placeholder={item.placeholder}
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  ) : null
                )}
              </Col>
              <Col md={8} className="inputSection">
                {user_form_right.map((item, index) =>
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
                      <Input placeholder={item.placeholder} />
                    </Form.Item>
                  ) : item.type === "number" ? (
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
                      <InputNumber
                        placeholder={item.placeholder}
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  ) : item.type === "password" ? (
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
                      <Input.Password
                        placeholder={item.placeholder}
                        style={{ width: "100%" }}
                      />
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
                  ) : item.type === "select" ? (
                    item.name === "driver_type_id" ? (
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
                              {option.driver_type_name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    ) : (
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
                            <Select.Option key={index} value={option.value}>
                              {option.label}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    )
                  ) : null
                )}
              </Col>

              <Col md={8} className="inputSection">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="BTNRegister"
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      );
    };
    return (
      <div>
        <p> {driver_id}</p>

        <RegisterDriver />
      </div>
    );
  }
}
