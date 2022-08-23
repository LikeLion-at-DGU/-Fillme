import React from "react";
import styles from "../static/css/style.module.css";
import axios from "axios";
import Header from "../components/Header";
const Logout = ({ isLoggedIn, setIsLoggedIn }) => {
    const logOut = (e) => {
        e.preventDefault();
        if (window.confirm("정말 로그아웃하시겠습니까?")) {
            console.log("로그아웃됨");
            console.log(JSON.parse(localStorage.getItem("auth")));
            console.log(JSON.parse(localStorage.getItem("logInUserId")));
            setIsLoggedIn(false);
            localStorage.clear();
            axios
                .post(`http://127.0.0.1:8000/accounts/logout/`, null)
                .then(function (response) {
                    console.log("로그아웃", response);
                    window.location.replace("/");
                })
                .catch(function (error) {
                    console.log("로그아웃", error);
                    window.location.replace("/");
                });
        } else {
            return;
        }
    };
    return (
        <>
            <button className={styles.logout} onClick={logOut}>
                로그아웃
            </button>
        </>
    );
};
export default Logout;
