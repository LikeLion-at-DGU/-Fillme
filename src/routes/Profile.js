import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
function Profile() {
    return (
        <>
            <Header />
            <Navbar />
            <style>
                {`#profile {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}></div>
            <Footer2 />
        </>
    );
}
export default Profile;
