import "../static/css/Discover.css";
import Mainprofile from "../components/Discover_Feelings";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
// import dummy from "../data.json";
import { useState, useEffect } from "react";
import axios from "axios";
import Pickpersona from "../components/new_persona_card_1";
function Discover() {
    return (
        <>
            <style>
                {`#discover {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Discover Feelings</h1>

                <div className={styles.wrap2}>
                    {JSON.parse(localStorage.getItem("discover_page")) == null ? (
                        <div></div>
                    ) : (
                        JSON.parse(localStorage.getItem("discover_page")).map((per) => (
                            <Mainprofile
                                key={per.id}
                                user={per.id}
                                username={per.username}
                                fullname={per.fullname}
                                memo={per.memo}
                                image={per.image}
                                color={per.color_hex}
                                personas={per.personas}
                            />
                        ))
                    )}
                    {/* {JSON.parse(localStorage.getItem("discover_page")) == null ? (
                        <div></div>
                    ) : (
                        JSON.parse(localStorage.getItem("discover_page")).map((card) => (
                            <Pickpersona card_personas={card.personas} />
                        ))
                    )} */}

                    {/* <Zero />  */}
                    {/* <PicZero /> */}
                    {/* <First /> */}
                    {/* <PicFirst /> */}
                    {/* <Second />  */}
                    {/* <PicSecond /> */}
                    {/* <Third />  */}
                    {/* <PicThird /> */}
                    {/* <Fourth />  */}
                    {/* <PicFourth /> */}
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Discover;
