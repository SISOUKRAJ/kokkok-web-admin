import React, { Component } from 'react'
import { Row, Col,Table ,Radio} from 'antd';
import axios from "axios";

import {useQuery} from 'react-query'
import FormAdd from  './Add'

import Delete from  './Delete'
import Edit from  './Edit'
export default class index extends Component {


  render() {

const App=()=>{

const docusID=React.useRef()
const docusNameD=React.useRef()

    const [docsType, setDocsType] = React.useState([]);
    const { data, error, isError, isLoading } = useQuery("post", fetchPosts2);
  
  const [docsTypeID,setDocsTypeID]=React.useState([]);
  const [docsTypeName,setDocsTypeName]=React.useState();

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


    
    

      const dataSource =  docsType.map((item, index) => {
        return {
          key:item.id,
          name:item.name,
          
        }

        })
    
    const columns = [
      { 
        title:"ID",
    dataIndex:"key",
  key:"id",
},
      {
        
        title: 'Document Type Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
          title: 'operation',
          dataIndex: '',
          key: 'button',
          render: (text, docsType) =>
              <div className="operationBox">
<Edit id={docsType.key} name={docsType.name}/>
<Delete id={docsType.key} name={docsType.name}/>
</div>

}
    ];


    return (
      <div>
          
          
    <Row>
      <Col md={15}>
        
      <Table      
        
       
   dataSource={dataSource} columns={columns}  scroll={{ y: 250 }} pagination={{ pageSize: 5 }} />;
      
      
      
      </Col>

      <Col md={1}>
        </Col>
      <Col md={8}>

        <FormAdd/>

      </Col>



    </Row>
 



      </div>
    )
  }
    return (
      <>
      
      <App/>
      </>
    )



    
  }

  
  }
