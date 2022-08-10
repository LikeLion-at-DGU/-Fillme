import React from "react";

import axios from "axios";
import Header from "../components/Header";
const Logout = ({ isLoggedIn, setIsLoggedIn }) => {
    const logOut = () => {
        localStorage.setItem("auth", false);
        localStorage.setItem("logInUserId", 0);
        console.log("로그아웃됨");
        console.log(localStorage.getItem("auth"));
        console.log(localStorage.getItem("logInUserId"));
        setIsLoggedIn(false);

        axios
            .post(`http://127.0.0.1:8000/accounts/logout/`, null)
            .then(function (response) {
                console.log(response);
                window.location.replace("/");
            })
            .catch(function (error) {
                console.log(error);
                window.location.replace("/");
            });
    };
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={logOut}>logout</button>
        </>
    );
};
export default Logout;
