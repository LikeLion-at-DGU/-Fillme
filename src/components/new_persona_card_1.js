import dummy from "../data.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/personadata_1.css";

function Pickpersona({ card_personas }) {
    const navigate = useNavigate();
    // const CardimgUrl = "http://127.0.0.1:8000" + card_personas.image
    // console.log(card_personas);

    const [hover, setHover] = useState(false);
    const OnmouseEnter = () => {
        setHover(true);
    };
    const OnmouseLeave = () => {
        setHover(false);
    };
    useEffect(() => {}, [hover]);

    const rend = (card_personas) => {
        const persona_f = [];
        persona_f.push(
            card_personas.map((detail, index) => (
                <div className="persona_data_1_img_in">
                    <div
                        id={"persona_detail"}
                        className={"detailPersona" + index}
                        onClick={() => navigate(`/user_profile/${detail.id}/`)}
                        style={{
                            backgroundImage: `url(http://127.0.0.1:8000${detail.image})`,
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center`,
                        }}
                    >
                        <div id={"persona_card"}>{detail.name}</div>
                    </div>
                </div>
            ))
        );

        return persona_f;
    };
    if (hover) {
        return (
            <div>
                <div className={"row_image"} id="persona" onMouseLeave={OnmouseLeave}>
                    {rend(card_personas)}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className={"row_image"} id="persona" onMouseEnter={OnmouseEnter}>
                    {rend(card_personas)}
                </div>
            </div>
        );
    }
}
export default Pickpersona;
