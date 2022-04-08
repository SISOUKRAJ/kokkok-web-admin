import React, { useContext, useState } from "react";
import { Row, Dropdown, Button, Menu, Drawer } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ScreenContext } from "../views/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faHome, faUser, faBell, faChartLine, faGear, faCar, faBars } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

const nav = [
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
        link: "cars",
        name: "cars",
        label: "Cars",
        icon: faCar,
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
        link: "setting",
        name: "setting",
        label: "Setting",
        icon: faGear,
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
    const [visible, setVisible] = useState(false);
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Log Out
            </Menu.Item>
        </Menu>
    );

    function handleMenuClick(e) {
        navigate('/');
        setScreen("login");
        localStorage.setItem("screen", "login");
        localStorage.removeItem("token");
    }

    return (
        <div>
            <div className="NavigatorHeader">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Row>
                        <div style={{ marginLeft: 20, backgroundColor: "#FF9E1B ", width: 50, height: "auto" }}>Img </div>
                        <div style={{ marginLeft: 20 }}>
                            <strong style={{ color: "#FF9E1B " }}>KoK KoK</strong> Web admin
                            <br /> Dashboard
                        </div>
                    </Row>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {screen === "login" || screen === null ? null :
                        <Row>
                            <div style={{ marginLeft: 20, backgroundColor: "#FF9E1B ", width: 50, height: "auto" }}>Img </div>
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
            {screen === "login" || screen === null ? null :
                <div className="NavigatorBody">
                    <nav className="navBar">
                        {nav.map((item, index) =>
                            <Link
                                style={screen === item.name ? { backgroundColor: "#FF9E1B " } : { color: "white" }}
                                key={index}
                                className="navItem"
                                to={`/${item.link}`}
                                onClick={() => {
                                    setScreen(item.name);
                                    localStorage.setItem("screen", item.name);
                                }}
                            >
                                <FontAwesomeIcon icon={item.icon} className="navIcon" /> {item.label}
                            </Link>
                        )}
                    </nav>
                    <div className="responsiveNavbar">
                        <button
                            className="btnDrawer"
                            type="primary"
                            onClick={() => setVisible(true)}
                        >
                            <FontAwesomeIcon icon={faBars} className="navIconResponsive" />
                        </button>
                        <Drawer
                            title="Menu"
                            placement="left"
                            closable={false}
                            onClose={() => setVisible(false)}
                            visible={visible}
                        >
                            <nav>
                                {nav.map((item, index) =>
                                    <Row key={index}>
                                        <Link
                                            style={screen === item.name ? { backgroundColor: "#FF9E1B " } : { color: "white" }}
                                            className="navItem"
                                            to={`/${item.link}`}
                                            onClick={() => {
                                                setScreen(item.name);
                                                localStorage.setItem("screen", item.name);
                                                setVisible(false);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={item.icon} className="navIcon" /> {item.label}
                                        </Link>
                                    </Row>

                                )}
                            </nav>
                        </Drawer>
                    </div>
                </div>
            }
        </div >
    )
}

export default Navigators