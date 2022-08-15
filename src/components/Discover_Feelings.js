import { useState, useEffect } from "react";
// import dummy from "../data.json"
import styled from "styled-components";
import axios from "axios";
import "../static/css/Discover.css";

function Mainprofile({ image, color, user, username, fullname, memo, personas }) {
    const imageUrl = "http://127.0.0.1:8000" + image;

    const feelings_style = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const Color = styled.div`
        {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.01) 4%, ${color} 15%);
        }
    `;

    return (
        <div className="card" id={"discover" + user}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{username}</p>
            </div>
            <Color className="user_data" id={"data" + user}>
                <p id="name">{fullname}</p>
                <p id="intro">{memo}</p>
                <div>
                    {personas.map((persona,index) => (
                        <div>
                            <div className="Persona_name">
                                {persona.name}
                            </div>
                            <div className="Persona_category">
                                {persona.category}
                            </div>
                        </div>
                    ))}
                </div>
                
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
            </Color>
        </div>
    );
}
export default Mainprofile;
