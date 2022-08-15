import React from "react";
import styles from "../static/css/style.module.css";

function My_persona_card({ name, category, image }) {
    const imageUrl = "http://127.0.0.1:8000" + image;
    // console.log(imageUrl);
    return (
        <>
            <div
                className={styles.one_persona_card}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <section className={styles.shadow}></section>
                <section className={styles.persona_card_name}>{name}</section>
                <section className={styles.persona_card_category}>{category}</section>
                {/* <section><button className={styles.persona_card_button}>수정</button></section> */}
            </div>
        </>
    );
}

export default My_persona_card;
