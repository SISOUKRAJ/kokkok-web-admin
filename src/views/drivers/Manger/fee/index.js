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



    const [docsType, setDocsType] = React.useState([]);
    const { data, error, isError, isLoading } = useQuery("post", fetchPosts3);
  

    async function fetchPosts3() { 

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL_V1}/api/v1/driver-type`,
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
          id:item.id,
          name:item.driver_type_name,
          
        }

        })
    
    const columns = [
      { 
        title:"ID",
    dataIndex:"id",
  key:"id",
},
      {
        
        title: 'Driver Type Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
          title: 'operation',
          dataIndex: '',
          key: 'button',
          render: (text, docsType) =>
              <div className="operationBox">
<Edit id={docsType.id} name={docsType.name}/>
<Delete id={docsType.id} name={docsType.name}/>
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
