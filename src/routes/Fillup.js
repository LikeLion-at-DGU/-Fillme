import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Fillup_component from "../components/Fillup_component";
import axios from "axios";

function Fillup() {
    const [userProfle, setUserProfile] = useState({
        personas: [],
    });
    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/profile_persona/");
            setUserProfile({
                personas: request.data.personas,
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <style>
                {`#fillup {
                    filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                    brightness(120%) contrast(95%);}`}
            </style>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Fill Up Yourself</h1>
                <br />
                <Fillup_component
                    personas={userProfle.personas}
                />
            </div>
            <Footer />
        </>
    );
}
export default Fillup;
