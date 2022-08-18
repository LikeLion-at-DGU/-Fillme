import { useState } from "react";
import duby from "../detail_data.json"
// import "../static/css/Detail_content.css"

export default function DetailContent({ content, comment_set }) {

    return (
        <div>
            <div className="content">
                {content}
            </div>
            {/* <div className="comment">
                {comment_set.map((per) => (
                    <div>{per.id}</div>,
                    <div>{per.comment}</div>
                ))}
            </div> */}
        </div>
    );
}
