import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styles from "../static/css/style.module.css";
function Profile() {
    return (
        <>
            <Header />
            <div className={styles.wrap}></div>
            <Footer2 />
        </>
    );
}
export default Profile;
