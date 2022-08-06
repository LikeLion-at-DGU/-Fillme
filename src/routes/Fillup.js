import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
function Fillup() {
    return (
        <>
            <Header />
            <Navbar />
            <div className={styles.wrap}></div>
            <Footer2 />
        </>
    );
}
export default Fillup;
