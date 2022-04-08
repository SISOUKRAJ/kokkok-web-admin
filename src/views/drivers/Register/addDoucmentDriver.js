import React, { Component } from 'react'
import axios from 'axios'

import { useQuery } from "react-query";
import { DataContent } from "./context";


export default class Register5 extends Component {
  static contextType = DataContent;

  render() {

    function Add(){
      let [postedData, setPostedData] = React.useState('')
      const form = React.useRef()
      const file = React.useRef()
        const [docsType, setDocsType] = React.useState([]);
      const [driver_id, setDriver_id] = this.context;



      
      const onSubmitForm = (event) => {
          event.preventDefault()
  
          const formData = new FormData(form.current)
          
          const formEnt = Object.fromEntries(formData.entries())
  
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
      }
  
      return (
        
      <div style={{margin:'30px'}}>
          <form ref={form} onSubmit={onSubmitForm} >
              <div>Upload</div>
              <input type="text" name="document_type_id" size="43" placeholder="document_type_id" style={inputStyle} /><br/>
  
  
              <input type="text" name="driver_id" size="43" placeholder="driver_id" style={inputStyle}/><br/>
  
              <input type="date" name="expired_date" size="43" placeholder="date" style={inputStyle}/><br/>
  
              <input type="file" name="driver_doc_pdf"  />
              <button>ตกลง</button>
          </form>
          <br/>
          <div dangerouslySetInnerHTML={{__html: postedData}}></div>
  
      </div>
      )

  }

    return (
      <div>addDoucmentDriver



<Add/>

      </div>
    )
  }
}
