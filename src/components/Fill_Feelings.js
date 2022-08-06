import { useEffect, useState } from "react";

import React from "react";
function Fill_feelings({
    id,
    user_id,
    image,
    persona,
    title,
    body,
    date_time,
}) {
    const [hover, setHover] = useState(false);
    const OnmouseEnter = () => {
        setHover(true);
    };
    const OnmouseLeave = () => {
        setHover(false);
    };
    useEffect(() => {
        console.log("hover change");
    }, [hover]);

    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };
    if (hover) {
        return (
            <div
                className="feelings"
                id={"feelings" + id}
                style={feelings_style}
                onMouseLeave={OnmouseLeave}
            >
                <section id="user_id">@{user_id}</section>
                <div className="feelings_content2">
                    <section id="feed_persona">{persona}</section>
                    <section id="feed_title">{title}</section>
                    <p id="feed_body">
                        {body.length > 130
                            ? `${body.slice(0, 130)}` + "..."
                            : body}
                    </p>
                    <section id="feed_date_time">{date_time}</section>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="feelings"
                id={"feelings" + id}
                style={feelings_style}
                onMouseEnter={OnmouseEnter}
            >
                <section id="user_id">@{user_id}</section>
                <div className="feelings_content">
                    <section id="feed_persona">{persona}</section>
                    <section id="feed_title">{title}</section>

                    <section id="feed_date_time">{date_time}</section>
                </div>
            </div>
        );
    }
}
export default Fill_feelings;
