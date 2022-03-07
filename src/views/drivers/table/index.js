import React from "react"
import { Table, Image, Rate, Button } from "antd"
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

const tableDrivers = (props) => {
    const { allDrivers } = props
    // console.log(allDrivers);

    const data = allDrivers.map((item, index) => {
        return {
            key: item.id,
            name: item.first_name + " " + item.last_name,
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
                    <Button><FontAwesomeIcon icon={faPenToSquare} className="BTNUpdate" /></Button>
                    <Button><FontAwesomeIcon icon={faTrashCan} className="BTNDelete" /></Button>
                </div>
        },
    ];
    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default tableDrivers