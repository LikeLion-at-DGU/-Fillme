import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import Logout from "./Logout";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import My_persona_card from "../components/My_persona_card";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import User_persona_card from "../components/User_persona_card";

function User_Profile() {
    const { user_id } = useParams();
    let request = JSON.parse(localStorage.getItem("user_profile_data"));
    const Id = request.id;

    const [followData, setFollowData] = useState({
        followings: [],
        followingnum: "",
        followernum: "",
    });

    useEffect(() => {
        request = JSON.parse(localStorage.getItem("user_profile_data"));
        fetchFollow(); // 로그인 유저 ID로 팔로우 리스트 가져오기
    }, [user_id]);

    const fetchFollow = async () => {
        try {
            const requestFollow = await axios.get("http://127.0.0.1:8000/mypage/following_list/");
            setFollowData({
                followings: requestFollow.data.followings,
                followingnum: requestFollow.data.followingnum,
                followernum: requestFollow.data.followernum
            }); // 리렌더링++
            localStorage.setItem("local_follow_data", JSON.stringify(requestFollow.data));
            const followList = JSON.parse(localStorage.getItem("local_follow_data"));
            console.log("followList 출력시켜", followList);
        } catch (err) {
            console.log(err);
        }
    };

    const userPersonaCard = [
        request.personas.map((per) => (
            <User_persona_card
                Id={per.id}
                Name={per.name}
                Category={per.category}
                Image={per.image}
            />
        )),
    ];

    let followState = useRef("팔로우"); // 리렌더링 X
    const [followName, setFollowName] = useState(followState.current);
    const onChange = async (e) => {
        e.preventDefault();
        if (followState.current === "팔로우") {
            followState.current = "팔로잉";
            setFollowName(followState.current);
            await axios.post(`http://127.0.0.1:8000/mypage/follow/${Id}/`)
                .then((res) => {
                    console.log(res, "팔로우 성공");
                })
                .catch((res) => {
                    console.log(res, "팔로우 실패");
                })
        } else {
            followState.current = "팔로우";
            setFollowName(followState.current);
            await axios.post(`http://127.0.0.1:8000/mypage/follow/${Id}/`)
                .then((res) => {
                    console.log(res, "팔로우 취소 성공");
                })
                .catch((res) => {
                    console.log(res, "팔로우 취소 실패");
                })
        };
    };

    return (
        <>
            <Navbar />
            <h1 className={styles.personaTitle}>Profile</h1>
            <div className={styles.cardWrap}>
                <div>
                    <Persona_Card
                        key={request.user}
                        username={request.username}
                        fullname={request.fullname}
                        memo={request.memo}
                        color={request.color_hex}
                        image={request.image}
                    />
                </div>
                <button
                    className={followName === "팔로우" ? styles.followBtn : styles.beforeFollowBtn}
                    onClick={onChange}
                >
                    {followName}
                </button>
                <div className={styles.persona_card}>{[userPersonaCard]}</div>
            </div>
            <Footer />
        </>
    );
}
export default User_Profile;
