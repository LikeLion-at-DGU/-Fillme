import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer";
import duby from "../detail_data.json";
import DetailImage from "../components/Detail_image"
import DetailContent from "../components/Detail_content";
import styles from "../static/css/style.module.css";
// import DetailImage from "../components/Detail_image"

function Detail() {
    return (
        <>
            <style>
                {`#discover {
                filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}>
                <div className="base">
                    <div id="persona_name">
                        {duby.persona}
                    </div>
                    <div id="title">
                        {duby.title}
                    </div>
                    <div id="created_at">
                        {duby.created_at}
                    </div>
                </div>

                <div className={styles.wrap2}>
                    <DetailImage />
                </div>

                <div className="content">
                    <DetailContent
                        content={duby.content}
                        comment_set={duby.comment_set} />
                </div>

                <div className="new_comment" type="textarea">
                </div>
            </div>
            <Footer />
        </>
    );
} export default Detail;    