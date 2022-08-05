import { useState } from "react";

function Discover_feelings({ id, user_id, image, name, intro, type }) {
    const [hover, setHover] = useState(false)
    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
    };
    if (hover) {
        return (
            <div className="card" id={"feelings" + id} style={feelings_style}>
                <section id="user_id">@{user_id}</section>
                <div className="user_data">
                    <section id="name">{name}</section>
                    <section id="intro">{intro}</section>
                    <section id="type">{type}</section>
                </div>
            </div>
        )

    }
    else {
        return (

            <div className="card" id={"feelings" + id}
                style={feelings_style}>
                <section id="user_id">@{user_id}</section>
                <div className="user_date">
                    <section id="name">{name}</section>
                    <section id="intro">{intro}</section>
                    <section id="type">{type}</section>
                </div>
            </div>
        )
    }

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

