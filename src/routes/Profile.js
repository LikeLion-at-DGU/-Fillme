import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile({ isLoggedIn, setIsLoggedIn }) {
    const [user, setUser] = useState();
    const [memo, setmemo] = useState();
    const [image, setimage] = useState();
    const [fullname, setfullname] = useState();
    const [color, setcolor] = useState();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/");
            console.log("get 성공", request);
            setUser(request.data.user);
            setmemo(request.data.memo);
            setimage(request.data.image);
            setfullname(request.data.fullname);
            setcolor(request.data.color);
        } catch (err) {
            console.log(err);
        }
    };

    console.log(user, memo, image, fullname, color);
    return (
        <>
            <style>
                {`#profile {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>

            <div className={styles.wrap}>
                <br />
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
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div>
            <Footer />
        </>
    );
}
export default Profile;
