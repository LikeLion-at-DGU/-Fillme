import { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import axios from "axios";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
    useEffect(() => {
        fetchData();
        // window.location.reload();
    }, []);

    const fetchData = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/random_profile/");
            console.log("get 성공", request.data);

            // setUser(request.data.user);
            // setUserName(request.data.userId);
            // setmemo(request.data.memo);
            // setimage(request.data.image);
            // setfullname(request.data.fullname);
            // setcolor(request.data.color);
            // setcolor(request.data.color_hex);
            // console.log(request.data.user);
            // setPersona_data(request.data.personas);
            // console.log(request.data.personas);
            // console.log("데이터라라", persona_data);
            localStorage.setItem("discover_page", JSON.stringify(request.data));

            // setdummy(dummy);
        } catch (err) {
            console.log(err);
        }
    };
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
