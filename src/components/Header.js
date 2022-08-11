import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
import React, {useState} from "react";
import Modal from "react-modal";
import ModalContents from "react-modal";

Modal.setAppElement('#root')

function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="header" style={{position: "relative"}}>
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>
                <NavLink to="/Feed">
                    
                </NavLink>

                <div className="modal">
                    <button type="button" onClick={() => setModalOpen(!modalOpen)}>
                        <img 
                        className={styles.icon} 
                        id="bell" src="images/bell.png" 
                        alt="New"/>
                    </button>
                    <div>
                        <Modal isOpen={modalOpen}
                            className="customModal">
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
