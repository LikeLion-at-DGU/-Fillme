import styles from "../static/css/style.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Logout from "../routes/Logout";
import { display, fontSize } from "@mui/system";

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
    my_post,
}) {
    const imageUrl = "http://13.124.66.197:8000" + image;

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
                <section className={styles.post}>게시글</section>
                <section className={styles.follower}>팔로워</section>
                <section className={styles.following}>팔로잉</section>
                <br />
                <section className={styles.post} style={{ fontSize: "2vw" }}>
                    {my_post}
                </section>

                <section className={styles.follower} style={{ fontSize: "2vw" }}>
                    {" "}
                    {follower}
                </section>

                <section className={styles.following} style={{ fontSize: "2vw" }}>
                    {" "}
                    {following}
                </section>
            </div>
        </>
    );
}
export default Persona_Card;
