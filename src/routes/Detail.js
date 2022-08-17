import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer";
import dummy from "../data.json"
import DetailImage from "../components/Detail_image"
import styles from "../static/css/style.module.css";
// import DetailImage from "../components/Detail_image"

function Detail() {

    return(
    <>
    <style>
                {`#discover {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}>
    <DetailImage
        img={dummy.image}
        />
        </div>
    <Footer />
    </>
    );
} export default Detail;    