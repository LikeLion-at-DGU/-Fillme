import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer";
import dummy from "../data.json"
import DetailImage from "../components/Detail_image"
// import DetailImage from "../components/Detail_image"

function Detail() {

    return(
    <>
    <h3>dks</h3>
    <DetailImage
        img={dummy.image}
        />
    <Footer />
    </>
    );
} export default Detail;