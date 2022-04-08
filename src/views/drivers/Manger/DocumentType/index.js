import React, { Component } from 'react'
import { Row, Col,Table } from 'antd';
import { useQuery } from "react-query";


export default class index extends Component {


  render() {


    const dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];
    
    const columns = [
      {
        title: 'Document Type Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }

    ];


    return (
      <div>
          
          DocumentType
    <Row>
      <Col span={15}>
        
        
      <Table   onRow={(record, rowIndex) => {
    return {
      onClick: event => {

        console.log()
      }, // click row
      onDoubleClick: event => {

      }, // double click row
      onContextMenu: event => {

      }, // right button click row
      onMouseEnter: event => {

      }, // mouse enter row
      onMouseLeave: event => {

      }, // mouse leave row

    };

  }}
   dataSource={dataSource} columns={columns} />;
      
      
      
      </Col>

      <Col span={8}>

        col-8
      </Col>



    </Row>
 



      </div>
    )
  }
}
