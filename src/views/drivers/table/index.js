
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { Table, Image, Rate, Button,Modal } from "antd"
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

import EditDriver1 from './To/Edit'
import DeleteDriver1 from './To/Delete'
import Edit2 from './To/Edit2'

const tableDrivers = (props) => {
    const { allDrivers } = props
    // console.log(allDrivers);

    const data = allDrivers.map((item, index) => {
        return {
            key: item.id,
            name: item.first_name + " " + item.last_name,
            first_name:item.first_name,
            last_name:item.last_name,
            gender:item.gender,
            password:item.password,
            device_token:item.device_token,
            age: item.age,
            address: item.address,
            phone: item.phone,
            birthday: item.birthday,
            profile_image: item.profile_image,
            
        }
    })
    // console.log("aa", data);

    const columns = [

        {
            title: 'Pic Profile',
            dataIndex: 'profile_image',
            key: 'profile_image',
            render: text =>
                <div className="tableImages">
                    <Image
                        width={40}
                        src={text}
                        fallback=""
                    />
                </div>,
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
            render: text =>
                <>
                    <div className="tableBirthday">
                        {/* {console.log(text)} */}
                        {text} <br />
                        {moment(text, "DD/MM/YYYY").fromNow()}
                    </div>
                </>,
        },
        {
            title: 'FullName',
            dataIndex: 'name',
            key: 'name',
            render: (text, driver) =>
                <>
                    <div className="tableName">
                        {driver.name} <br />
                        {driver.phone}
                    </div>
                </>
        },
        {
            title: 'User Type',
            dataIndex: '',
            key: 'name',
        },
        {
            title: 'Rating',
            dataIndex: 'rate',
            key: 'rate',
            render: text => <><Rate allowHalf disabled defaultValue={2} /></>
        },
        {
            title: 'Trip Completed',
            dataIndex: '',
            key: 'address',
        },
        {
            title: 'Registration Date',
            dataIndex: '',
            key: 'name',
        },
        {
            title: 'Expire Date',
            dataIndex: '',
            key: 'age',
        },
        {
            title: 'Status',
            dataIndex: '',
            key: 'address',
        },
        {
            title: 'operation',
            dataIndex: '',
            key: 'button',
            render: (text, driver) =>
                <div className="operationBox">


<EditDriver1 
key_id={driver.key}
 first_name={driver.first_name}
 last_name={driver.last_name}  
 gender={driver.gender} 
 birthday={driver.birthday}
 address={driver.address}

phone={driver.phone}
password={driver.password}
device_token={driver.device_token}

profile_image={driver.profile_image}
 />


        <DeleteDriver1 key_id={driver.key} name={driver.name}  age={driver.age}  address={driver.address}

phone={driver.phone} profile_image={driver.profile_image} />          

{/* 
<Edit2 
key_id={driver.key}
 first_name={driver.first_name}
 last_name={driver.last_name}  
 gender={driver.gender} 
 birthday={driver.birthday}
 address={driver.address}

phone={driver.phone}
password={driver.password}
device_token={driver.device_token}

profile_image={driver.profile_image}
 /> */}



                  

                </div>
        },
    ];

   
   
         
    return (
        <div>
            <Table dataSource={data} columns={columns} scroll={{ y: 300 }} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default tableDrivers