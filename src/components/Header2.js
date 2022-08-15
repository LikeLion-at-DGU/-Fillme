import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { borderRight, borderRightColor } from "@mui/system";
import Button from "antd/lib/button";

function Header2() {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const cls = visible ? "visible_header" : "hidden_header";

    return (
        <>
            <div className={cls}>
                <section id="header_logo">Fill Me</section>
                <NavLink to="/Login">
                    <Button className="header2_login_btn">로그인하여 시작하기</Button>
                </NavLink>
            </div>
        </>
    );
}
export default Header2;
