import Header from "../components/Header";
import "../static/css/Discover.css";
import render_Discover_feelings from "../components/Discover_Feelings";
import render_Discover_card from "../components/Discover_card";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Discover_card from "../components/Discover_card";
import { red } from "@mui/material/colors";

function Discover() {
    return (
        <>
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
                    {feed.map(render_Discover_card)}
                </div>
            </div>

            <Footer />
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
        persona: "프로필 1",
        persona_image: [
            "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        ],
        type: [
            "발레리나",
            "동국대학교 연극영화과 20",
            "사랑받는 강아지",
            "태오 여자친구",
        ],
        card: [
            {
                id: 1,
                persona_image: "url",
                persona_name: "glisade",
                type: "발레리나",
            },
            {
                id: 2,
                persona_image: "url",
                persona_name: "이사벨라 하퍼",
                type: "동국대학교 연극영화과 20",
            },
            {
                id: 3,
                persona_image: "url",
                persona_name: "JACK",
                type: "사랑받는 강아지",
            },
            {
                id: 4,
                persona_image: "url",
                persona_name: "태오꺼",
                type: "태오 여자친구",
            },
        ],
    },
    {
        id: 2,
        user_id: "kto940620",
        name: "강태오",
        image: "https://i.ibb.co/zVhqdX9/unsplash-7s-GOde9y-SYw.png",
        intro: "인생은 한 번뿐 이 순간을 즐기자",
        persona_image: [
            "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        ],
        persona: "gkgk",
        card: [
            {
                id: 1,
                persona_image: "url",
                persona_name: "taeoh fashion",
                type: "패셔니스타",
            },
            {
                id: 2,
                persona_image: "url",
                persona_name: "어푸어푸",
                type: "바다의 왕자 마린보이",
            },
            {
                id: 3,
                persona_image: "url",
                persona_name: "마음의 양식",
                type: "독서 클럽 회원",
            },
        ],
    },

    {
        id: 3,
        user_id: "woodz_dwnm",
        name: "조승연",
        image: "https://i.ibb.co/DMZSChX/unsplash-XUT7-V-md7sc.png",
        intro: "식물을 사랑하는 실내 환경 디자이너",
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        persona_image: [
            "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        ],
        card: [
            {
                id: 1,
                persona_image: "url",
                persona_name: "조승연",
                type: "일상",
            },
            {
                id: 2,
                persona_image: "url",
                persona_name: "Yeon Cho",
                type: "실내 건축 디자이너",
            },
            {
                id: 3,
                persona_image: "url",
                persona_name: "WOODZ",
                type: "플랜테리어 디자이너",
            },
            {
                id: 4,
                persona_image: "url",
                persona_name: "준호 여자친구",
                type: "승연준호",
            },
        ],
    },
    {
        id: 4,
        user_id: "kt.mayson_lifelog",
        name: "Kate Mayson",
        image: "https://i.ibb.co/yFKjnyJ/unsplash-7s-GOde9y-SYw-1.png",
        intro: "Find my Apollo 11, sulf my ocean",
        persona: ["glisade", "이사벨라 하퍼", "JACK", "태오꺼"],
        persona_image: [
            "http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg",
        ],
        card: [
            {
                id: 1,
                persona_image: "url",
                persona_name: "kate snaps",
                type: "프로필 사진 작가",
            },
            {
                id: 2,
                persona_image: "url",
                persona_name: "무제",
                type: "아티스트",
            },
        ],
    },
    {
        id: 5,
        user_id: "irene_is_good",
        name: "Irene Jackson",
        image: "https://i.ibb.co/swCS9yS/unsplash-7s-GOde9y-SYw-2.png",
        intro: "It's me because, it's me",
        // persona_image: ["http://itimg.chosun.com/sitedata/image/201810/02/2018100200110_0.jpg"],
        card: [
            {
                id: 1,
                persona_image: "url",
                persona_name: "cookrene",
                type: "비밀 레시피",
            },
            {
                id: 2,
                persona_image: "url",
                persona_name: "the jackson",
                type: "패션 모델",
            },
            {
                id: 3,
                persona_image: "url",
                persona_name: "irene nature",
                type: "조경 관리사",
            },
        ],
    },
];
