import Header from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";
import signStyle from "../static/css/Sign.module.css";
import { TextField, Button, Typography, Box, Container } from "@mui/material/";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// 페르소나 생성 데이터 양식
// "name" : "페르소나 이름",
// "category" : "카테고리",
// "image" : "페르소나 사진"

const SignupPersona = () => {
    const navigate = useNavigate();
    const {
        formState: { isSubmitting },
    } = useForm(); // 중복 제출 방지
    const [userPersona, setUserPersona] = useState({
        name: "",
        category: "",
        image: null,
    });

    const onChange = (e) => {
        const { value, name } = e.target;
        setUserPersona({
            ...userPersona,
            [name]: value,
        });
    };

    const onLoadFile = (e) => {
        const file = e.target.files[0];
        setUserPersona({
            ...userPersona,
            image: file,
        });
    };

    const addPersona = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (userPersona?.image) {
            formData.append("image", userPersona.image, userPersona.image.name);
        } else {
            window.alert("이미지를 첨부해주세요.");
        }
        formData.append("name", userPersona.name);
        formData.append("category", userPersona.category);

        await axios
            .post("http://127.0.0.1:8000/mypage/persona/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(function (res) {
                // console.log(res, "페르소나 생성 성공");
                navigate("/Profile", { replace: true });
            })
            .catch(function (err) {
                console.log(err, "생성 실패");
            });
    };

    return (
        <>
            <Header />
            <Container component="main" maxWidth="md">
                <Box
                    component="form"
                    onSubmit={addPersona}
                    sx={{
                        marginTop: 5,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "85vh",
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ mb: 3 }}
                        style={{ textAlign: "center" }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        멀티 페르소나를 추가하세요
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        sx={{ mb: 1 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        페르소나 명 *
                    </Typography>
                    <TextField
                        label="페르소나의 이름을 입력해주세요"
                        name="name"
                        value={userPersona.name}
                        fontFamily="AppleSDGothicNeoM00"
                        required
                        fullWidth
                        autoComplete="name"
                        autoFocus
                        sx={{ mb: 3 }}
                        onChange={onChange}
                    />
                    <Typography
                        component="h1"
                        variant="h6"
                        sx={{ mb: 1 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        페르소나 카테고리 *
                    </Typography>
                    <TextField
                        label="페르소나의 카테고리를 입력해주세요"
                        name="category"
                        value={userPersona.category}
                        fontFamily="AppleSDGothicNeoM00"
                        required
                        fullWidth
                        autoComplete="category"
                        sx={{ mb: 3 }}
                        onChange={onChange}
                    />
                    <Typography
                        component="h1"
                        variant="h6"
                        sx={{ mb: 1 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        프로필 이미지
                    </Typography>
                    <Button style={{ justifyContent: "left", padding: "0" }}>
                        <label htmlFor="subProfile">
                            <div className={signStyle.loadImgBtn}>페르소나 프로필 이미지 첨부</div>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="subProfile"
                            style={{ display: `none` }}
                            onChange={onLoadFile}
                        />
                    </Button>
                    {/* <Typography
                        component="h1"
                        variant="h6"
                        sx={{ mb: 1 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        다른 페르소나를 추가하시겠습니까?
                    </Typography>
                    <label htmlFor="mainProfile">
                        <div className={signStyle.addPersonaBtn}>
                            페르소나 추가하기
                        </div>
                    </label> */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        fontFamily="AppleSDGothicNeoB00"
                        style={{ height: "5.5vh" }}
                        sx={{ bgcolor: "#3CDA9F" }}
                        disabled={isSubmitting}
                    >
                        페르소나 추가 완료
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default SignupPersona;
