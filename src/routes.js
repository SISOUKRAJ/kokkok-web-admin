import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Navigators from "./Navigators";
import Footer from "./Footer";
import Home from "./views/Home_page/index";
import LoginPage from "./views/login_page/index";
import Errors from "./views/Errors_page/index";
import Drivers from "./views/drivers/index";
import Passengers from "./views/passengers/index";
import Notifications from "./views/notifications";
import Reports from "./views/reports/index";
import RegisterDriver from "./views/drivers/Register/index";

const AppNavigator = () => {

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
                <Route path="/register" element={<RegisterDriver />} />
            </Routes>

            <Footer />
        </div>

    );
};

export default AppNavigator;