import styles from "../static/css/style.module.css";
import { useEffect } from "react";
import axios from "axios";

function Persona_Card() {
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/");
            console.log(request);
        } catch (err) {
            console.log(err);
        }
    };

    return <div className={styles.card} style={{ backgroundColor: `pink` }}></div>;
}
export default Persona_Card;
