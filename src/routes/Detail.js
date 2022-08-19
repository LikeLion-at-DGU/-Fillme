import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer";
import duby from "../detail_data.json";
import DetailImage from "../components/Detail_image"
import DetailContent from "../components/Detail_content";
import Comment from "../components/Comment";
import styleD from "../static/css/Detail_content.module.css";
// import DetailImage from "../components/Detail_image"
import Discover from './Discover';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TextField, Button, Box, Container } from "@mui/material/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Detail() {
    const location = useLocation();
    const postPk = location.state.postPk;
    // console.log("String postPk 값 체크 ", postPk);

    // 포스트 데이터 초기값 선언
    const [postData, setPostData] = useState({
        personaname: "", title: "", created_at: "", image1: null, image2: null, image3: null, image4: null,
        image5: null, image6: null, image7: null, image8: null, image9: null, image10: null,
        content: "", username: "", like_num: 0, comment_set: [], comment_count: 0,
    });

    // 댓글 보기위한 데이터 초기값 선언
    const [commentData, setCommentData] = useState({
        id: "",
        post: "",
        writer: "",
        username: "",
        content: "",
        created: "",
        updated_at: "",
    });
    // 상세 페이지 리로드 시 1회 실행 / 댓글 & 좋아요 변화 시 리렌더링
    useEffect(() => {
        fetchData();
    }, [postData.like_num, postData.comment_count,]);
    const fetchData = async () => {
        try {
            // 포스트 정보 GET
            const imgPostPullData = await axios.get(`http://127.0.0.1:8000/post/${postPk}/`);
            localStorage.setItem("local_post_data", JSON.stringify(imgPostPullData.data));
            setPostData({
                personaname: imgPostPullData.data.personaname,
                title: imgPostPullData.data.title,
                created_at: imgPostPullData.data.created_at,
                image1: "http://127.0.0.1:8000" + imgPostPullData.data.image1,
                image2: "http://127.0.0.1:8000" + imgPostPullData.data.image2,
                image3: "http://127.0.0.1:8000" + imgPostPullData.data.image3,
                image4: "http://127.0.0.1:8000" + imgPostPullData.data.image4,
                image5: "http://127.0.0.1:8000" + imgPostPullData.data.image5,
                image6: "http://127.0.0.1:8000" + imgPostPullData.data.image6,
                image7: "http://127.0.0.1:8000" + imgPostPullData.data.image7,
                image8: "http://127.0.0.1:8000" + imgPostPullData.data.image8,
                image9: "http://127.0.0.1:8000" + imgPostPullData.data.image9,
                image10: "http://127.0.0.1:8000" + imgPostPullData.data.image10,
                content: imgPostPullData.data.content,
                username: imgPostPullData.data.username,
                like_num: imgPostPullData.data.like_num,
                comment_set: imgPostPullData.data.comment_set,
                comment_count: imgPostPullData.data.comment_count,
            });                                 // 리렌더링 ++
            // 댓글 정보 GET
            const commentPullData = await axios.get(`http://127.0.0.1:8000/post/${postPk}/comments/`);
            localStorage.setItem("local_comment_data", JSON.stringify(commentPullData.data));
            console.log("댓글 데이터 ", commentPullData.data);
            setCommentData({
                id: commentPullData.data.id,
                post: commentPullData.data.post,
                writer: commentPullData.data.writer,
                username: commentPullData.data.username,
                content: commentPullData.data.content,
                created_at: commentPullData.data.created_at,
                updated_at: commentPullData.data.updated_at
            })                                  // 리렌더링 ++
        } catch (err) {
            console.log(err, "fetchData 실패");
        }
    };
    // const postRequest = JSON.parse(localStorage.getItem("local_post_data"));
    // const commentRequest = JSON.parse(localStorage.getItem("local_comment_data"));

    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        setInputValue(e.target.value);          // 리렌더링 ++
    };

    const commentSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/post/${postPk}/comments/`, {
            content: inputValue
        })
            .then((res) => {
                console.log(res, "댓글 등록 성공");
                setInputValue("");              // 리렌더링 ++
                alert("댓글이 등록되었습니다.");
            })
            .catch((res) => {
                console.log(res, "댓글 등록 실패");
            })
    };

    return (
        <>
            <style>
                {`#discover {
                filter: invert(67%) sepia(37%) saturate(660%) hue-rotate(106deg)
                brightness(120%) contrast(95%);}`}
            </style>
            <div className={styleD.wrap}>
                <div className={styleD.container}>                 {/* Grid */}
                    <div className={styleD.item}>                   {/* 1 */}
                        <br />
                        <section className={styleD.personaname}>
                            {postData.personaname}
                        </section>
                        <section className={styleD.title}>
                            {postData.title}
                        </section>
                        <section className={styleD.created_at}>
                            {postData.created_at}
                        </section>
                        <section>
                            {/* <Link>수정</Link> */}
                        </section>
                        <section>
                            {/* <Link>삭제</Link> */}
                        </section>
                    </div>

                    <div className={styleD.item}>                   {/* 2 */}
                        {/* 공백 Grid */}
                    </div>

                    <div className={styleD.item}>                   {/* 3 */}
                        <DetailImage
                            Image1={postData.image1}
                            Image2={postData.image2}
                            Image3={postData.image3}
                            Image4={postData.image4}
                            Image5={postData.image5}
                            Image6={postData.image6}
                            Image7={postData.image7}
                            Image8={postData.image8}
                            Image9={postData.image9}
                            Image10={postData.image10}
                        />
                    </div>

                    <div className={styleD.item}>                   {/* 4 */}
                        {postData.content}
                        <br /><br />
                        <span className={styleD.userName}>@{postData.username}</span>
                        <span className={styleD.countText}>좋아요 {postData.like_num}개</span>
                        <span className={styleD.countText}>댓글 {postData.comment_count}개</span>
                    </div>

                    <div className={styleD.item}>                   {/* 5 */}
                        {postData.comment_set.map((detail) => {
                            <Comment
                                key={detail.id}
                                Id={detail.id}
                                Username={detail.username}
                                Content={detail.content}
                            />
                        })}
                    </div>

                    <div className={styleD.item}>                   {/* 6 */}
                        {/* 공백 Grid */}

                    </div>

                    <div className={styleD.item}>                   {/* 7 */}
                        <Container component="main" maxWidth="md">
                            <Box
                                component="form"
                                onSubmit={commentSubmit}
                                sx={{

                                    display: "flex",
                                    flexDirection: "row",

                                }}
                            >
                                <button>
                                    <FontAwesomeIcon icon={faHeart} size="3x" color="#3cda9f" />
                                </button>
                                <TextField
                                    label="댓글을 입력해주세요"
                                    name="content"
                                    value={inputValue}
                                    fontFamily="AppleSDGothicNeoM00"
                                    fullWidth
                                    sx={{ ml: 1 }}
                                    onChange={onChange}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    fontFamily="AppleSDGothicNeoB00"
                                    sx={{ ml: 2, bgcolor: "#3CDA9F", width: "7vw" }}
                                    onClick={commentSubmit}
                                >
                                    보내기
                                </Button>
                            </Box>
                        </Container>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} export default Detail;    