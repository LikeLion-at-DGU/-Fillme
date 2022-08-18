import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import Persona_Card from "../components/Persona_Card";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import User_persona_card from "../components/User_persona_card";

function User_Profile() {
    const { user_id } = useParams();
    let request = JSON.parse(localStorage.getItem("user_profile_data"));
    console.log("string user_id 확인 ", user_id);

    const [followData, setFollowData] = useState({
        followings: [],
        followingnum: "",
        followernum: "",
    });

    useEffect(() => {
        request = JSON.parse(localStorage.getItem("user_profile_data"));
        fetchFollow(); // 로그인 유저 ID로 팔로우 리스트 가져오기
    }, [request]);

    const fetchFollow = async () => {
        try {
            const requestFollow = await axios.get(`http://127.0.0.1:8000/mypage/${user_id}/following_list/`);
            localStorage.setItem("local_follow_data", JSON.stringify(requestFollow.data));

            const requestMyFollow = await axios.get("http://127.0.0.1:8000/mypage/following_list/");
            localStorage.setItem("local_my_follow_data", JSON.stringify(requestMyFollow.data));
            setFollowData({
                followings: requestFollow.data.followings,
                followingnum: requestFollow.data.followingnum,
                followernum: requestFollow.data.followernum
            }); // 리렌더링++
        } catch (err) {
            console.log(err);
        }
    };
    const followList = JSON.parse(localStorage.getItem("local_follow_data"));
    console.log("다른 사용자 followList 확인하자 ", followList);

    const myFollowList = JSON.parse(localStorage.getItem("local_my_follow_data"));
    console.log("마이 사용자 followList 확인하자 ", myFollowList);

    console.log("타입 맞는지 확인해줘 ", myFollowList.followings.includes(Number(user_id)));

    // 내가 팔로우한 followList.followings 배열 안에 팔로우한 유저 Id값 있으면 팔로잉 버튼 출력
    const onChange = async (e) => {
        e.preventDefault();
        if (myFollowList.followings.includes(Number(user_id))) {
            // 내 팔로잉 배열에 현재 페이지 params가 있는지 확인
            if (window.confirm("정말 언팔로우하시겠습니까?")) {
                await axios
                    .post(`http://127.0.0.1:8000/mypage/follow/${user_id}/`)
                    .then((res) => {
                        console.log(res, "팔로우 취소 성공");
                    })
                    .catch((res) => {
                        console.log(res, "팔로우 취소 실패");
                    });
                // window.location.reload();
                // navigate(`/${user_id}`, { replace: true });
            } else {
                return;
            }
        } else {
            if (window.confirm("해당 유저를 팔로우하시겠습니까?")) {
                await axios
                    .post(`http://127.0.0.1:8000/mypage/follow/${user_id}/`)
                    .then((res) => {
                        console.log(res, "팔로우 성공");
                    })
                    .catch((res) => {
                        console.log(res, "팔로우 실패");
                    });
                // window.location.reload();
                // navigate(`/${user_id}`, { replace: true });
            } else {
                return;
            }
        }
    };

    const userPersonaCard = [
        request.personas.map((per) => (
            <User_persona_card
                Id={per.id}
                Name={per.name}
                Category={per.category}
                Image={per.image}
            />
        )),
    ];
    return (
        <>
            <Navbar />
            <h1 className={styles.personaTitle}>Profile</h1>
            <div className={styles.cardWrap}>
                <div>
                    <Persona_Card
                        key={request.user}
                        username={request.username}
                        fullname={request.fullname}
                        memo={request.memo}
                        color={request.color_hex}
                        image={request.image}
                        followId={user_id}
                        followList={followData}
                        followings={followData.followings}
                        follower={followData.followernum}
                        following={followData.followingnum}
                    />
                </div>
                <button
                    className={
                        myFollowList.followings.includes(Number(user_id))
                            ? styles.followingBtn
                            : styles.followBtn
                    }
                    onClick={onChange}
                >
                    {myFollowList.followings.includes(Number(user_id)) ? "팔로잉" : "팔로우"}
                </button>
                <div className={styles.persona_card}>{[userPersonaCard]}</div>
            </div>
            <Footer />
        </>
    );
}
export default User_Profile;
