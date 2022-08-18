import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import axios from "axios";
import My_persona_card from "../components/My_persona_card";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Profile({ isLoggedIn, setIsLoggedIn }) {
    const [userProfile, setUserProfile] = useState({
        user: "",
        username: "",
        fullname: "",
        memo: "",
        color: null,
        color_hex: null,
        image: null,
    });

    const navigate = useNavigate();
    const onClick = () => {
        navigate("/SignupPersona");
    };

    const local_persona_data = JSON.parse(localStorage.getItem("local_persona_data"));
    console.log("local_persona_data", local_persona_data);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/profile_persona/");
            // const requestFollow = await axios.get("http://127.0.0.1:8000/mypage/following_list/");
            // localStorage.setItem("local_follow_data", JSON.stringify(requestFollow.data));
            setUserProfile({
                user: request.data.user,
                username: request.data.username,
                fullname: request.data.fullname,
                memo: request.data.memo,
                color: request.data.color,
                color_hex: request.data.color_hex,
                image: request.data.image,
            }); // 리렌더링++
            localStorage.setItem("local_persona_data", JSON.stringify(request.data.personas));
            console.log("request.data 추출", request.data);
        } catch (err) {
            console.log(err);
        }
    };
    const followList = JSON.parse(localStorage.getItem("local_follow_data"));
    console.log("followList 확인 ", followList);

    const addCard = [
        <button className={styles.one_persona_card} onClick={onClick}>
            <img src="images/plus_button2.png" className={styles.one_persona_cardImg} />
            <br />
            <br />
            페르소나
            <br />
            추가하기
        </button>,
    ];
    const personaCard = [
        local_persona_data.map((per) => (
            <My_persona_card
                Id={per.id}
                Name={per.name}
                Category={per.category}
                Image={per.image}
                Openpublic={per.openpublic}
            />
        )),
    ];

    return (
        <>
            <style>
                {`#profile {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <h1 className={styles.personaTitle}>My Profile</h1>
            <div className={styles.cardWrap}>
                <div>
                    <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Link to="/SettingProfile">
                        <button className={styles.settingBtn}>
                            <FontAwesomeIcon icon={faGear} size="2x" color="#fff" />
                        </button>
                    </Link>
                    <Persona_Card
                        key={userProfile.user}
                        user={userProfile.user}
                        username={userProfile.username}
                        fullname={userProfile.fullname}
                        memo={userProfile.memo}
                        color={userProfile.color_hex}
                        image={userProfile.image}
                        // followId={user_id}
                        followList={followList}
                        follower={followList.followingnum}
                        following={followList.followernum}
                    />
                </div>
                <div className={styles.persona_card}>
                    {local_persona_data.length === 0
                        ? [addCard]
                        : local_persona_data.length >= 4
                            ? [personaCard]
                            : [...personaCard, addCard]}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Profile;
