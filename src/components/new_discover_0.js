import dummy from "../data.json"
import React from "react";
import {useEffect, useState} from "react"
import "../static/css/personadata.css";
import { render } from "@testing-library/react";
import { NfcSharp } from "@mui/icons-material";

function Zero({color}) {

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

    const rendering_0 = (dummy => {
        const persona_0 = [];
            persona_0.push(dummy[0].persona.map(detail => (
            <p key={detail.persona_id} className="persona_data_0_in">{detail.persona_name}<a>{detail.persona_type}</a></p>)))
        return persona_0;
    })
    return <div className="persona_data_0_out">{rendering_0(dummy)}</div>

}export default Zero;