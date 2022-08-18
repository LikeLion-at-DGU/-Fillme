import styles from "../static/css/style.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Logout from "../routes/Logout";
function Clicked_persona_card({ category, image, name, length, username, Color_hex }) {
    const loginusername = localStorage.getItem("loginUserName");
    const imageUrl = "http://127.0.0.1:8000" + image;

    return (
        <>
            <div className={styles.card} style={{ backgroundColor: Color_hex }}>
                <section className={styles.user_id}>{username}</section>
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <section
                    className={styles.user_memo}
                    style={{ display: "inline-block", marginRight: "0.5vw" }}
                >
                    {length}
                </section>
                <section className={styles.user_length} style={{ display: "inline-block" }}>
                    개의 글
                </section>
                <br />
                <br />
                <hr className={styles.br_style} />
                <br />
                <section className={styles.user_memo}>{category}</section>
                <section className={styles.user_name}>{name}</section>
                <img src={imageUrl} className={styles.image_box} />
            </div>
        </>
    );
}
export default Clicked_persona_card;
