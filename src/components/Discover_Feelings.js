import { useState } from "react";

function Discover_feelings({ id, user_id, image, name, intro, type }) {
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
                <p id="type">{type}</p>
            </div>
        </div>
    )


} export default Discover_feelings;





function render_Discover_feelings(fill) {
    return (
        <Discover_feelings key={fill.id}
            user_id={fill.user_id} index={fill.index}
            image={fill.image} persona={fill.persona}
            title={fill.title} body={fill.body}
            date_time={fill.date_time} />
    )
}

