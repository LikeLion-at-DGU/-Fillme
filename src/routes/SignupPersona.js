import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import React from 'react';
import signStyle from "../static/css/Sign.module.css";
import { TextField, Checkbox, Button, FormControl, FormControlLabel, Link, Grid, Typography, Box, Container } from "@mui/material/";
import { useState, useEffect } from "react";

// 페르소나 생성 데이터 양식
// "name" : "페르소나 이름",
// "category" : "카테고리",
// "image" : "페르소나 사진"

const SignupPersona = () => {
    const [userPersona, setUserPersona] = useState({
        name: "",
        category: "",
        image: null,
    });

    const addPersona = (e) => {
        e.preventDefault();

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
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ mb: 3 }}
                        style={{ textAlign: 'center' }}
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
                        name=""
                        fontFamily="AppleSDGothicNeoM00"
                        required
                        fullWidth
                        autoComplete="name"
                        autoFocus
                        sx={{ mb: 3 }}
                        onChange={setUserPersona}
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
                        name=""
                        fontFamily="AppleSDGothicNeoM00"
                        required
                        fullWidth
                        autoComplete="name"
                        sx={{ mb: 3 }}
                        onChange={setUserPersona}
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
                        <label htmlFor="mainProfile">
                            <div className={signStyle.loadImgBtn}>
                                프로필 이미지 파일 첨부하기
                            </div>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="mainProfile"
                            style={{ display: `none` }}
                            onChange
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
                        style={{ height: '5.5vh' }}
                        sx={{ bgcolor: "#3CDA9F" }}
                        onClick={addPersona}
                    >
                        페르소나 추가 완료
                    </Button>
                </Box>
            </Container>
            <Footer2 />
        </>
    );
};

export default SignupPersona;