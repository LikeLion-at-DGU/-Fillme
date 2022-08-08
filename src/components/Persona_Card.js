import styles from "../static/css/style.module.css";
import { useEffect } from "react";

function Persona_Card() {
    // const fetchData = async () => {
    //     const request = await fetch(`http://127.0.0.1:8000/mypage/`);

    //     console.log(request);
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);
    return (
        <div className={styles.card} style={{ backgroundColor: `pink` }}></div>
    );
}
export default Persona_Card;
