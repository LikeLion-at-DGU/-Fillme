import dummy from "../data.json"
import React from "react";
import {useEffect, useState} from "react"
import "../static/css/personadata.css";
import { render } from "@testing-library/react";
import { NfcSharp } from "@mui/icons-material";

function First({color}) {

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

    const rendering_1 = (dummy => {
        const persona_1 = [];
            persona_1.push(dummy[1].persona.map(detail => (
            <p key={detail.persona_id} className="persona_data_1_in">{detail.persona_name}<a id="per1">{detail.persona_type}</a></p>)))
        return persona_1;
    })
    return <div className="persona_data_1_out">{rendering_1(dummy)}</div>

}export default First;