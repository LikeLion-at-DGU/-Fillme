import { useState, useEffect } from "react";
// import dummy from "../data.json"
import styled from "styled-components";
import axios from "axios";

function Mainprofile({ image, color, user, username, fullname, memo }) {
    const imageUrl = "http://127.0.0.1:8000" + image;
    // const [user, setUser] = useState();
    // const [username, setUserName] = useState();
    // const [fullname, setfullname] = useState();
    // const [memo, setmemo] = useState();
    // const [image, setimage] = useState();
    // const [color, setcolor] = useState();
    // const [persona_data, setPersona_data] = useState();
    // const local_main_data = JSON.parse(localStorage.getItem("local_main_data"));

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/random_profile/");
            console.log("get 성공", request.data);
            // setUser(request.data.user);
            // setUserName(request.data.userId);
            // setmemo(request.data.memo);
            // setimage(request.data.image);
            // setfullname(request.data.fullname);
            // setcolor(request.data.color);
            // setcolor(request.data.color_hex);
            // console.log(request.data.user);
            // setPersona_data(request.data.personas);
            // console.log(request.data.personas);
            // console.log("데이터라라", persona_data);
            // localStorage.setItem("local_main_data", JSON.stringify(request.data.personas));
        } catch (err) {
            console.log(err);
        }
    };

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
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
            </Color>
        </div>
    );
}
export default Mainprofile;
