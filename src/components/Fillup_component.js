import styles from "../static/css/Fillup.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, Pagination, Mousewheel, Scrollbar, Keyboard } from "swiper";
import "../static/css/fillup.css";

function Fillup_component() {
    SwiperCore.use([Navigation, Pagination, Mousewheel, Scrollbar, Keyboard]);
    const local_persona_data = JSON.parse(localStorage.getItem("local_persona_data"));

    //사진 버튼 선택 여부
    const [button1, setbutton1] = useState(true);
    //영상 버튼 선택 여부
    const [button2, setbutton2] = useState(false);

    const [reload, setreload] = useState(random_qna[random_num]);

    //페르소나 여부 (하나도 없으면 false)
    const persona_state = local_persona_data.length == 0 ? false : true;

    //선택된 페르소나
    const [selected, setSelected] = useState("");

    //페르소나 선택됐을 때, selected 값 갱신
    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    //선택된 페르소나 확인
    useEffect(() => {
        console.log(selected);
    }, [selected]);

    //사진 버튼 클릭했을 때
    const onclick1 = () => {
        setbutton1(true);
        setbutton2(false);
    };

    //영상버튼 클릭했을 때
    const onclick2 = () => {
        setbutton2(true);
        setbutton1(false);
    };

    // 새로고침 버튼 클릭했을 때, 질문 랜덤으로 뽑기
    const reload_btn = () => {
        setreload(random_qna[Math.floor(Math.random() * random_qna.length)]);
        // console.log(reload);
    };

    //이미지 목록
    const [imagelist, setImagelist] = useState([]);

    const addImage = (e) => {
        const selectedImageList = e.target.files;
        const currentImageList = [...imagelist];
        for (let i = 0; i < selectedImageList.length; i += 1) {
            const currentImageURL = URL.createObjectURL(selectedImageList[i]);
            currentImageList.push(currentImageURL);
        }
        // if (currentImageList.length > 10) {
        //     currentImageList = currentImageList.slice(0, 10);
        // }
        setImagelist(currentImageList);
    };

    //선택된 이미지 확인
    useEffect(() => {
        console.log(imagelist);
    }, [imagelist]);
    const handleDeleteImage = (id) => {
        setImagelist(imagelist.filter((_, index) => index !== id));
    };
    return (
        <>
            {persona_state ? null : (
                <>
                    <p className={styles.form}>먼저 페르소나를 추가해주세요</p>
                    <button className={styles.button_inactive} style={{ marginBottom: "2.5vw" }}>
                        페르소나 추가하러 가기
                    </button>
                </>
            )}
            <div id="fillup_page" className={persona_state ? null : styles.no_persona}>
                <p className={styles.form}>게시글을 작성할 페르소나를 선택해주세요 *</p>
                <select
                    className={styles.select}
                    disabled={persona_state ? false : true}
                    onChange={handleSelect}
                >
                    <option style={{ display: `none` }} value="selected">
                        페르소나 선택
                    </option>
                    {persona_state
                        ? local_persona_data.map((p) => (
                              <option value={p.id} key={p.id}>
                                  {p.name}
                              </option>
                          ))
                        : null}
                </select>
                <br />
                <br />
                <br />
                <p className={styles.form}>게시글의 유형을 선택해주세요 *</p>
                <button
                    onClick={onclick1}
                    disabled={persona_state ? false : true}
                    className={button1 ? styles.button_active : styles.button_inactive}
                >
                    사진
                </button>
                <button
                    onClick={onclick2}
                    disabled={persona_state ? false : true}
                    className={button2 ? styles.button_active : styles.button_inactive}
                >
                    영상
                </button>{" "}
                <br />
                <br />
                <br />
                {/* 사진, 영상 조건문 -> 사진 버튼 눌렸으면 사진 관련, 영상 버튼 눌렸으면 영상 관련 */}
                {button1 ? (
                    <>
                        <div style={{ display: `flex`, flexDirection: `row` }}>
                            <p className={styles.form}>사진을 선택해주세요 *</p>

                            {/* input 커스터마이징 */}
                            <label htmlFor="image">
                                <img src="images/plus_button.png" className={styles.plus_button} />
                            </label>
                            <input
                                onChange={addImage}
                                type="file"
                                accept="image/*"
                                id="image"
                                style={{ display: `none` }}
                                multiple
                                disabled={persona_state ? false : true}
                            ></input>

                            <p className={styles.text}> (최대 10장) </p>
                        </div>
                        {imagelist.length === 0 ? (
                            <label htmlFor="image">
                                <div className={styles.input_box2}>사진을 선택해주세요</div>
                            </label>
                        ) : (
                            <div className="image_list">
                                <Swiper
                                    className="swiper-container"
                                    spaceBetween={0}
                                    slidesPerView={6}
                                    onSlideChange={() => console.log("slide change")}
                                    // navigation
                                    // pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    mousewheel={true}
                                    direction="horizontal"
                                >
                                    {imagelist.map((image, id) => (
                                        <SwiperSlide key={id}>
                                            <img
                                                class="delete"
                                                src="images/delete.png"
                                                onClick={() => handleDeleteImage(id)}
                                            />
                                            <img
                                                src={image}
                                                alt={`${image}-${id}`}
                                                className={styles.image_list}
                                            />
                                        </SwiperSlide>
                                    ))}
                                    <div
                                        class="swiper-scrollbar"
                                        style={{ marginTop: "50px" }}
                                    ></div>
                                </Swiper>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div style={{ display: `flex`, flexDirection: `row` }}>
                            <p className={styles.form}>영상을 선택해주세요 *</p>
                            {/* input 커스터마이징 */}
                            <label htmlFor="video">
                                <img src="images/plus_button.png" className={styles.plus_button} />
                            </label>
                            <input
                                type="file"
                                accept="video/*"
                                id="video"
                                style={{ display: `none` }}
                                disabled={persona_state ? false : true}
                            ></input>
                        </div>
                        <label htmlFor="video">
                            <div className={styles.input_box}>영상을 선택해주세요</div>
                        </label>
                    </>
                )}
                <br />
                <br />
                <div className={styles.random} id="random_question">
                    <section className={styles.random_text}>
                        어떤 글을 써야할지 모르겠다면 이런 주제는 어때요?
                        <button
                            onClick={reload_btn}
                            className={styles.reload_button}
                            disabled={persona_state ? false : true}
                        ></button>
                    </section>
                    <section className={styles.random_question}>{reload}</section>
                </div>
                <br /> <br />
                <p className={styles.form}>제목을 입력해주세요 *</p>
                <section>
                    <input
                        className={styles.select}
                        placeholder="제목을 입력해주세요 (띄어쓰기 포함 최대 20자)"
                        style={{ color: "black", backgroundImage: `none` }}
                        disabled={persona_state ? false : true}
                    ></input>
                </section>
                <br /> <br />
                <p className={styles.form}>본문을 입력해주세요 *</p>
                <textarea
                    className={styles.textarea}
                    disabled={persona_state ? false : true}
                ></textarea>
                <br />
                <br />
                <button className={styles.submit_button} disabled={persona_state ? false : true}>
                    업로드 하기
                </button>
            </div>
        </>
    );
}
export default Fillup_component;
const random_qna = [
    "(랜덤 질문1 예시) 뜨거운 여름, 햇살 그리고 청량한 바다, 어디로 떠나고 싶으신가요? 소중한 추억이 있다면 공유해주세요!",
    "랜덤 질문2",
    "랜덤 질문3",
    "랜덤 질문4",
    "랜덤 질문5",
    "랜덤 질문6",
];
const random_num = Math.floor(Math.random() * random_qna.length);
