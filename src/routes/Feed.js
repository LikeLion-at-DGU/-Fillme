import Header from "../components/Header";
import "../static/css/Feed.css";
// import Fill_feelings from "../components/Fill_Feelings"
import New_Feelings from "./../components/New_Feelings";
import Fill_feelings from "../components/Fill_Feelings";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, Pagination, Mousewheel, Scrollbar, Keyboard } from "swiper";
import { useEffect, useState } from "react";

function Feed() {
    console.log(localStorage);
    const [following_post, setFollowing_post] = useState([]);
    // console.log("axios", axios.defaults.headers);
    const [new_feelings, setNewfeelings] = useState([]);
    console.log("new feelings받기 성공!", new_feelings);
    const get_post = async () => {
        try {
            const request = await axios.get(`http://127.0.0.1:8000/post/follow_persona/`);
            const request_new_feelings = await axios.get(
                `http://127.0.0.1:8000/mypage/new_feelings/`
            );
            // console.log("팔로우 하는 사람들 게시물 받기", request);
            setFollowing_post(request.data);
            setNewfeelings(request_new_feelings.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        get_post();
    }, []);

    return (
        <>
            <Navbar />
            <style>
                {`#home {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>

            <div className={styles.wrap}>
                <h1 className={styles.title}>New Feelings</h1>
                <div className={styles.wrap2}>
                    <div className="new_feelings">
                        {new_feelings.map((per) => (
                            <New_Feelings
                                key={per.id}
                                user_id={per.user}
                                user_name={per.username}
                                persona_id={per.profile}
                                persona_name={per.name}
                                image={per.image}
                                category={per.category}
                            />
                        ))}
                    </div>
                </div>
                <br />
                <br />
                <h1 className={styles.title}>Fill the Feelings</h1>
                <div className={styles.wrap2}>{following_post.map(render_fill_feelings)}</div>
            </div>
            <Footer />
        </>
    );
}
export default Feed;

function render_fill_feelings(fill) {
    return (
        <Fill_feelings
            key={fill.id}
            post_pk={fill.id} // post key 값
            user_id={fill.username}
            index={fill.id}
            image={fill.image1}
            video={fill.video}
            persona={fill.personaname}
            personaimage={fill.personaimage}
            title={fill.title}
            body={fill.content}
            date_time={fill.updated_at}
        />
    );
}

// New Feelings json data example
const persona = [
    {
        id: 10,
        user_id: "taeoh94",
        user_name: "시니영",
        persona_id: "actor94",
        persona_name: "감정을 나누는 배우",
        image: "images/ImgSample1.jfif",
        // <img src="images/ImgSample1.jfif" />
    },
    {
        id: 11,
        user_id: "rommy",
        user_name: "로미",
        persona_id: "rommy_hap",
        persona_name: "행복한 강아지 로미",
        image: "images/ImgSample2.jfif",
    },
    {
        id: 12,
        user_id: "jamy",
        user_name: "제이미",
        persona_id: "jamy_kids",
        persona_name: "노는게 좋은 뽀로로",
        image: "images/ImgSample3.jfif",
    },
    {
        id: 13,
        user_id: "foodlover",
        user_name: "고기맨",
        persona_id: "foodlife",
        persona_name: "고기를 주지 마세요",
        image: "images/ImgSample4.jfif",
    },
    {
        id: 14,
        user_id: "sammy",
        user_name: "세미",
        persona_id: "sammy_dad",
        persona_name: "세미 아빠",
        image: "images/ImgSample5.jfif",
    },
    {
        id: 15,
        user_id: "wnstj701",
        user_name: "Junseo",
        persona_id: "photo",
        persona_name: "Asher",
        image: "images/ImgSample4.jfif",
    },
    {
        id: 16,
        user_id: "yaena",
        user_name: "Yaena",
        persona_id: "ballet",
        persona_name: "Racer",
        image: "images/ImgSample3.jfif",
    },
    {
        id: 17,
        user_id: "0_seo",
        name: "Yeongseo",
        persona_id: "swimmm",
        persona_name: "Swimmer",
        image: "images/ImgSample2.jfif",
    },
];
