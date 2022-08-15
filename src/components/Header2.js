import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { borderRight, borderRightColor } from "@mui/system";
import Button from "antd/lib/button";

function Header2() {
    return (
        <>
            <div className="header2">
                <section id="header_logo">Fill Me</section>
                <NavLink to="/Login">
                    <Button className="header2_login_btn">로그인하여 시작하기</Button>
                </NavLink>
            </div>
        </>
    );
}
export default Header2;
