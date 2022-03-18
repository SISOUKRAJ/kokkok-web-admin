import React from "react"
import { Table, Button, Popconfirm, message } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
import axios from "axios";
import ModalUpdate from "../Modal"

const index = (props) => {
    const { cars, car_brands, car_type, car_models, car_type_second, drivers } = props

    const format_cars = !!cars && cars.map((item, index) => {
        return {
            ...item,
            key: item.id,
            brand: item.car_brand.name,
            model: item.car_model.name,
            type: item.car_type.name,
            second_type: item.car_type_second.name
        }
    })

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            align: 'center',
            width: 50,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            align: 'center',
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            align: 'center',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            align: 'center',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            align: 'center',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
        },
        {
            title: 'Type For Company',
            dataIndex: 'second_type',
            key: 'second_type',
            align: 'center',
        },
        {
            title: 'License Plate',
            dataIndex: 'license_plate',
            key: 'license_plate',
            align: 'center',
            render: (_, record) =>
                <>
                    {record.license_plate.province} <br />
                    {record.license_plate.word + " " + record.license_plate.number}
                </>
        },
        {
            title: 'Price',
            dataIndex: 'car_price',
            key: 'car_price',
            align: 'center',
            render: (_, record) =>
                <>
                    Price: {record.car_type.car_price.price.toLocaleString()} <br />
                    Distance: {record.car_type.car_price.distance.toLocaleString()}  <br />
                    Total: {record.car_type.car_price.total_amount.toLocaleString()}
                </>
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
            align: 'center',
        },
        {
            title: 'Driver',
            dataIndex: 'driver',
            key: 'driver',
            align: 'center',
            render: (_, record) =>
                <>
                    {record.driver.first_name} <br />
                    {record.driver.last_name}
                </>
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            fixed: 'right',
            render: (_, record) =>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <ModalUpdate
                        data={record}
                        tabActive={"cars"}
                        car_brands={car_brands}
                        car_type={car_type}
                        car_models={car_models}
                        car_type_second={car_type_second}
                        drivers={drivers}
                    />

                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                        <Button type="link" icon={<DeleteOutlined />} style={{ marginLeft: 10, backgroundColor: "#dc3545", color: "white", border: "none" }} />
                    </Popconfirm>
                </div>
        },
    ];

    const handleDelete = async (key) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL_V1}/api/v1/admin/oauth/car/${key}`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then(res => {
                    message.success("Delete success");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
            message.error("Delete fail, please try again later or contact admin");
        }
    };

    return (
        <div>
            <Table
                dataSource={format_cars}
                columns={columns}
                pagination={{ pageSize: 5 }}
                scroll={{ y: 300, x: 1500 }}
            />
        </div>
    )
}

export default index