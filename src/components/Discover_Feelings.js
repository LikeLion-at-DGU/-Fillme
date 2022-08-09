import { useState } from "react";
import feed from "../routes/Discover";
import render_Discover_card from "../components/Discover_card";
import Discover_card from "../components/Discover_card";

function Discover_feelings({ id, user_id, image, persona_image, name, intro, persona, type, card_persona }) {
    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    const persona_style = {
        backgroundImage: `url(${persona_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    // const colorstyle = {
    //     backgroundColor: `${color1}`,
    // };

    

    return (
        <div className="card" id={"discover" + id}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{user_id}</p>
            </div>
                <div className="user_data" id={"data"+id}>
                    <p id="name">{name}</p>
                    <p id="intro">{intro}</p> 
                    <button id="btn_profile">프로필 보기</button>
                    <button id="btn_following">팔로잉</button>
                    <div id="persona">{persona}</div>
                    <p id="type">{type}</p>
                </div>
            {/* <div className="image_per" style={persona_style}>
                <div className="card_persona" id={"card_persona"+id}><p>{card_persona}</p></div>
            </div> */}
            {/* <div className="image_per" style={persona_style}>
                <Discover_card {feed.map(render_Discover_card)}/>
            </div> */}
            
        </div>
        
    )

} export default Discover_feelings;


// function render_persona({id, persona}) {
//     return (
//         <div className="card_persona" id={"persona" + id}>
//             <p id="user_persona">{persona}</p>
//         </div>
//     )
// }


function render_Discover_feelings(fill) {
    return (
        <Discover_feelings key={fill.id}
            user_id={fill.user_id} index={fill.index}
            image={fill.image} persona={fill.persona}
            title={fill.title} persona_image={fill.persona_image}
            color={fill.color}/>
    )
}
