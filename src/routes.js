import React, { useEffect, useState } from "react";
import { Row, Col } from 'antd';
import {
    Routes,
    Route,
} from "react-router-dom";
import Navigators from "./Navigators";
import Home from "./views/Home_page/index";
import LoginPage from "./views/login_page/index";
import Errors from "./views/Errors_page/index";

const AppNavigator = () => {
    const Index = localStorage.getItem("index")
    console.log(Index);

    return (
        <div>
            <div className="NavigatorHeader">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Row>
                        <div style={{ marginLeft: 20, backgroundColor: "orange", width: 50, height: "auto" }}>Img </div>
                        <div style={{ marginLeft: 20 }}>
                            <strong style={{ color: "orange" }}>KoK KoK</strong> Web admin
                            <br /> Dashboard
                        </div>
                    </Row>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {Index === "login" ? null :
                        <Row>
                            <div style={{ marginLeft: 20, backgroundColor: "orange", width: 50, height: "auto" }}>Img </div>
                            <div style={{ marginLeft: 20, marginRight: 20 }}>
                                Souksavanh
                            </div>
                        </Row>
                    }
                </div>
            </div>
            {Index === "login" ? null : <Navigators />}

            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="*" element={<Errors />} />
            </Routes>
        </div>

    );
};

export default AppNavigator;