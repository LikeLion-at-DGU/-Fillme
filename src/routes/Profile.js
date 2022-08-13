import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import axios from "axios";
import My_persona_card from "../components/My_persona_card";

function Profile({ isLoggedIn, setIsLoggedIn }) {
    const [user, setUser] = useState();
    const [fullname, setfullname] = useState();
    const [memo, setmemo] = useState();
    const [image, setimage] = useState();
    const [color, setcolor] = useState();
    const [persona_data, setPersona_data] = useState();
    const local_persona_data = JSON.parse(localStorage.getItem("local_persona_data"));
    // const local_persona_data = localStorage.getItem(JSON.parse("local_persona_data"));
    // const persona_load = () => {
    //     switch (persona) {
    //         case 0:
    //             return <div className={styles.no_persona}></div>;
    //         case 1:
    //             return <div className={styles.yes_persona}></div>;
    //     }
    // };
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/profile_persona/");
            console.log("get 성공", request);
            setUser(request.data.user);
            setmemo(request.data.memo);
            setimage(request.data.image);
            setfullname(request.data.fullname);
            setcolor(request.data.color);
            setcolor(request.data.color_hex);
            console.log(request.data);
            // setPersona_data(request.data.personas);
            // console.log(request.data.personas);
            // console.log("데이터라라", persona_data);
            localStorage.setItem("local_persona_data", JSON.stringify(request.data.personas));
        } catch (err) {
            console.log(err);
        }
    };

    // const persona_list = () => {
    //     persona_data.map((per) => (
    //         <>
    //             <section>{per.name}</section>
    //             <section>{per.cathegory}</section>
    //         </>
    //     ));
    // };
    // console.log(user, memo, image, fullname, color);
    // console.log(persona1, persona2, persona3, persona4);
    // console.log(local_persona_data);
    return (
        <>
            <style>
                {`#profile {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>

            <div className={styles.wrap}>
                <div>
                    <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Persona_Card
                        key={user}
                        user={user}
                        memo={memo}
                        color={color}
                        fullname={fullname}
                        image={image}
                    />
                </div>
                <div className={styles.persona_card}>
                    {local_persona_data == null ? (
                        <div className={styles.one_persona_card}></div>
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
                <div className={styles.persona}></div>
            </div>
            <Footer />
        </>
    );
}
export default Profile;
