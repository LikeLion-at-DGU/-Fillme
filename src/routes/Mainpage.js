import Header from "../components/Header";
import styles from "../static/css/style.module.css";
function Mainpage() {
    return (
        <>
            <Header />
            <div className={styles.wrap}></div>
        </>
    );
}
export default Mainpage;
