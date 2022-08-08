import "../static/css/Header.css";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>
            </div>
        </>
    );
}
export default Header;
