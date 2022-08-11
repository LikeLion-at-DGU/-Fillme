import React, { useState } from 'react';
import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styled from "styled-components";
import axios from "axios";
import { Typography, TextField, Button, Box, Container, FormControlLabel, Radio, RadioGroup } from "@mui/material/";
import signStyle from "../static/css/Sign.module.css";
import SkeletonImage from 'antd/lib/skeleton/Image';

//     "user": 3,
//     "fullname": "",
//     "memo": "",
//     "color": null,
//     "image": null

function SignupProfile() {
    const [fullname, setFullname] = useState("");
    const [memo, setMemo] = useState("");
    const [mainprofile, setMainprofile] = useState(null);

    const nameChange = (e) => {
        setFullname(e.target.value);
        console.log(e.target.value);
    }

    const memoChange = (e) => {
        setMemo(e.target.value);
        console.log(e.target.value);
    }

    const imageChange = (e) => {
        setMainprofile(e.target.value);
        console.log(e.target.value);
    }

    // 컬러 라디오박스
    const [color, setColor] = useState();
    const colorChange = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
    };
    //

    return (
        <>
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
                        onChange={nameChange}
                    />
                    <TextField
                        label="한 줄 소개를 입력해주세요 (띄어쓰기 포함 최대 30자)"
                        name="introduction"
                        fontFamily="AppleSDGothicNeoM00"
                        fullWidth
                        sx={{ mb: 5 }}
                        onChange={memoChange}
                    />
                    <Typography
                        component="h3"
                        variant="h6"
                        sx={{ mb: 1 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        메인 프로필 이미지
                    </Typography>
                    <label htmlFor="mainProfile">
                        <div className={signStyle.btn}>
                            파일 첨부하기
                        </div>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="imgInput"
                        id="mainProfile"
                        style={{ display: `none` }}
                        onChange={imageChange}
                    />
                    <Typography
                        component="h3"
                        variant="h6"
                        sx={{ mb: 3 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        배경색상 *
                    </Typography>
                    <div id="color_select">
                        <label htmlFor="cl1"><input type="radio" className={signStyle.cl1} id="cl1" value="#FEBCC0" checked={color === "#FEBCC0"} onChange={colorChange} /></label>
                        <label htmlFor="cl2"><input type="radio" className={signStyle.cl2} id="cl2" value="#83333E" checked={color === "#83333E"} onChange={colorChange} /></label>
                        <label htmlFor="cl3"><input type="radio" className={signStyle.cl3} id="cl3" value="#FFB37C" checked={color === "#FFB37C"} onChange={colorChange} /></label>
                        <label htmlFor="cl4"><input type="radio" className={signStyle.cl4} id="cl4" value="#FF9A50" checked={color === "#FF9A50"} onChange={colorChange} /></label>
                        <label htmlFor="cl5"><input type="radio" className={signStyle.cl5} id="cl5" value="#FFE886" checked={color === "#FFE886"} onChange={colorChange} /></label>
                        <label htmlFor="cl6"><input type="radio" className={signStyle.cl6} id="cl6" value="#153d2e" checked={color === "#153d2e"} onChange={colorChange} /></label>
                        <label htmlFor="cl7"><input type="radio" className={signStyle.cl7} id="cl7" value="#8692cc" checked={color === "#8692cc"} onChange={colorChange} /></label>
                        <label htmlFor="cl8"><input type="radio" className={signStyle.cl8} id="cl8" value="#486fbb" checked={color === "#486fbb"} onChange={colorChange} /></label>
                        <label htmlFor="cl9"><input type="radio" className={signStyle.cl9} id="cl9" value="#1c0f67" checked={color === "#1c0f67"} onChange={colorChange} /></label>
                        <label htmlFor="cl10"><input type="radio" className={signStyle.cl10} id="cl10" value="#8878e1" checked={color === "#8878e1"} onChange={colorChange} /></label>
                        <label htmlFor="cl11"><input type="radio" className={signStyle.cl11} id="cl11" value="#4d2e66" checked={color === "#4d2e66"} onChange={colorChange} /></label>
                        <label htmlFor="cl12"><input type="radio" className={signStyle.cl12} id="cl12" value="#827165" checked={color === "#827165"} onChange={colorChange} /></label>
                        <label htmlFor="cl13"><input type="radio" className={signStyle.cl13} id="cl13" value="#231810" checked={color === "#231810"} onChange={colorChange} /></label>
                        <label htmlFor="cl14"><input type="radio" className={signStyle.cl14} id="cl14" value="#464648" checked={color === "#464648"} onChange={colorChange} /></label>
                        <label htmlFor="cl15"><input type="radio" className={signStyle.cl15} id="cl15" value="#010101" checked={color === "#010101"} onChange={colorChange} /></label>
                    </div>
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
        </>
    );
}

export default SignupProfile

{/* <RadioGroup row>
    <Radio {...controlProps('a')} sx={{
        color: "#FEBCC0", '&.Mui-checked': { color: "#FEBCC0" }, '& .MuiSvgIcon-root': { fontSize: 52 }
    }} />
    <Radio {...controlProps('b')} sx={{
        color: "#83333E", '&.Mui-checked': { color: "#83333E" }, '& .MuiSvgIcon-root': { fontSize: 52 }
    }} />
    <Radio {...controlProps('c')} sx={{
        color: "#FFB37C", '&.Mui-checked': { color: "#FFB37C" }, '& .MuiSvgIcon-root': { fontSize: 52 }
    }} />
</RadioGroup> */}