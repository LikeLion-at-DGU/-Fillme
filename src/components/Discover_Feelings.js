import { useState } from "react";

function Discover_feelings({id,user_id, name, image, persona, intro}){
    const [hover, setHover] = useState(false)
    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundImage: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`

    };
    if(hover){
        return(
            <div className="content">
                <div className="image">
                    <section style={feelings_style}>{image}</section>
                </div>
                <div className = "profile" id = {"profile"+id}>
                    <section id = "user_id">@{user_id}</section>
                    <p id = "name">{name}</p>
                    <p id = "intro">{intro}</p>
                    <p id = "user_persona">{persona}</p>
                </div>
            </div>
    )

    }
    else{
        return(

            <div className = "profile" id = {"profile"+id}
            style={feelings_style}>
                <section id = "user_id">@{user_id}</section>
                <p id = "name">{name}</p>
                <p id = "intro">{intro}</p>
                <p id = "user_persona">{persona}</p>


            </div>
    )
    }
    
}export default Discover_feelings;





function render_Discover_feelings(fill){
    return (
        <Discover_feelings key = {fill.id} 
        user_id = {fill.user_id} index = {fill.index}
        name = {fill.name}
        image = {fill.image} persona = {fill.persona}
        intro = {fill.intro}/>
    )
}

