import React, { useEffect, useState, useContext } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { ScreenContext } from "./views/context/index";

import Navigators from "./Navigators";
import Home from "./views/Home_page/index";
import LoginPage from "./views/login_page/index";
import Errors from "./views/Errors_page/index";
import Drivers from "./views/drivers/index";
import Passengers from "./views/passengers/index";
import Notifications from "./views/notifications";
import Reports from "./views/reports/index";
const AppNavigator = () => {
    const { screen } = useContext(ScreenContext);
    // console.log(screen);

    return (
        <div>
            <Navigators />

            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/passengers" element={<Passengers />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<Errors />} />
            </Routes>
        </div>

    );
};

export default AppNavigator;