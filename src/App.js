import { useState, useEffect } from "react";
import AppRouter from "./components/Router";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("로그인 여부");
        console.log(localStorage.getItem("auth"));
        if (localStorage.getItem("auth") === true) {
            setIsLoggedIn(true);
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
