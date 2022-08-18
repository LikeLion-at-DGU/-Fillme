import React, { memo } from "react";
import styles from "../static/css/style.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function User_persona_card({ Id, Name, Category, Image }) {
    const navigate = useNavigate();
    const imageUrl = "http://127.0.0.1:8000" + Image;
    // console.log(imageUrl);

    return (
        <>
            <div
                className={styles.one_persona_card}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <section className={styles.shadow}></section>
                <div
                    onClick={() => {
                        navigate(`/user_profile/${Id}`, {
                            replace: true,
                        });
                    }}
                >
                    <section className={styles.persona_card_name}>{Name}</section>
                    <section className={styles.persona_card_category}>{Category}</section>
                </div>
            </div>
        </>
    );
}

export default User_persona_card;
