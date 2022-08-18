import { useState } from "react";
import duby from "../detail_data.json"
import "../static/css/Detail_content.css"

export default function DetailContent({ content, comment_set }) {

    return (
        <div>
            <div className="content">
                {content}
            </div>
            <div className="comment">
                {comment_set.map((per) => (
                    <div>
                        <div id="user_id">@{per.id}</div>
                        <div id="user_comment">{per.comment}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
