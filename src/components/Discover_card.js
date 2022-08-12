import { useEffect, useState } from "react";
import dummy from "../data.json"
import "../static/css/Discover_card.css";

import React from "react";
function Detail_card(dummy) {
    const persona_style_0 = {
        backgroundImage: `url(${dummy[0].persona.persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const persona_style_1 = {
        backgroundImage: `url(${dummy[1].persona.persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const persona_style_2 = {
        backgroundImage: `url(${dummy[2].persona.persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const persona_style_3 = {
        backgroundImage: `url(${dummy[3].persona.persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
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

    // const feelings_style = {
    //     backgroundImage: `url(${persona_image})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: `no-repeat`,
    //     backgroundPosition: `center`,
    // };

    const rendering = (dummy => {
        const persona = [];
        for (let i = 0; i < 5; i++) {
            persona.push(dummy[i].persona.map(detail => (
            <h3 key={detail.persona_id}>{detail.persona_name}, {detail.persona_type}</h3>)))
        }
        return persona;
    })

    if (hover) {
        return (
            <div>
                <div
                    className="per_card2"
                    // id={"card" + dummy[0].persona.persona_id}
                    style={persona_style_0}
                    onMouseLeave={OnmouseLeave}>
                        <section id="persona_name">{rendering(dummy)}</section>
                    
                </div>
                {/* <div
                    className="per_card2"
                    id={"card" + dummy[1].persona.persona_id}
                    style={persona_style_1}
                    onMouseLeave={OnmouseLeave}>
                        <section id="persona_name">{dummy[1].persona.persona_name}</section>
                </div>
                <div
                    className="per_card2"
                    id={"card" + dummy[2].persona.persona_id}
                    style={persona_style_2}
                    onMouseLeave={OnmouseLeave}>
                        <section id="persona_name">{dummy[2].persona.persona_name}</section>
                </div>
                <div
                    className="per_card2"
                    id={"card" + dummy[3].persona.persona_id}
                    style={persona_style_3}
                    onMouseLeave={OnmouseLeave}>
                        <section id="persona_name">{dummy[3].persona.persona_name}</section>
                </div> */}
            </div>
        );
    } else {
        return (
            <div>
                <div
                    className="per_card"
                    // id={"card" + dummy[0].persona.persona_id}
                    style={persona_style_0}
                    onMouseEnter={OnmouseEnter}>
                        <section id="persona_name">{rendering(dummy)}</section>
                </div>
                {/* <div
                    className="per_card"
                    id={"card" + dummy[1].persona.persona_id}
                    style={persona_style_1}
                    onMouseEnter={OnmouseEnter}>
                        <section id="persona_name">{dummy[1].persona.persona_name}</section>
                </div>
                <div
                    className="per_card"
                    id={"card" + dummy[2].persona.persona_id}
                    style={persona_style_2}
                    onMouseEnter={OnmouseEnter}>
                        <section id="persona_name">{dummy[2].persona.persona_name}</section>
                </div>
                <div
                    className="per_card"
                    id={"card" + dummy[3].persona.persona_id}
                    style={persona_style_3}
                    onMouseEnter={OnmouseEnter}>
                        <section id="persona_name">{dummy[3].persona.persona_name}</section>
                </div> */}
            </div>
        );
    }
}
export default Detail_card;

// function render_Discover_card(dummy) {
//     return (
//         <div>
//             dummy[0].map(<Discover_card key={dummy[0].persona_id}
//             user_id={"user"+dummy[0].userId}
//             persona={feed.card.persona}
//             persona_image={feed.card.persona_image}/>)
//         </div>
//     )
// }
