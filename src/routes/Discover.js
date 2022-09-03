import "../static/css/Discover.css";
import Mainprofile from "../components/Discover_Feelings";
import { Footer, Footer2 } from "../components/Footer";
import styles from "../static/css/style.module.css";
// import dummy from "../data.json";
import { useState, useEffect } from "react";
import axios from "axios";
import Pickpersona from "../components/new_persona_card_1";
import { minHeight } from "@mui/system";
function Discover() {
    const [random_profile, setRandom_profile] = useState([]);
    const get_random_profile = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/random_profile/");
            setRandom_profile(request.data);
            console.log(random_profile);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        get_random_profile();
    }, []);

    return (
        <>
            <style>
                {`#discover {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap} style={{ minHeight: "55vh" }}>
                <h1 className={styles.title}>Discover Feelings</h1>

                <div className={styles.wrap2}>
                    {random_profile == [] ? (
                        <div></div>
                    ) : (
                        random_profile.map((per) => (
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
