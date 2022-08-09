import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">
                <NavLink to="/Feed">
                    <button id="header_logo">Fill Me</button>
                </NavLink>
                <NavLink to="/Modal">
                    <img
                        className={styles.icon}
                        id="bell"
                        src="images/bell.png"
                        alt="New"
                    />
                </NavLink>
            </div>
        </>
    );
}
export default Header;
