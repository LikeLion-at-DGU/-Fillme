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
    //api
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
    const handleChange = (e) => {
        setsearchValue(e.target.value);
    };

    //검색 값이 바뀔 때마다 post
    useEffect(() => {
        post_word(searchValue);
    }, [searchValue]);

    //post해서 받은 response확인
    useEffect(() => {
        console.log("받은 데이터", searchResult);
    }, [searchResult]);

    useEffect(() => {
        console.log(searchOpen);
    }, [searchOpen]);

    useEffect(() => {
        // console.log(modalOpen);
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

    //알림

    const outsideModal = useOutSideRef(setModalOpen, button_state);

    return (
        <>
            <div className={cls}>
                <NavLink to="/Feed">
                    <section id="header_logo">Fill Me</section>
                </NavLink>

                <div className="search" ref={outsideSearch}>
                    {searchOpen ? (
                        <div>
                            <input
                                id="search"
                                value={searchValue}
                                onChange={handleChange}
                                className="open_search"
                                type="text"
                            />
                            <section
                                className={search.close_button}
                                onClick={() => {
                                    setCloseState(false);
                                }}
                            />
                            <div className={search.search_list}>
                                {searchValue.length == 0
                                    ? null
                                    : searchResult.map((data) => {
                                          return (
                                              <>
                                                  <div
                                                      className={search.one_user}
                                                      onClick={() => {
                                                          const fetchData = async () => {
                                                              try {
                                                                  const request = await axios.get(
                                                                      `http://127.0.0.1:8000/mypage/profile_persona/${data.id}/`
                                                                  );

                                                                  localStorage.setItem(
                                                                      "user_profile_data",
                                                                      JSON.stringify(request.data)
                                                                  );

                                                                  navigate(`/${data.id}`, {
                                                                      replace: true,
                                                                  });
                                                              } catch (err) {
                                                                  console.log(err);
                                                              }
                                                          };
                                                          fetchData();
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
                                      })}
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
                            <p id="Today">오늘</p>
                            <p id="ThisWeek">이번 주</p>
                            <p id="ThisMonth">이번 달</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}
export default Header;
