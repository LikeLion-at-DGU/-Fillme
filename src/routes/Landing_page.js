import "../static/css/landing.css";
import Header2 from "../components/Header2";
import Button from "antd/lib/button/button";
import { NavLink } from "react-router-dom";
function LandingPage() {
    return (
        <>
            <Header2 />
            <img className="landing" src="images/landing.jpg" />
            <NavLink to="/Login">
                <Button className="landing_login_btn">로그인하여 시작하기</Button>
            </NavLink>
        </>
    );
}
export default LandingPage;
