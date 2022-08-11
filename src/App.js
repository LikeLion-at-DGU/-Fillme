import { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import axios from "axios";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
    console.log(axios.defaults.headers);

    useEffect(() => {
        console.log("로그인 여부");
        console.log(localStorage);
        if (JSON.parse(localStorage.getItem("auth")) === true) {
            setIsLoggedIn(true);
            console.log(JSON.parse(localStorage.getItem("auth")));
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        console.log("로그인한 유저(없으면 0, 있으면 pk 번호");
        console.log(localStorage.getItem("logInUserId"));
    }, []);

    return (
        <div className="app">
            <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
    );
}

export default App;
