import { Link } from "react-router-dom";
const Navigators = () => {
    return (
        <div>
            <div className="NavigatorBody">
                <nav>
                    <Link to="/">Log in </Link>
                    <Link to="/dashboard">Home </Link>
                </nav>
            </div>
        </div>
    )
}

export default Navigators