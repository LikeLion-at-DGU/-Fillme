import styles from "../static/css/style.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Logout from "../routes/Logout";

function Persona_Card({
    user,
    username,
    fullname,
    memo,
    color,
    Color_hex,
    image,
    followId,
    followList,
    followings,
    follower,
    following,
}) {
    const loginusername = localStorage.getItem("loginUserName");
    const imageUrl = "http://127.0.0.1:8000" + image;

    return (
        <>
            <div className={styles.card} style={{ backgroundColor: color }}>
                <section className={styles.user_id}>@{username}</section>
                <br />
                <br />
                <section className={styles.user_name}>{fullname}</section>
                <section className={styles.user_memo}>{memo}</section>
                <img src={imageUrl} className={styles.image_box} />

                <br />
                <hr className={styles.br_style} />
                <section className={styles.post}>
                    게시글
                    <br />0 {/* 임시 */}
                </section>
                <section className={styles.follower}>
                    팔로워
                    <br />
                    {follower}
                </section>
                <section className={styles.following}>
                    팔로잉
                    <br />
                    {following}
                </section>
            </div>
        </>
    );
}
export default Persona_Card;
