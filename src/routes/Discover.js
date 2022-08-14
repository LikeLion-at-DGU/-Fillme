import "../static/css/Discover.css";
import Mainprofile from "../components/Discover_Feelings";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
// import dummy from "../data.json";
import Zero from "../components/new_discover_0";
import First from "../components/new_discover_1";
import Second from "../components/new_discover_2";
import Third from "../components/new_discover_3";
import Fourth from "../components/new_discover_4";
import PicZero from "../components/new_persona_card_0";
import PicFirst from "../components/new_persona_card_1";
import PicSecond from "../components/new_persona_card_2";
import PicThird from "../components/new_persona_card_3";
import PicFourth from "../components/new_persona_card_4";
import { useState, useEffect } from "react";
import axios from "axios";
function Discover() {
    // useEffect(() => {
    //     fetchData();
    //     // window.location.reload();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const request = await axios.get("http://127.0.0.1:8000/mypage/random_profile/");
    //         console.log("get 성공", request.data);

    //         // setUser(request.data.user);
    //         // setUserName(request.data.userId);
    //         // setmemo(request.data.memo);
    //         // setimage(request.data.image);
    //         // setfullname(request.data.fullname);
    //         // setcolor(request.data.color);
    //         // setcolor(request.data.color_hex);
    //         // console.log(request.data.user);
    //         // setPersona_data(request.data.personas);
    //         // console.log(request.data.personas);
    //         // console.log("데이터라라", persona_data);
    //         localStorage.setItem("discover_page", JSON.stringify(request.data));

    //         // setdummy(dummy);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
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
                    {/* {dummy.map(Mainprofile)} */}
                    {/* image, color, user, username, fullname, memo  */}
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
                            />
                        ))
                    )}
                    <Zero /> <PicZero />
                    <First /> <PicFirst />
                    <Second /> <PicSecond />
                    <Third /> <PicThird />
                    <Fourth /> <PicFourth />
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Discover;
