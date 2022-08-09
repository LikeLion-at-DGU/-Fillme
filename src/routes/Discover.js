import Header from "../components/Header";
import "../static/css/Discover.css";
import render_Discover_feelings from "../components/Discover_Feelings";
import render_persona from "../components/Discover_Feelings";
// import Discover from './Discover';
import Discover_feelings from "../components/Discover_Feelings";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import { red } from "@mui/material/colors";
function Discover() {
    return (
        <>
            <Header />

            <style>
                {`#discover {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}>
                <br />
                <h1 className={styles.title}>Discover Feelings</h1>

                <div className={styles.wrap2}>
                    {feed.map(render_Discover_feelings)}
                </div>

                {/* <div className={styles.wrap2}>
                    {name.map(render_persona)}
                </div> */}
            </div>
            <Footer />
            <Navbar />
        </>
    );
}
export default Discover;

// json
const feed = [
    {
        id: 1,
        user_id: "is_bell.harper",
        name: "Isabella Harper",
        image: "https://i.ibb.co/xz2H9vn/unsplash-XUT7-V-md7sc-1.png",
        intro: "dance your life, dance the moment",
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        type: [
            "발레리나",
            "동국대학교 연극영화과 20",
            "사랑받는 강아지",
            "태오 여자친구",
        ],
        card_persona: "세부카드 1",
        persona_image: ["http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg"],
        // color1: "rgba(52, 52, 52, 0.8)",
        color1: '#010101',

    },
    {
        id: 2,
        user_id: "kto940620",
        name: "강태오",
        image: "https://i.ibb.co/zVhqdX9/unsplash-7s-GOde9y-SYw.png",
        intro: "인생은 한 번뿐 이 순간을 즐기자",
        type: [],
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        type: [
            "발레리나",
            "동국대학교 연극영화과 20",
            "사랑받는 강아지",
            "태오 여자친구",
        ],
        card_persona: "asdfasdfdfk",
    },

    {
        id: 3,
        user_id: "woodz_dwnm",
        name: "조승연",
        image: "https://i.ibb.co/DMZSChX/unsplash-XUT7-V-md7sc.png",
        intro: "식물을 사랑하는 실내 환경 디자이너",
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        type: [
            "발레리나",
            "동국대학교 연극영화과 20",
            "사랑받는 강아지",
            "태오 여자친구",
        ],
        
    },
    {
        id: 4,
        user_id: "kt.mayson_lifelog",
        name: "Kate Mayson",
        image: "https://i.ibb.co/yFKjnyJ/unsplash-7s-GOde9y-SYw-1.png",
        intro: "Find my Apollo 11, sulf my ocean",
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        type: [
            "발레리나",
            "동국대학교 연극영화과 20",
            "사랑받는 강아지",
            "태오 여자친구",
        ],
        card_persona: "asdfasdfdfk",
        persona_image: ["http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg"]
    },
    {
        id: 5,
        user_id: "irene_is_good",
        name: "Irene Jackson",
        image: "https://i.ibb.co/swCS9yS/unsplash-7s-GOde9y-SYw-2.png",
        intro: "It's me because, it's me",
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        type: [
            "발레리나",
            "동국대학교 연극영화과 20",
            "사랑받는 강아지",
            "태오 여자친구",
        ],
        card_persona: "asdfasdfdfk",
    },
];
