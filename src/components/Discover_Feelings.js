import { useState } from "react";

function Discover_feelings({ id, user_id, image, name, intro, persona, type, card_persona }) {
    const [hover, setHover] = useState(false)
    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };

    return (
        <div className="card" id={"discover" + id}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{user_id}</p>
            </div>
            <div className="user_data">
                <p id="name">{name}</p>
                <p id="intro">{intro}</p> 
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
                <div id="persona">{persona}</div>
                <p id="type">{type}</p>
                <div id="card_persona">{card_persona}</div>
                <div id="card_persona_2">{card_persona}</div>
            </div>
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
            title={fill.title} card_persona={fill.body} />
    )
}
