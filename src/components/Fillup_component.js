import styles from "../static/css/Fillup.module.css";
import { useState } from "react";

function Fillup_component() {
    const persona = ["페르소나1", "페르소나2", "페르소나3"];
    const [button1, setbutton1] = useState(true);
    const [button2, setbutton2] = useState(false);
    const [reload, setreload] = useState(random_qna[random_num]);
    const onclick1 = () => {
        setbutton1(true);
        setbutton2(false);
    };

    const onclick2 = () => {
        setbutton2(true);
        setbutton1(false);
    };
    const reload_btn = () => {
        setreload(random_qna[Math.floor(Math.random() * random_qna.length)]);
        console.log(reload);
    };
    return (
        <>
            <p className={styles.form}>
                게시글을 작성할 페르소나를 선택해주세요 *
            </p>
            <select className={styles.select}>
                <option style={{ display: `none` }} value="selected">
                    페르소나 선택
                </option>
                {persona.map((p) => (
                    <option value={p} key={p}>
                        {p}
                    </option>
                ))}
            </select>
            <br />
            <br />
            <br />
            <p className={styles.form}>게시글의 유형을 선택해주세요 *</p>
            <button
                onClick={onclick1}
                className={
                    button1 ? styles.button_active : styles.button_inactive
                }
            >
                사진
            </button>
            <button
                onClick={onclick2}
                className={
                    button2 ? styles.button_active : styles.button_inactive
                }
            >
                영상
            </button>{" "}
            <br />
            <br />
            <br />
            {button1 ? (
                <>
                    <div style={{ display: `flex`, flexDirection: `row` }}>
                        <p className={styles.form}>사진을 선택해주세요 *</p>

                        {/* input 커스터마이징 */}
                        <label for="image">
                            <img
                                src="images/plus_button.png"
                                className={styles.plus_button}
                            />
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="image"
                            style={{ display: `none` }}
                            multiple
                        ></input>

                        <p className={styles.text}> (최대 10장) </p>
                    </div>
                    <label for="image">
                        <div className={styles.input_box2}>
                            사진을 선택해주세요
                        </div>
                    </label>
                </>
            ) : (
                <>
                    <div style={{ display: `flex`, flexDirection: `row` }}>
                        <p className={styles.form}>영상을 선택해주세요 *</p>
                        {/* input 커스터마이징 */}
                        <label for="video">
                            <img
                                src="images/plus_button.png"
                                className={styles.plus_button}
                            />
                        </label>
                        <input
                            type="file"
                            accept="video/*"
                            id="video"
                            style={{ display: `none` }}
                        ></input>
                    </div>
                    <label for="video">
                        <div className={styles.input_box}>
                            영상을 선택해주세요
                        </div>
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
                ></input>
            </section>
            <br /> <br />
            <p className={styles.form}>본문을 입력해주세요 *</p>
            <textarea className={styles.textarea}></textarea>
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
