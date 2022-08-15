import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { borderRight, borderRightColor } from "@mui/system";

Modal.setAppElement("#root");

const Modal_style = {
    overlay: {
        position: "absolute",
        top: "9%",
        left: "64.5%",
        right: "10%",
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        zIndex: 10,
    },
    content: {
        display: "flex",
        background: "#ffffff",
        overflow: "auto",
        top: "9vh",
        left: "60vw",
        right: "100vw",
        bottom: "42vh",
        WebkitOverflowScrolling: "touch",
        outline: "none",
    },
};

function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    const [searchValue, setsearchValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setsearchValue(e.target.value); //바로 검색가능하다.
        navigate(`/search?q=${e.target.value}`);
    };

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
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>

                <input
                    value={searchValue}
                    onChange={handleChange}
                    className="nav__input"
                    type="text"
                    style={{
                        borderLeftColor: "white",
                        borderTopColor: "white",
                        paddingLeft: "2.5%",
                    }}
                />

                <img className="searchicon" src="images/search.png"></img>

                <div className="modal">
                    <button type="button" onClick={() => setModalOpen(!modalOpen)}>
                        <img className={styles.icon} id="bell" src="images/bell.png" alt="New" />
                    </button>
                    <div>
                        <Modal isOpen={modalOpen} className="customModal" style={Modal_style}>
                            <div className="News">
                                <p id="Today">오늘</p>
                                <p id="ThisWeek">이번 주</p>
                                <p id="ThisMonth">이번 달</p>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
