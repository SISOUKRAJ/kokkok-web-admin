import React, { Component } from 'react'
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
import { QueryClient,QueryClientProvider } from 'react-query';
import { DataContent } from "../context";

const queryClient = new QueryClient()

export default class index extends Component {
    static contextType = DataContent;
  render() {
      
    let [driver_id, setDriver_id] = this.context;

    return (
      <div>
          
          
          
          
          <QueryClientProvider client={queryClient}>




          <Row>
          <Col span={12}>
            
          
          
          </Col>

      <Col span={12}>
          
          
      
      
      
      
      </Col>



                  </Row>



              </QueryClientProvider>
          
          
          
          
          
          </div>
    )
  }
}
