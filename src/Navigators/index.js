import React, { useContext } from "react";
import { Row, Dropdown, Button, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ScreenContext } from "../views/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faHome, faUser, faBell, faChartLine } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

const nav = [
    // {
    //     link: "",
    //     name: "login",
    //     label: "Log in",
    //     icon: "",
    // },
    {
        link: "dashboard",
        name: "dashboard",
        label: "Home",
        icon: faHome,
    },
    {
        link: "drivers",
        name: "drivers",
        label: "Drivers",
        icon: faIdCard,
    },
    {
        link: "passengers",
        name: "passengers",
        label: "Passengers",
        icon: faUser,
    },
    {
        link: "notifications",
        name: "notifications",
        label: "Notifications",
        icon: faBell,
    },
    {
        link: "reports",
        name: "reports",
        label: "Reports",
        icon: faChartLine,
    },
]

const Navigators = () => {
    const { setScreen, screen } = useContext(ScreenContext);
    const navigate = useNavigate();
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Log Out
            </Menu.Item>
        </Menu>
    );

    function handleMenuClick(e) {
        // message.info('Click on menu item.');
        // console.log('click', e);
        navigate('/');
        setScreen("login");
    }
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
                    {screen === "login" ? null :
                        <Row>
                            <div style={{ marginLeft: 20, backgroundColor: "orange", width: 50, height: "auto" }}>Img </div>
                            <div style={{ marginLeft: 20, marginRight: 20 }}>
                                Souksavanh
                                <Dropdown className="dropdownLogout" overlay={menu} style={{ border: "none", marginLeft: 5 }}>
                                    <Button>
                                        <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Row>
                    }
                </div>
            </div>
            {screen === "login" ? null :
                <div className="NavigatorBody">
                    <nav>
                        {nav.map((item, index) =>
                            <Link
                                style={screen === item.name ? { backgroundColor: "orange" } : { color: "white" }}
                                key={index}
                                className="navItem"
                                to={`/${item.link}`}
                                onClick={() => setScreen(item.name)}
                            >
                                <FontAwesomeIcon icon={item.icon} className="navIcon" /> {item.label}
                            </Link>
                        )}
                    </nav>
                </div>
            }


        </div >
    )
}

export default Navigators