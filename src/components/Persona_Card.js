import styles from "../static/css/style.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Logout from "../routes/Logout";
function Persona_Card({ user, username, fullname, memo, color, image, followId, followList, follower, following }) {
    const loginusername = localStorage.getItem("loginUserName");
    const imageUrl = "http://127.0.0.1:8000" + image;

    return (
        <>
            <div className={styles.card} style={{ backgroundColor: color }}>
                <section className={styles.user_id}>@{username}</section>
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
                    {followList.followernum}
                </section>
                <section className={styles.following}>
                    팔로잉
                    <br />
                    {followList.followingnum}
                </section>
            </div>
        </>
    );
}
export default Persona_Card;
