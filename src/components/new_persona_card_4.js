import dummy from "../data.json"
import { useState, useEffect } from "react";
import "../static/css/personadata_4.css"

function PicFourth() {

    const [hover, setHover] = useState(false);
    const OnmouseEnter = () => {
        setHover(true);
    };
    const OnmouseLeave = () => {
        setHover(false);
    };
    useEffect(() => {
        console.log("hover change");
    }, [hover]);

    const rend = (dummy => {

        const persona_f = [];
            persona_f.push(dummy[4].persona.map(detail => (
            <div className="persona_data_4_img_in">
                <div id={"persona0-"+detail.persona_id}  
                    className={"detailPersona4-"+detail.persona_id}
                    style={{
                        backgroundImage: `url(${detail.persona_image})`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`
                        }}>
                        <div className={"persona_card"+detail.persona_id}>{detail.persona_name}</div>
                </div>
            </div>)))
            
        return persona_f;
    })
    if (hover) {
        return (
            <div>
                <div className={"row_image"+dummy[4].id} id={"persona0-"+dummy[4].persona.persona_id} onMouseLeave={OnmouseLeave}>
                    {rend(dummy)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className={"row_image"+dummy[4].id} id={"persona0-"+dummy[4].persona.persona_id} onMouseEnter={OnmouseEnter}>
                    {rend(dummy)}
                </div>
            </div>
        )
    }
} export default PicFourth;