import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Fill_feelings from "../components/Fill_Feelings";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Clicked_persona_card from "../components/Clicked_persona_card";
function Profile2() {
    const { Id } = useParams();
    const [my_persona_post, setmy_persona_post] = useState([]);
    const [my_persona_info, setmy_persona_info] = useState([]);
    // console.log("axios", axios.defaults.headers);

    const get_post = async () => {
        try {
            const request = await axios.get(`http://127.0.0.1:8000/post/mypost/${Id}/`);
            console.log("페르소나 글 정보", request);
            setmy_persona_post(request.data);
        } catch (err) {
            console.log(err);
        }
    };

    const get_persona_info = async () => {
        try {
            const request = await axios.get(`http://127.0.0.1:8000/mypage/persona/${Id}/`);
            setmy_persona_info(request.data);
            console.log("페르소나 정보", request);
        } catch (err) { }
    };
    useEffect(() => {
        get_post();
        get_persona_info();
    }, []);

    return (
        <>
            <div className={styles.wrap}>
                <br />
                <Clicked_persona_card
                    username={my_persona_info.username}
                    category={my_persona_info.category}
                    image={my_persona_info.image}
                    name={my_persona_info.name}
                    length={my_persona_post.length}
                    Color_hex={my_persona_info.color_hex}
                />

                <div className={styles.wrap2}>{my_persona_post.map(render_fill_feelings)}</div>
            </div>

            <Footer />
        </>
    );
}
export default Profile2;

function render_fill_feelings(fill) {
    return (
        <Fill_feelings
            key={fill.id}
            user_id={fill.username}
            index={fill.id}
            image={fill.image1}
            persona={fill.personaname}
            personaimage={fill.personaimage}
            title={fill.title}
            body={fill.content}
            date_time={fill.updated_at}
        />
    );
}
