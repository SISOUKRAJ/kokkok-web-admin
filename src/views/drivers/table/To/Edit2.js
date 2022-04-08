/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react';
import { Modal, Button,Input,Form,Upload ,Select,Row,Col } from 'antd';

import axios from 'axios';
const { Option } = Select;
const App = (props) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    
    image1:{
borderRadius:'50px',
backgroundColor:'black' ,
maxHeight: 320
    },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage3, setSelectedImage3] = React.useState();
  const {key_id,first_name,last_name,gender,birthday,address,phone,password,device_token,profile_image}=props
  const form = React.useRef()
  const date_added = React.useRef()
  let dt = new Date(Date.parse(birthday))
  let y = dt.getFullYear()
  let m = dt.getMonth() + 1
  //ค่าที่จะกำหนดให้แก่อินพุตชนิด date ต้องเป็นรูปแบบ yyyy-mm-dd
  //สำหรับเดือนและวันที่ หากเป็นเลขตัวเดียวต้องเติม 0 ข้างหน้า
  m = (m >= 10) ? m : '0'+m
  let d = dt.getDate()
  d = (d >= 10) ? d : '0'+d
const  showBirthday= `${(y)}-${m}-${d}`
const removeSelectedImage3 = () => {
  setSelectedImage3();
};
const imageChange3 = (e) => {
  if (e.target.files && e.target.files.length > 0) {
    setSelectedImage3(e.target.files[0]);
  }
};

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

   const UpdateDriver =(event)=>{
    event.preventDefault()
    const fd = new FormData(form.current)
    const fe = Object.fromEntries(fd.entries())
const data= {
    first_name: fe.first_name,
    last_name: fe.last_name,
    gender: sex,
    birthday: fe.birthday,
    address:fe.address,
    phone: parseInt(fe.phone),
    password: fe.password,
    device_token: fe.device_token,
       profile_image: ""+fe.profile_image 

}
const data1={
  first_name: "driver33",
  last_name: "kokkok33",
  gender: "male3",
  birthday: "05/01/2025",
  address: "lao3",
phone: 205551112,
  password: "password",
  device_token: "9876543213",
     profile_image: "https://www.ninenik.com/images/1.jpg"

}

console.log(key_id)
console.log(data)
axios.put(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/driver/`+ key_id , data,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(res => {
                console.log(res.data);
                alert("Update Driver Success!");
            })
            .catch((err) => console.log(err))


  }
  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };

const [sex, setSex] = React.useState('');
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={UpdateDriver} onCancel={handleCancel}>
     
      <img src={profile_image} width="100px"/>
     <form ref={form} onSubmit={UpdateDriver}>

        <label>Firstname</label> <Input placeholder="Basic usage" defaultValue={first_name} name="first_name" />
   <label>Lastname</label>   <Input placeholder="Basic usage" defaultValue={last_name} name="last_name"/>
      <label>Gender</label>
<br></br>


     <Select  style={{ width: 200 }}  defaultValue={gender}  name="gender">
     { gender === "female" ? (<>
<option value="female" selected>Female</option>
<option value="male" >Male</option> 
</>) : (<>
<option value="male" selected>Male</option> 
<option value="female">Female</option>
</>)}

      </Select>

      <br></br>
<label>Address</label>
        <Input placeholder="" defaultValue={address} nane="address"/>
        <label>Phone</label>
        <Input placeholder="Basic usage" defaultValue={phone} name="phone"/>
        <label>Password</label>
        <Input placeholder="Basic usage" type="password" defaultValue={password} name="password"/>
        <label>Device Token</label>
        <Input placeholder="Basic usage" defaultValue={device_token} name="device_token"/>
        <label>Birthday</label>
        <Input type="date" name="birthday" defaultValue={showBirthday}/>

        <div style={styles.container}>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange3}
            name="profile_image"
        />

        {selectedImage3 && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage3)}
              style={styles.image}
              alt="Thumb"
          
            />
            <button onClick={removeSelectedImage3} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
      </div>
  
       
       </form>
       <div className="site-input-group-wrapper">
       <Input.Group size="large">
      <Row gutter={10}>
        <Col span={8}>
        <label>Firstname</label>  <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
        <label>Lastname</label> 
          <Input defaultValue="26888888" />
        </Col>

          </Row>
        <Row gutter={8}>
 <Col span={5}>

        <label>Gender</label> 

        <Select  style={{ width: 150 }}   defaultValue={gender}  name="gender">
     { gender === "female" ? (<>
<option value="female" selected>Female</option>
<option value="male" >Male</option> 
</>) : (<>
<optin value="male" selected>Male</optin> 
<option value="female">Female</option>
</>)}

      </Select>


        </Col>

        </Row>
      
    </Input.Group>

    <Row gutter={10}>

      <Col span={24} style={{backgroundColor:'blue'}}>

      <label>Firstname</label>  <Input defaultValue="0571" />
      
      </Col>

    </Row>
         </div>
      </Modal>
    </>
  );
};

export default App