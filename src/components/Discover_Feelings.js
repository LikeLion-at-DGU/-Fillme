import { useState } from "react";
import dummy from "../data.json"
import styled from "styled-components";

function Mainprofile(dummy) {
    const feelings_style = {
        backgroundImage: `url(${dummy.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const Color = styled.div`{
        background : linear-gradient(90deg, rgba(0, 0, 0, 0.01) 4%, ${dummy.color} 15%);
    }`;

    return (
        <div className="card" id={"discover" + dummy.id}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{dummy.userId}</p>
            </div>
            <Color className="user_data" id={"data"+ dummy.id}>
                <p id="name">{dummy.userName}</p>
                <p id="intro">{dummy.intro}</p> 
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
            </Color>
        </div>
    )

} export default Mainprofile;
