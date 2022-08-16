import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
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
    //헤더 마우스 스크롤 내리면 사라지고 올리면 생기게
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

    //검색

    const [searchValue, setsearchValue] = useState("");

    const handleChange = (e) => {
        setsearchValue(e.target.value);
        console.log(searchValue);
    };

    // const searchClicked = (e) => {
    //     setsearchOpen(true);
    //     console.log("눌림");
    // };
    const [searchOpen, setsearchOpen] = useState(false);
    useEffect(() => {
        console.log(searchOpen);
    }, [searchOpen]);

    function useOutSideRef() {
        const ref = useRef(null);

        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setsearchOpen(false);
                } else {
                    setsearchOpen(true);
                }
            }
            document.addEventListener("click", handleClickOutside);

            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        });

        return ref;
    }
    const outsideRef = useOutSideRef(null);
    //알림
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className={cls}>
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>

                <div className="search" ref={outsideRef}>
                    {searchOpen ? (
                        <div>
                            <input
                                id="search"
                                value={searchValue}
                                onChange={handleChange}
                                className="open_search"
                                type="text"
                            />
                            <div className="search_list"></div>
                        </div>
                    ) : (
                        <>
                            <input
                                id="search"
                                value={searchValue}
                                onChange={handleChange}
                                className="close_search"
                                type="text"
                            />
                        </>
                    )}
                </div>

                <div className="modal">
                    <button type="button" onClick={() => setModalOpen(!modalOpen)}>
                        <img className={styles.icon} id="bell" src="images/bell.png" alt="New" />
                    </button>
                    <div></div>
                    <Modal isOpen={modalOpen} className="customModal" style={Modal_style}>
                        <div className="News">
                            <p id="Today">오늘</p>
                            <p id="ThisWeek">이번 주</p>
                            <p id="ThisMonth">이번 달</p>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
}
export default Header;
