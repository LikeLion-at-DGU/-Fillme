import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import axios from "axios";
import My_persona_card from "../components/My_persona_card";
import { Link, useNavigate } from "react-router-dom";

function Profile({ isLoggedIn, setIsLoggedIn }) {
    // const [user, setUser] = useState();
    // const [fullname, setfullname] = useState();
    // const [memo, setmemo] = useState();
    // const [image, setimage] = useState();
    // const [color, setcolor] = useState();
    // const [persona_data, setPersona_data] = useState();

    // const persona_load = () => {
    //     switch (persona) {
    //         case 0:
    //             return <div className={styles.no_persona}></div>;
    //         case 1:
    //             return <div className={styles.yes_persona}></div>;
    //     }
    // };

    const [userProfile, setUserProfile] = useState({
        user: "",
        fullname: "",
        memo: "",
        color: null,
        color_hex: null,
        image: null,
    })

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/SignupPersona');
    };

    const local_persona_data = JSON.parse(localStorage.getItem("local_persona_data"));
    console.log('local_persona_data', local_persona_data);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/profile_persona/");
            console.log("request", request);
            setUserProfile({
                user: request.data.user,
                fullname: request.data.fullname,
                memo: request.data.memo,
                color: request.data.color,
                color_hex: request.data.color,
                image: request.data.image,
            });
            // setUser(request.data.user);
            // setmemo(request.data.memo);
            // setimage(request.data.image);
            // setfullname(request.data.fullname);
            // setcolor(request.data.color);
            // setcolor(request.data.color_hex);
            localStorage.setItem("local_persona_data", JSON.stringify(request.data.personas));
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <style>
                {`#profile {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <h1 className={styles.title}>My Profile</h1>
            <div className={styles.cardWrap}>
                <div>
                    <button className={styles.addPersonaBtn} onClick={onClick}>페르소나 추가</button>
                    <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Persona_Card
                        key={userProfile.user}
                        user={userProfile.user}
                        fullname={userProfile.fullname}
                        memo={userProfile.memo}
                        color={userProfile.color}
                        image={userProfile.image}
                    />
                </div>
                <div className={styles.persona_card}>
                    {local_persona_data.length === 0 ? (
                        <button className={styles.one_persona_card} onClick={onClick}>
                            <img
                                src="images/plus_button2.png"
                                className={styles.one_persona_cardImg}
                            />
                            <br /><br />
                            페르소나<br />추가하기
                        </button>
                    ) : (
                        local_persona_data.map((per) => (
                            <My_persona_card
                                key={per.id}
                                name={per.name}
                                category={per.category}
                                image={per.image}
                            />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Profile;
