import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import axios from "axios";
import { Typography, TextField, Button, Box, Container, FormControlLabel } from "@mui/material/";
import signStyle from "../static/css/Sign.module.css";
import SkeletonImage from "antd/lib/skeleton/Image";
import { useNavigate, useLocation } from "react-router-dom";

//     /mypage/ json 형식
//     "user": 3,
//     "fullname": "",
//     "memo": "",
//     "color": null,
//     "image": null

function SignupProfile() {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        fullname: "",
        memo: "",
        color: null,
        image: null,
    });

    const onChange = (e) => {
        const { value, name } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const onLoadFile = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        setProfile({
            ...profile,
            image: file,
        });
    };

    // for axios
    const profileSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (profile?.image) {
            // ?. '앞'의 평가 대상이 undefined나 null이면 평가 멈추고 undefined 반환
            formData.append("image", profile.image, profile.image.name);
        } else {
            window.alert("이미지를 첨부해주세요.");
            return;
        }
        formData.append("fullname", profile.fullname);
        if (profile.memo.length > 30) {
            window.alert("한 줄 소개는 띄어쓰기 포함 최대 30자입니다.");
        } else {
            formData.append("memo", profile.memo);
        }
        formData.append("color", profile.color);

        await axios
            .patch("http://127.0.0.1:8000/mypage/profile_update/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                // console.log(res, "프로필 설정 성공");
                navigate("/", { replace: true });
                // replace: true로 피드 페이지 이동 후 뒤로가기 불가능
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Header />
            <Container component="main" maxWidth="md">
                <Box
                    component="form"
                    onSubmit={profileSubmit}
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: "70vh",
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
                        name="fullname"
                        value={profile.fullname}
                        fontFamily="AppleSDGothicNeoM00"
                        required
                        fullWidth
                        autoComplete="name"
                        autoFocus
                        sx={{ mb: 3 }}
                        onChange={onChange}
                    />
                    <TextField
                        label="한 줄 소개를 입력해주세요 (띄어쓰기 포함 최대 30자)"
                        name="memo"
                        value={profile.memo}
                        fontFamily="AppleSDGothicNeoM00"
                        fullWidth
                        sx={{ mb: 5 }}
                        onChange={onChange}
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
                        <div className={signStyle.btn}>파일 첨부하기</div>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="mainProfile"
                        style={{ display: `none` }}
                        onChange={onLoadFile}
                    />
                    <Typography
                        component="h3"
                        variant="h6"
                        sx={{ mb: 3 }}
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        배경색상 *
                    </Typography>
                    <section id="color">
                        <label htmlFor="cl1">
                            <input
                                type="radio"
                                className={signStyle.cl1}
                                id="cl1"
                                name="color"
                                value="pink"
                                checked={profile.color === "pink"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl2">
                            <input
                                type="radio"
                                className={signStyle.cl2}
                                id="cl2"
                                name="color"
                                value="red"
                                checked={profile.color === "red"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl3">
                            <input
                                type="radio"
                                className={signStyle.cl3}
                                id="cl3"
                                name="color"
                                value="lorange"
                                checked={profile.color === "lorange"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl4">
                            <input
                                type="radio"
                                className={signStyle.cl4}
                                id="cl4"
                                name="color"
                                value="orrange"
                                checked={profile.color === "orrange"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl5">
                            <input
                                type="radio"
                                className={signStyle.cl5}
                                id="cl5"
                                name="color"
                                value="yellow"
                                checked={profile.color === "yellow"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl6">
                            <input
                                type="radio"
                                className={signStyle.cl6}
                                id="cl6"
                                name="color"
                                value="green"
                                checked={profile.color === "green"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl7">
                            <input
                                type="radio"
                                className={signStyle.cl7}
                                id="cl7"
                                name="color"
                                value="lblue"
                                checked={profile.color === "lblue"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl8">
                            <input
                                type="radio"
                                className={signStyle.cl8}
                                id="cl8"
                                name="color"
                                value="blue"
                                checked={profile.color === "blue"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl9">
                            <input
                                type="radio"
                                className={signStyle.cl9}
                                id="cl9"
                                name="color"
                                value="navy"
                                checked={profile.color === "navy"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl10">
                            <input
                                type="radio"
                                className={signStyle.cl10}
                                id="cl10"
                                name="color"
                                value="lpurple"
                                checked={profile.color === "lpurple"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl11">
                            <input
                                type="radio"
                                className={signStyle.cl11}
                                id="cl11"
                                name="color"
                                value="purple"
                                checked={profile.color === "purple"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl12">
                            <input
                                type="radio"
                                className={signStyle.cl12}
                                id="cl12"
                                name="color"
                                value="etoffe"
                                checked={profile.color === "etoffe"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl13">
                            <input
                                type="radio"
                                className={signStyle.cl13}
                                id="cl13"
                                name="color"
                                value="brown"
                                checked={profile.color === "brown"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl14">
                            <input
                                type="radio"
                                className={signStyle.cl14}
                                id="cl14"
                                name="color"
                                value="gray"
                                checked={profile.color === "gray"}
                                onChange={onChange}
                            />
                        </label>
                        <label htmlFor="cl15">
                            <input
                                type="radio"
                                className={signStyle.cl15}
                                id="cl15"
                                name="color"
                                value="black"
                                checked={profile.color === "black"}
                                onChange={onChange}
                            />
                        </label>
                    </section>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        fontFamily="AppleSDGothicNeoB00"
                        sx={{ mt: 3, mb: 2, bgcolor: "#3CDA9F" }}
                        onClick={profileSubmit}
                    >
                        메인 프로필 생성 완료
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default SignupProfile;

{
    /* <RadioGroup row>
    <Radio {...controlProps('a')} sx={{
        color: "#FEBCC0", '&.Mui-checked': { color: "#FEBCC0" }, '& .MuiSvgIcon-root': { fontSize: 52 }
    }} />
    <Radio {...controlProps('b')} sx={{
        color: "#83333E", '&.Mui-checked': { color: "#83333E" }, '& .MuiSvgIcon-root': { fontSize: 52 }
    }} />
    <Radio {...controlProps('c')} sx={{
        color: "#FFB37C", '&.Mui-checked': { color: "#FFB37C" }, '& .MuiSvgIcon-root': { fontSize: 52 }
    }} />
</RadioGroup> */
}
