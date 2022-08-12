import dummy from "../data.json"
import React from "react";
import {useEffect, useState} from "react"
import "../static/css/personadata.css";
import { render } from "@testing-library/react";
import { NfcSharp } from "@mui/icons-material";

function Fourth({color}) {

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

    const rendering_4 = (dummy => {
        const persona_4 = [];
            persona_4.push(dummy[4].persona.map(detail => (
            <p key={detail.persona_id} className="persona_data_4_in">{detail.persona_name}{detail.persona_type}</p>)))
        return persona_4;
    })
    return <div className="persona_data_4_out">{rendering_4(dummy)}</div>

}export default Fourth;