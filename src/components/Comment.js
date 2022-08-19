import React from 'react';
import styleD from "../static/css/Detail_content.module.css";

const Comment = ({ key, Id, Username, Content }) => {
    console.log("이게 왜 안나오지?", key, Id, Username, Content);

    return (
        <>
            <div>
                <p className={styleD.commentName}>@{Username}</p>
                <p className={styleD.commentContent}>{Content}</p>
            </div>
        </>
    );
};

export default Comment;