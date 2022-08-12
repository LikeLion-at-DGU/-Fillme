import { useState } from "react";
import Discover_card from "../components/Discover_card";
import dummy from "../data.json"

function Mainprofile(dummy) {
    const feelings_style = {
        backgroundImage: `url(${dummy.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundColor:` (${dummy.color})`,
    };
    // const persona_style = {
    //     backgroundImage: `url(${card.persona_image})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: `no-repeat`,
    //     backgroundPosition: `center`
    // };
    

    return (
        <div className="card" id={"discover" + dummy.id}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{dummy.userId}</p>
            </div>
            <div className="user_data" id={"data"+ dummy.id}>
                <p id="name">{dummy.userName}</p>
                <p id="intro">{dummy.intro}</p> 
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
            </div>
        </div>
    )

} export default Mainprofile;


// function render_persona({id, persona}) {
//     return (
//         <div className="card_persona" id={"persona" + id}>
//             <p id="user_persona">{persona}</p>
//         </div>
//     )
// }


// function render_Discover_feelings(dummy) {
//     return (
//         <Discover_feelings key={dummy.id}
//             user_id={fill.user_id} index={fill.index}
//             image={fill.image} persona={fill.persona}
//             title={fill.title} persona_image={fill.persona_image}
//             color={fill.color}/>
//     )
// }
