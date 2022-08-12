import styles from "../static/css/style.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Persona_Card({ user, fullname, memo, color, image }) {
    const loginusername = localStorage.getItem("loginUserName");
    const imageUrl = "http://127.0.0.1:8000" + image;

    return (
        <>
            <div className={styles.card} style={{ backgroundColor: color }}>
                <section className={styles.user_id}>@{loginusername}</section>
                <section className={styles.user_name}>{fullname}</section>
                <section className={styles.user_memo}>{memo}</section>
                <img src={imageUrl} className={styles.image_box} />
                <br />
                <hr className={styles.br_style} />
            </div>
        </>
    );
}
export default Persona_Card;
