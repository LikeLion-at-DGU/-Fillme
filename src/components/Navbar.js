import styles from "../static/css/style.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
function Navbar() {
    return (
        <>
            <Header />
            <div className={styles.navbar}>
                <NavLink to="/Feed">
                    <img
                        className={styles.icon}
                        id="home"
                        src="images/home.png"
                        alt="Home"
                    />
                </NavLink>
                <NavLink to="/Discover">
                    <img
                        className={styles.icon}
                        id="discover"
                        src="images/explore.png"
                        alt="explore"
                    />
                </NavLink>
                <NavLink to="/Profile">
                    <img
                        className={styles.icon}
                        id="profile"
                        src="images/person.png"
                        alt="mypage"
                    />
                </NavLink>
                <NavLink to="/Fillup">
                    <img
                        className={styles.icon}
                        id="fillup"
                        src="images/create.png"
                        alt="글작성"
                    />
                </NavLink>
            </div>
            <Outlet />
        </>
    );
}
export default Navbar;
