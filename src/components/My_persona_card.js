import React, { memo } from "react";
import styles from "../static/css/style.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function My_persona_card({ Id, Name, Category, Image, Count }) {
    console.log("부모 컴포넌트 props 추출", Id, Name, Category, Image, Count);
    const navigate = useNavigate();
    const imageUrl = "http://127.0.0.1:8000" + Image;
    // console.log(imageUrl);

    // 버튼 상태 조절
    const [controlBtn, setControlBtn] = useState({
        hideState: true,
        hideBtnName: "공개",
    });

    // fetch할 데이터 초기값 설정
    // id => Delete / name, category, image => Update
    const [userPersona, setUserPersona] = useState([
        // { id: "", name: "", category: "", image: null }, // persona1
        // { id: "", name: "", category: "", image: null }, // persona2
        // { id: "", name: "", category: "", image: null }, // persona3
        // { id: "", name: "", category: "", image: null }, // persona4
    ]);

    // 첫 리렌더링 딱 한 번 필요한 데이터 추출할 의도였으나 state 변화에 따른 추가 리렌더링 발생
    useEffect(() => {
        fetchPersona();
        // switch (Count) {
        //     case '0':
        //         return
        //     case '1':
        //         return
        //     case '2':
        //         return
        //     case '3':
        //         return
        // }
        // setUserPersona([
        //     { id: local_persona_data[0].id, name: local_persona_data[0].name, category: local_persona_data[0].category, image: local_persona_data[0].image },
        //     { id: local_persona_data[1].id, name: local_persona_data[1].name, category: local_persona_data[1].category, image: local_persona_data[1].image },
        //     { id: local_persona_data[2].id, name: local_persona_data[2].name, category: local_persona_data[2].category, image: local_persona_data[2].image },

        // ]); // 리렌더링++
    }, []);
    // console.log("userPersona[0] 추출", userPersona[0]);
    // console.log("userPersona[1] 추출", userPersona[1]);
    // console.log("userPersona[2] 추출", userPersona[2]);
    // console.log("userPersona[3] 추출", userPersona[3]);
    // persona id값 가져오기 위해 personas.data.id 추출 과정
    const local_persona_data = JSON.parse(localStorage.getItem("local_persona_data"));
    console.log("local_persona_data", local_persona_data);

    const fetchPersona = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/mypage/profile_persona/");
            // for (let i = 0; i < local_persona_data.length; i++) {
            //     setUserPersona({
            //         id: request.data.personas[i].id,
            //         name: request.data.personas[i].name,
            //         category: request.data.personas[i].category,
            //         image: request.data.personas[i].image,
            //     });
            // }
            localStorage.setItem("local_persona_data", JSON.stringify(request.data.personas));
        } catch (err) {
            console.log(err);
        }
    };

    // 공개 & 비공개 버튼
    const onHide = (e) => {
        e.preventDefault();
        if (controlBtn.hideState) {
            axios.patch(`http://127.0.0.1:8000/mypage/persona/${Id}/openpublic`)
                .then((res) => {
                    console.log(res, "페르소나 비공개 성공");
                    setControlBtn({ // 리렌더링2
                        hideState: false,
                        hideBtnName: "비공개",
                    });
                    navigate("/Profile", { replace: true });
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            axios.patch(`http://127.0.0.1:8000/mypage/persona/${Id}/openpublic`)
                .then((res) => {
                    console.log(res, "페르소나 공개 성공");
                    setControlBtn({ // 리렌더링2
                        hideState: true,
                        hideBtnName: "공개",
                    });
                    navigate("/Profile", { replace: true });
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };

    // 페르소나 삭제 버튼
    const onDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://127.0.0.1:8000/mypage/persona/${Id}/`) //
            .then((res) => {
                console.log(res, "페르소나 삭제 성공");
                window.location.replace("/Profile");
            })
            .catch((res) => {
                console.log(res, "페르소나 삭제 실패");
            })
    };
    return (
        <>
            <div
                className={styles.one_persona_card}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <button className={styles.persona_card_update}>수정</button>
                <button className={styles.persona_card_delete} onClick={onDelete}>삭제</button>
                <section className={styles.shadow}></section>
                <section className={styles.persona_card_name}>{Name}</section>
                <section className={styles.persona_card_category}>{Category}</section>
                <button className={styles.hideBtn} onClick={onHide}>{controlBtn.hideBtnName}</button>
            </div>
        </>
    );
}

export default My_persona_card;
