import { useState, useEffect } from "react";
// import dummy from "../data.json"
import styled from "styled-components";
import axios from "axios";
import "../static/css/Discover.css";
import Pickpersona from "./new_persona_card_1";
import { useNavigate } from "react-router-dom";

function Mainprofile({ image, color, user, username, fullname, memo, personas }) {
    // console.log(user, username);
    const imageUrl = "http://127.0.0.1:8000" + image;
    const fetchData = async (id) => {
        try {
            const request = await axios.get(`http://127.0.0.1:8000/mypage/profile_persona/${id}/`);
            const requestFollow = await axios.get(
                `http://127.0.0.1:8000/mypage/${id}/following_list/`
            );
            const requestMyFollow = await axios.get("http://127.0.0.1:8000/mypage/following_list/");
            localStorage.setItem("local_follow_data", JSON.stringify(requestFollow.data));
            localStorage.setItem("local_my_follow_data", JSON.stringify(requestMyFollow.data));
            localStorage.setItem("user_profile_data", JSON.stringify(request.data));

            navigate(`/Discover/${id}`, {
                replace: true,
            });
        } catch (err) {
            console.log(err);
        }
    };
    const navigate = useNavigate();
    const clickMe = () => {
        // const request = await axios.get(`http://127.0.0.1:8000/mypage/profile_persona/${id}/`);
        // localStorage.setItem("user_profile_data", JSON.stringify(request.data));
        fetchData(user);
    };

    const feelings_style = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const cover_style = {
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const Color = styled.div`
         {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.01) 4%, ${color} 15%);
        }
    `;

    // const rend = (personas => {
    //     const persona_f = [];
    //         persona_f.push(personas.map((card, index) => (
    //         <div className="persona_data_1_img_in">
    //             <div>
    //                 <img className={"Persona_image"+index} style={cover_style} src={"http://127.0.0.1:8000"+card.image}></img>
    //             </div>
    //             <div id={"persona_card"}>{card.name}</div>
    //         </div>)))

    //     return persona_f;
    // })

    return (
        <div className="card" id={"discover" + user}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{username}</p>
            </div>
            <Color className="user_data" id={"data" + user}>
                <p id="name">{fullname}</p>
                <p id="intro">{memo}</p>
                <div>
                    {personas.map((persona, index) => (
                        <div key={index}>
                            <div className={"Persona_name" + index}>{persona.name}</div>
                        </div>
                    ))}
                    {personas.map((persona, index) => (
                        <div key={index}>
                            <div className={"Persona_category" + index}>{persona.category}</div>
                        </div>
                    ))}
                </div>

                <div>
                    {/* {JSON.parse(localStorage.getItem("discover_page")) == null ? (
                        <div></div>
                    ) : (
                        JSON.parse(localStorage.getItem("discover_page")).map((card) => (
                            <Pickpersona card_personas={card.personas} />
                        ))
                    )} */}
                    {/* {personas.map((persona, index) => (
                        <div>
                        <div>
                            <img className={"Persona_image"+index} style={cover_style} src={"http://127.0.0.1:8000"+persona.image}></img>                      
                        </div>
                        <div>{persona.name}</div>
                        </div>
                    ))} */}
                    <Pickpersona card_personas={personas} />
                </div>

                <button id="btn_profile" onClick={clickMe}>
                    프로필 보기
                </button>
                {/* <button id="btn_following">팔로잉</button> */}
            </Color>
        </div>
    );
}
export default Mainprofile;
