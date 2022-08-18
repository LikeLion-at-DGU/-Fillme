import "../static/css/Header.css";
import styles from "../static/css/style.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { borderRight, borderRightColor } from "@mui/system";
import axios from "axios";
import search from "../static/css/Search.module.css";

function Header() {
    //헤더 마우스 스크롤 내리면 사라지고 올리면 생기게
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const cls = visible ? "visible_header" : "hidden_header";
    const [modalOpen, setModalOpen] = useState(false);
    const [button_state, setbuttonState] = useState(false);
    const [close_state, setCloseState] = useState(true);
    //검색

    const [searchValue, setsearchValue] = useState("");
    const [searchResult, setsearchResult] = useState([]);
    const [searchOpen, setsearchOpen] = useState(false);
    const [delete_hist_list, set_delete_hist_list] = useState([]);
    //검색하는 단어 감지? 저장
    const handleChange = (e) => {
        setsearchValue(e.target.value);
    };

    //검색어가 생기면 검색어를 post하고 그 결과를 받아서 저장
    const post_word = (word) => {
        const data = {
            word: word,
        };
        let send_response = "";
        axios
            .post("http://127.0.0.1:8000/search/", data)
            .then((response) => {
                // console.log(response);
                send_response = response.data;
                // console.log(send_response);
                setsearchResult(send_response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //검색 히스토리
    const [history, setHistory] = useState();
    // 히스토리 get
    const get_history = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/search/history/");
            setHistory(request.data);
            console.log("히스토리 불러오기 성공!", history);
        } catch (err) {
            console.log(err);
        }
    };

    //히스토리 저장
    const post_history = (history) => {
        const data = {
            resultprofile: history.userid,
            image: history.image,
        };

        axios
            .post("http://127.0.0.1:8000/search/history/", data)
            .then((response) => {
                console.log("검색 기록 생성 완료!", response);
            })
            .catch((error) => {
                console.log(error);
                console.log("이미지 형식", history.image);
            });
    };

    //히스토리 삭제
    const delete_history = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/search/history/${id}/`)
            .then((response) => {
                // console.log(response);

                set_delete_hist_list(response);
                console.log("히스토리 삭제 성공");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //히스토리 삭제 될 때마다 history 다시 불러오기
    useEffect(() => {
        get_history();
    }, [delete_hist_list]);

    //검색 값이 바뀔 때마다 post & 히스토리 저장
    useEffect(() => {
        post_word(searchValue);
        get_history();
    }, [searchValue]);

    //post해서 받은 response확인
    useEffect(() => {
        console.log("받은 데이터", searchResult);
    }, [searchResult]);

    useEffect(() => {
        console.log(searchOpen);
        get_history();
    }, [searchOpen]);

    useEffect(() => {
        get_notice();
    }, [modalOpen]);

    //스크롤 내리면 header 사라질때, 검색창, 알림창도 사라지도록
    useEffect(() => {
        if (!visible) {
            setsearchOpen(false);
            setModalOpen(false);
        }
    }, [visible]);

    //검색창, 모달창 밖에 클릭하면꺼지도록
    function useOutSideRef(funct, close_button) {
        const ref = useRef(null);

        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    funct(false);
                } else if (!close_button) {
                    funct(false);
                } else {
                    funct(true);
                }
            }
            document.addEventListener("click", handleClickOutside);

            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        });

        return ref;
    }
    const outsideSearch = useOutSideRef(setsearchOpen, close_state);

    //검색한거 클릭하면 다른 사람 프로필 들어가지도록
    const fetchData = async (id) => {
        try {
            const request = await axios.get(`http://127.0.0.1:8000/mypage/profile_persona/${id}/`);
            const requestFollow = await axios.get(
                `http://127.0.0.1:8000/mypage/${id}/following_list/`
            );
            localStorage.setItem("local_follow_data", JSON.stringify(requestFollow.data));

            const requestMyFollow = await axios.get("http://127.0.0.1:8000/mypage/following_list/");
            localStorage.setItem("local_my_follow_data", JSON.stringify(requestMyFollow.data));
            localStorage.setItem("user_profile_data", JSON.stringify(request.data));

            navigate(`/${id}`, {
                replace: true,
            });
        } catch (err) {
            console.log(err);
        }
    };
    //알림

    const outsideModal = useOutSideRef(setModalOpen, button_state);
    const [notice, setNotice] = useState([]);
    const get_notice = async () => {
        try {
            const request = await axios.get("http://127.0.0.1:8000/notice/");
            setNotice(request.data);
            console.log("알림 불러오기 성공!", notice);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* 상단 로고 */}
            <div className={cls}>
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>

                {/* 검색창 */}
                <div className="search" ref={outsideSearch}>
                    {/* 검색창 열려있으면 */}
                    {searchOpen ? (
                        <div>
                            {/* 검색창(input) */}
                            <input
                                id="search"
                                value={searchValue}
                                onChange={handleChange}
                                className="open_search"
                                type="text"
                            />
                            {/* x 버튼 */}
                            <section
                                className={search.close_button}
                                onClick={() => {
                                    setCloseState(false);
                                }}
                            />
                            {/* 검색 결과 나오는 부분 */}
                            <div className={search.search_list}>
                                {/* 검색내용 있을때, 없을 때 다르게 */}
                                {searchValue.length == 0 ? (
                                    // 검색어 없으면, 히스토리 보여주기
                                    <>
                                        <p className={search.fullname}>최근 검색 기록</p>
                                        {history.map((data) => {
                                            return (
                                                <>
                                                    <div className={search.one_user}>
                                                        <div
                                                            className={search.left}
                                                            onClick={() => {
                                                                console.log("받아온 데이터", data);
                                                                fetchData(data.resultprofile);
                                                            }}
                                                        >
                                                            <section
                                                                style={{
                                                                    backgroundImage: `url(
                                                            http://127.0.0.1:8000${data.image}
                                                        )`,
                                                                }}
                                                                className={search.image}
                                                            ></section>

                                                            <div className={search.text_part}>
                                                                <section
                                                                    className={search.fullname}
                                                                >
                                                                    {data.fullname}
                                                                </section>
                                                                <section
                                                                    className={search.username}
                                                                >
                                                                    @{data.username}
                                                                </section>
                                                            </div>
                                                        </div>
                                                        <section
                                                            onClick={() => {
                                                                delete_history(data.id);
                                                            }}
                                                            className={search.delete_history}
                                                        ></section>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </>
                                ) : (
                                    searchResult.map((data) => {
                                        return (
                                            <>
                                                <div
                                                    className={search.one_user}
                                                    // 검색어 클릭하면 해당 유저의 정보를 get해오고, 해당 유저의 프로필로 이동
                                                    onClick={() => {
                                                        fetchData(data.id);
                                                        post_history(data);
                                                    }}
                                                >
                                                    <section
                                                        style={{
                                                            backgroundImage: `url(
                                                              http://127.0.0.1:8000${data.image}
                                                          )`,
                                                        }}
                                                        className={search.image}
                                                    ></section>

                                                    <div className={search.text_part}>
                                                        <section className={search.fullname}>
                                                            {data.fullname}
                                                        </section>
                                                        <section className={search.username}>
                                                            @{data.username}
                                                        </section>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <input
                                id="search"
                                value={searchValue}
                                onChange={handleChange}
                                className="close_search"
                                type="text"
                                onClick={() => {
                                    setCloseState(true);
                                }}
                            />
                        </>
                    )}
                </div>

                <div className="modal" ref={outsideModal}>
                    <button
                        type="button"
                        onClick={
                            modalOpen
                                ? () => {
                                      setbuttonState(false);
                                  }
                                : () => {
                                      setbuttonState(true);
                                  }
                        }
                    >
                        <img className={styles.icon} id="bell" src="images/bell.png" alt="New" />
                    </button>

                    {modalOpen && !searchOpen ? (
                        <div className="News">
                            {notice.length > 0 ? (
                                notice.map((data) => {
                                    return (
                                        <p className={search.notice}>
                                            <section className={search.username}>
                                                @{data.userfrom}
                                            </section>
                                            님이
                                            <section className={search.username}>
                                                {data.userto}
                                            </section>
                                            {data.text}
                                            <br />
                                            <section className={search.notice_comment}>
                                                {data.content === "null"
                                                    ? null
                                                    : data.content.slice(0, 20) + "..."}
                                                <section className={search.date}>
                                                    {data.calculatedtime}
                                                </section>
                                            </section>
                                        </p>
                                    );
                                })
                            ) : (
                                <p className={search.notice}>새로운 알림이 없습니다.</p>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}
export default Header;
