import React from "react"
import { Table, Image, Rate, Button } from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const index = (props) => {
    const { cars } = props

    const format_cars = cars.map((item, index) => {
        return {
            ...item,
            key: item.id,
        }
    })
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: text =>
            //     <div className="tableImages">
            //         <Image
            //             width={40}
            //             src={text}
            //             fallback=""
            //         />
            //     </div>,
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            // render: text =>
            //     <>
            //         <div className="tableBirthday">
            //             {/* {console.log(text)} */}
            //             {text} <br />
            //             {moment(text, "DD/MM/YYYY").fromNow()}
            //         </div>
            //     </>,
        },
        {
            title: 'Brands',
            dataIndex: 'car_brand_id',
            key: 'car_brand_id',
        },
        {
            title: 'Model',
            dataIndex: 'car_model_id',
            key: 'car_model_id',
        },
        {
            title: 'Type',
            dataIndex: 'car_type_id',
            key: 'car_type_id',
        },
        {
            title: 'License Plate',
            dataIndex: 'license_plate',
            key: 'license_plate',
        },
        {
            title: 'Price',
            dataIndex: 'car_price',
            key: 'car_price',
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
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
            <Table dataSource={format_cars} columns={columns} pagination={{ pageSize: 5 }} scroll={{ y: 300 }} />
        </div>
    )
}

export default index