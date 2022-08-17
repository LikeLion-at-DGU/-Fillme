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

    useEffect(() => {
        request = JSON.parse(localStorage.getItem("user_profile_data"));
    }, [user_id]);
    const personaCard = [
        request.personas.map((per) => (
            <User_persona_card
                Id={per.id}
                Name={per.name}
                Category={per.category}
                Image={per.image}
            />
        )),
    ];

    let followState = useRef("팔로우");
    const onChange = async (e) => {
        e.preventDefault();
        if (followState.current === "팔로우") {
            followState.current = "팔로잉";
            console.log("팔로우 버튼 눌렀을 때", followState.current);
            await axios.post(`http://127.0.0.1:8000/mypage/follow/${Id}/`)
                .then((res) => {
                    console.log(res, "팔로우 성공");
                })
                .catch((res) => {
                    console.log(res, "팔로우 실패");
                })
        } else {
            followState.current = "팔로우";
            console.log("팔로우 취소 눌렀을 때", followState.current);
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
                    className={followState.current === "팔로우" ? styles.followBtn : styles.beforeFollowBtn}
                    onClick={onChange}
                >
                    {followState.current}
                </button>
                <div className={styles.persona_card}>{[personaCard]}</div>
            </div>
            <Footer />
        </>
    );
}
export default User_Profile;
