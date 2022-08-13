import dummy from "../data.json"
import { useState, useEffect } from "react";
import "../static/css/personadata_3.css"

function PicThird() {

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
            persona_f.push(dummy[3].persona.map(detail => (
            <div className="persona_data_3_img_in">
                <img id={"persona3-"+detail.persona_id} className={"detailPersona3-"+detail.persona_id} src={detail.persona_image}/>
            </div>)))
            
        return persona_f;
    })
    if (hover) {
        return (
            <div>
                <div className={"row_image"+dummy[3].id} id={"persona0-"+dummy[3].persona.persona_id} onMouseLeave={OnmouseLeave}>
                    {rend(dummy)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className={"row_image"+dummy[3].id} id={"persona0-"+dummy[3].persona.persona_id} onMouseEnter={OnmouseEnter}>
                    {rend(dummy)}
                </div>
            </div>
        )
    }
} export default PicThird;