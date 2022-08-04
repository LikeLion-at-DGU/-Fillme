import { useState } from "react";

function Fill_feelings({id,user_id, image, persona, title, body, date_time}){
    const [hover, setHover] = useState(false)
    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
      };
    if(hover){
        return(

            <div className = "feelings" id = {"feelings"+id}
            style={feelings_style}>
                <section id = "user_id">@{user_id}</section>
                <div className = "feelings_content">
                    <section id = "feed_persona">{persona}</section>
                    <section id = "feed_title">{title}</section>
                    <p id = "feed_body">{body}</p>
                    <section id = "feed_date_time">{date_time}</section>
                </div>

            </div>
    )

    }
    else{
        return(

            <div className = "feelings" id = {"feelings"+id}
            style={feelings_style}>
                <section id = "user_id">@{user_id}</section>
                <div className = "feelings_content">
                    <section id = "feed_persona">{persona}</section>
                    <section id = "feed_title">{title}</section>
                    
                    <section id = "feed_date_time">{date_time}</section>
                </div>

            </div>
    )
    }
    
}export default Fill_feelings;





function render_fill_feelings(fill){
    return (
        <Fill_feelings key = {fill.id} 
        user_id = {fill.user_id} index = {fill.index} 
        image = {fill.image} persona = {fill.persona}
        title = {fill.title} body = {fill.body} 
        date_time = {fill.date_time}/>
    )
}

