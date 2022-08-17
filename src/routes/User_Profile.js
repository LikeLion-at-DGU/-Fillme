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
    console.log("리퀘스트 출력 ", request);
    console.log("유저 아이디 출력", user_id);

    // const [followData, setFollowData] = useState({
    //     followings: [],
    //     followingnum: "",
    //     followernum: "",
    // });

    // const [followBtnName, setFollowBtnName] = useState({
    //     followState: "",
    // });

    useEffect(() => {
        request = JSON.parse(localStorage.getItem("user_profile_data"));
        fetchFollow(); // 로그인 유저 ID로 팔로우 리스트 가져오기
    }, [user_id]);

    const fetchFollow = async () => {
        try {
            const requestFollowState = await axios.get(`http://127.0.0.1:8000/mypage/follow/${user_id}/`);
            localStorage.setItem("local_followstate_data", JSON.stringify(requestFollowState.data));
            const followState = JSON.parse(localStorage.getItem("local_followstate_data"));
            console.log("followState 확인해봐 ", followState); // followState 추가

            const requestFollow = await axios.get("http://127.0.0.1:8000/mypage/following_list/");
            localStorage.setItem("local_follow_data", JSON.stringify(requestFollow.data));
            const followList = JSON.parse(localStorage.getItem("local_follow_data"));
            console.log("followList 확인해봐 ", followList);
            // setFollowData({
            //     followings: requestFollow.data.followings,
            //     followingnum: requestFollow.data.followingnum,
            //     followernum: requestFollow.data.followernum
            // }); // 리렌더링++
        } catch (err) {
            console.log(err);
        }
    };

    // 내가 팔로우한 followList.followings 배열 안에 팔로우한 유저 Id값 있으면 팔로잉 버튼 출력
    const onChange = async (e) => {
        e.preventDefault();
        if (user_id) { // 팔로우 되어 있는 상태 조건 followList.followings[0] === 
            if (window.confirm("정말 언팔로우하시겠습니까?")) {
                await axios.post(`http://127.0.0.1:8000/mypage/follow/${user_id}/`)
                    .then((res) => {
                        console.log(res, "팔로우 취소 성공");
                    })
                    .catch((res) => {
                        console.log(res, "팔로우 취소 실패");
                    })
            } else {
                return;
            }
        } else {
            if (window.confirm("해당 유저를 팔로우하시겠습니까?")) {
                await axios.post(`http://127.0.0.1:8000/mypage/follow/${user_id}/`)
                    .then((res) => {
                        console.log(res, "팔로우 성공");
                    })
                    .catch((res) => {
                        console.log(res, "팔로우 실패");
                    })
            } else {
                return;
            }
        };
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
                {/* <button
                    className={followState.followState === "팔로우" ? styles.followBtn : styles.beforeFollowBtn}
                    onClick={onChange}
                >
                    {followState.followState}
                </button> */}
                <div className={styles.persona_card}>{[userPersonaCard]}</div>
            </div>
            <Footer />
        </>
    );
}
export default User_Profile;
