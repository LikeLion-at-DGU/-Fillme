import Mainpage from "./routes/Mainpage";
import Discover from "./routes/Discover";
import Feed from "./routes/Feed";
import Profile from "./routes/Profile";
import Profile2 from "./routes/Profile2";
import Fillup from "./routes/Fillup";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Mainpage />}></Route>
                    <Route path="/Feed" element={<Feed />}></Route>
                    <Route path="/Discover" element={<Discover />}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="/Profile2" element={<Profile2 />}></Route>
                    <Route path="/Fillup" element={<Fillup />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
