import React, { useState } from "react"
import { Row, Col, Form, Input, Select, Popconfirm, Button, Modal, Tabs, Table, InputNumber } from "antd"
import { EditOutlined } from '@ant-design/icons';
import "./index.css"

const ModalRegister = (props) => {
    const [visible, setVisible] = useState(false);
    // const [tabActive, setTabActive] = useState("cars");
    const { data, tabActive } = props
    // console.log("car_type==>>>", car_type);
    // console.log("car_brands==>>>", car_brands);
    // console.log("car_models==>>>", car_models);
    // console.log("===>", data);
    // console.log(`${tabActive}`, tabActive);

    return (
        <div >
            <Button onClick={() => setVisible(true)} style={{ marginLeft: 10, backgroundColor: "#ffc107", color: "white", border: "none" }} icon={<EditOutlined />} />

            <Modal
                title="Update"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={"50%"}
                footer={null}
            >
                <h1>Update</h1>
                {tabActive === "cars" ?
                    <h1>cars</h1>
                    : tabActive === "car_type" ?
                        <h1>car_type</h1>
                        : tabActive === "car_brands" ?
                            <h1>car_brands</h1>
                            : tabActive === "car_model" ?
                                <h1>car_model</h1>
                                : tabActive === "license_plate" ?
                                    <h1>license_plate</h1>
                                    : tabActive === "price" ?
                                        <h1>price</h1>
                                        : null}
            </Modal>


        </div>
    )
}

export default ModalRegister