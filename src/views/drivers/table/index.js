import React from "react"
import { Table } from "antd"
import "./index.css"

const tableDrivers = (props) => {
    const { allDrivers } = props
    console.log(allDrivers);



    const columns = [
        {
            title: 'Pic Profile',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'FullName',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'User Type',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Rating',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Trip Completed',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Registration Date',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Expire Date',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Status',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div>
            <Table dataSource={allDrivers} columns={columns} />
        </div>
    )
}

export default tableDrivers