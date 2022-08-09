import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header">
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>
                <NavLink to="/Feed">
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
