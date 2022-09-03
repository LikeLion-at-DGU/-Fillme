import { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import axios from "axios";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;

    // const fetchData = async () => {
    //     try {
    //         const request = await axios.get("http://127.0.0.1:8000/mypage/random_profile/");
    //         console.log("get 성공", request.data);
    //         localStorage.setItem("discover_page", JSON.stringify(request.data));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const fetchData2 = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/profile_persona/");
            localStorage.setItem("local_persona_data", JSON.stringify(request.data.personas));
            // console.log("get 성공", request);
        } catch (err) {
            console.log(err);
        }
    };

    // console.log(axios.defaults.headers);
    useEffect(() => {
        // console.log("로그인 여부");
        // console.log(localStorage);
        if (JSON.parse(localStorage.getItem("auth")) === true) {
            setIsLoggedIn(true);
            // fetchData();
            fetchData2();
            // console.log(JSON.parse(localStorage.getItem("auth")));
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        // console.log("로그인한 유저(없으면 0, 있으면 pk 번호");
        // console.log(localStorage.getItem("logInUserId"));
    }, []);

    return (
        <div className="app">
            <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
    );
}

export default App;
