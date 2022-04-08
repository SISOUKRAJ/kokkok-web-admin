import React from 'react'
import axios from 'axios'
import {
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  
} from "antd";

import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

import { useQuery } from "react-query";
import { DataContent } from "./context";
import "./index.css";

export default class RegisterDriver4 extends React.Component {
  static contextType = DataContent;
  render() {
    let [driver_id, setDriver_id] = this.context;

  const FormPost =()=> {

    let [postedData, setPostedData] = React.useState('')
    const form = React.useRef()
    const file = React.useRef()
    const [docsType, setDocsType] = React.useState([]);
    const { data, error, isError, isLoading } = useQuery("post", fetchPosts2);

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

    const [documentDriver, setDocumentDriver] = React.useState([]);
    const { dataDocumentDriver, errorDocumentDriver, isErrorDocumentDriver, isLoadingDocumentDriver } = useQuery("DocumentDriver", fetchDocumentDriver);

    async function fetchDocumentDriver() {
      const { dataDocumentDriver } = await axios.get(
        `${process.env.REACT_APP_API_URL_V1}/api/v1/admin/driver/docs/`,driver_id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return setDocsType(dataDocumentDriver.data);
    }


    const onSubmitForm = (event) => {
        event.preventDefault()

        const formData = new FormData(form.current)

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
    const inputStyle = {
        margin: '5px 0',
        width:"100%"
    }

    return (
    <div>
      <h2 className="registerTitle">Docstype Driver</h2>
 
      <Row>
              <Col md={8} className="inputSection">

             

              </Col>

              <Col md={8} className="inputSection">
        <form ref={form} onSubmit={onSubmitForm} >

            <select name="document_type_id" style={inputStyle}>
              {docsType.map((item)=> <option value={item.id} key={item.id}>{item.name}</option>)}
            
          
          </select>
        

            <input type="text" name="driver_id" size="43" class="w3-input w3-border"  defaultValue={driver_id}
               placeholder="driver_id" style={inputStyle}/>

            <input type="date" name="expired_date" size="43" placeholder="date" class="w3-input w3-border" style={inputStyle}/>
            
            <label for="driver_doc_pdf">Add Document Driver :</label>
            <input type="file" name="driver_doc_pdf" class="w3-input w3-border" />


            <button>Add</button>
        </form>
</Col>
<Col md={8} className="inputSection">
</Col>
</Row>
        <div dangerouslySetInnerHTML={{__html: postedData}}></div>

    </div>
    )
}

    return(
    
    <div>
{driver_id}
    <FormPost/>
    </div>)
  }

  }

