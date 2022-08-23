import React from "react";
import Header from "../components/Header";
import signStyle from "../static/css/Sign.module.css";
import { Footer } from "../components/Footer";
import { TextField, Button, Typography, Box, Container } from "@mui/material/";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

const UpdatePersona = () => {
    const location = useLocation();
    const prevId = location.state.personaId;
    console.log("페르소나 Id 잘 넘어왔는지 확인", prevId);
    const navigate = useNavigate();
    const {
        formState: { isSubmitting },
    } = useForm(); // 중복 제출 방지
    const [userUpdatePersona, setUserUpdatePersona] = useState({
        name: "",
        category: "",
        image: null,
    });

    // 페르소나 명, 카테고리 변화 감지
    const onChange = (e) => {
        const { value, name } = e.target;
        setUserUpdatePersona({
            ...userUpdatePersona,
            [name]: value,
        });
    };

    // 페르소나 프로필 변화 감지
    const onLoadFile = (e) => {
        const file = e.target.files[0];
        setUserUpdatePersona({
            ...userUpdatePersona,
            image: file,
        });
    };

    // 페르소나 수정 버튼
    const onUpdate = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (userUpdatePersona?.image) {
            formData.append("image", userUpdatePersona.image, userUpdatePersona.image.name);
        } else {
            window.alert("이미지를 첨부해주세요.");
        }
        formData.append("name", userUpdatePersona.name);
        formData.append("category", userUpdatePersona.category);

        await axios
            .patch(`http://127.0.0.1:8000/mypage/persona/${prevId}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res, "페르소나 수정 성공");
                navigate("/Profile", { replace: true });
            })
            .catch((res) => {
                console.log(res, "페르소나 수정 실패");
            });
    };
    return (
        <>
            <Header />
            <Container component="main" maxWidth="md">
                <Box
                    component="form"
                    onSubmit={onUpdate}
                    sx={{
                        marginTop: 5,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "70vh",
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ mb: 3 }}
                        style={{ textAlign: "center" }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        멀티 페르소나를 수정하세요
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
                        label="수정할 페르소나의 이름을 입력해주세요"
                        name="name"
                        value={userUpdatePersona.name}
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
                        label="수정할 페르소나의 카테고리를 입력해주세요"
                        name="category"
                        value={userUpdatePersona.category}
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
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        fontFamily="AppleSDGothicNeoB00"
                        style={{ height: "5.5vh" }}
                        sx={{ bgcolor: "#3CDA9F" }}
                        disabled={isSubmitting}
                    >
                        페르소나 수정 완료
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default UpdatePersona;
