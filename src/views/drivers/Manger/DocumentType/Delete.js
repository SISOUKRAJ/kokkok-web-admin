import React, { Component } from 'react'
import { Modal, Button,Input,Form,Upload ,Select,Row,Col , InputNumber, DatePicker, } from 'antd';

import axios from 'axios';

 const App =(props)=>{
      const {id,name}=props
      const [form] = Form.useForm();
      form.setFieldsValue({
      
          id:id,
          name:name,
      })
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      
      const user_form = [
        {
            label: "DocumentType ID ",
            name: "id",
            message: "Please input your DocumentType ID !",
            placeholder: "DocumentType ID",
            type: "text",
        },
        {
            label: "DocumentType Name",
            name: "name",
            message: "Please input DocumentType Name!",
            placeholder: "DocumenType Name",
            type: "text",

        }
    ]
      

  const onFinish = async (values) => {

 
    await axios.delete(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/docs-type/`+values.id,
        {
            headers: {
                
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then(res => {
            console.log(res.data);
            alert("Delete Success!");
        })
        .catch((err) => console.log(err))

};

return(<>
  <Button type="primary" danger onClick={showModal}>
  Delete
      </Button>
      <Modal title="Doucment Type" visible={isModalVisible} onOk={handleCancel} onCancel={handleCancel}>

      <h2 className="registerTitle">Delete Doucment Type</h2>
   
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Row>
                  
                    <Col md={20} className="inputSection">
                        {user_form.map((item, index) =>
                            item.type === "text" ?

                             item.name ==="id" ? (
                            <Form.Item
                                    key={index}
                                    label={item.label}
                                    name={item.name}
                                    
                                    
                                    rules={[
                                        {
                                            required: true,
                                            message: item.message,
                                        },
                                    ]}>

                                    <Input placeholder={item.placeholder} disabled />


                                </Form.Item>) : (
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
  
                                      <Input placeholder={item.placeholder} disabled />
  
  
                                  </Form.Item>
                                )
                         :
                                                null
                        )}
                         <Button type="primary" htmlType="submit" className="BTNRegister" onClick={handleOk}>
                           Delete Doucment Type
                        </Button>
                    </Col>
                    
              
                </Row>
            </Form>
      </Modal>


</>)
}


 

export default App