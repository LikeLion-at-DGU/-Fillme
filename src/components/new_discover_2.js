import dummy from "../data.json"
import React from "react";
import {useEffect, useState} from "react"
import "../static/css/personadata.css";
import { render } from "@testing-library/react";
import { NfcSharp } from "@mui/icons-material";
import { CssBaseline } from '@mui/material/';

function Second({color}) {

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

    const rendering_2 = (dummy => {
        const persona_2 = [];
            persona_2.push(dummy[2].persona.map(detail => (
            <p key={detail.persona_id} className="persona_data_2_in">{detail.persona_name}{detail.persona_type}</p>)))
        return persona_2;
    })
    return <div className="persona_data_2_out">{rendering_2(dummy)}</div>

}export default Second;