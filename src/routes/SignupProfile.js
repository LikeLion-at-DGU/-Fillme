import React, { useState } from 'react';
import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styled from "styled-components";
import axios from "axios";
import { Typography, Input, TextField, Button, Box, Container } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";


//     "user": 3,
//     "fullname": "",
//     "memo": "",
//     "color": null,
//     "image": null

function SignupProfile() {
    const theme = createTheme();

    const [fullname, setFullname] = useState("");
    const [memo, setMemo] = useState("");
    const [color, setColor] = useState();
    const [mainprofile, setMainprofile] = useState();

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <Container component="main" maxWidth="md">
                    <Box
                        component="form"
                        sx={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h5"
                            sx={{ mb: 5 }}
                            fontFamily="AppleSDGothicNeoB00"
                        >
                            기본 프로필을 생성하세요
                        </Typography>
                        <TextField
                            label="사용자명을 입력해주세요"
                            name="name"
                            fontFamily="AppleSDGothicNeoM00"
                            required
                            fullWidth
                            autoComplete="name"
                            autoFocus
                            sx={{ mb: 3 }}
                            onChange={setFullname}
                        />
                        <TextField
                            label="한 줄 소개를 입력해주세요 (띄어쓰기 포함 최대 30자)"
                            name="introduction"
                            fontFamily="AppleSDGothicNeoM00"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                        <Typography
                            component="h3"
                            variant="h5"
                            sx={{ mb: 5 }}
                            fontFamily="AppleSDGothicNeoB00"
                        >
                            메인 프로필 이미지
                        </Typography>
                        <label htmlFor="mainProfile">
                            <button className='mainImg'>
                                파일 첨부하기
                            </button>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            className="imgInput"
                            id="mainProfile"
                            style={{ display: `none` }}
                        // onChange={}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            fontFamily="AppleSDGothicNeoB00"
                            sx={{ mt: 3, mb: 2, bgcolor: "#3CDA9F" }}
                        // onClick={onSubmit}
                        >
                            다음 단계
                        </Button>
                    </Box>
                </Container>
                <Footer2 />
            </ThemeProvider>
        </>
    );
}

export default SignupProfile