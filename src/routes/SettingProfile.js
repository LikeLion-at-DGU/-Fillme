import React, { useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signStyle from "../static/css/Sign.module.css";
import { Typography, TextField, Button, Box, Container } from "@mui/material/";

const SettingProfile = () => {
    const navigate = useNavigate();
    const [editProfile, setEditProfile] = useState({
        fullname: "",
        memo: "",
        color: null,
        image: null,
    });

    const onChange = (e) => {
        const { value, name } = e.target;
        setEditProfile({
            ...editProfile,
            [name]: value,
        });
    };

    const onLoadFile = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setEditProfile({
            ...editProfile,
            image: file,
        });
    };

    const editSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (editProfile?.image) {
            formData.append("image", editProfile.image, editProfile.image.name);
        } else {
            window.alert("이미지를 첨부해주세요.");
            return;
        }
        formData.append("fullname", editProfile.fullname);
        formData.append("memo", editProfile.memo);
        formData.append("color", editProfile.color);

        await axios
            .patch("http://13.124.66.197/mypage/profile_update/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res, "메인 프로필 수정 성공");
                navigate("/Profile", { replace: true });
            })
            .catch((res) => {
                console.log(res, "메인 프로필 수정 실패");
            });
    };

    return (
        <>
            <Header />
            <Container component="main" maxWidth="md">
                <Box
                    component="form"
                    onSubmit={editSubmit}
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
                        기본 프로필을 수정하세요
                    </Typography>
                    <TextField
                        label="사용자명 수정"
                        name="fullname"
                        value={editProfile.fullname}
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
                        value={editProfile.memo}
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
                        메인 프로필 이미지 수정
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
                                checked={editProfile.color === "pink"}
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
                                checked={editProfile.color === "red"}
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
                                checked={editProfile.color === "lorange"}
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
                                checked={editProfile.color === "orrange"}
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
                                checked={editProfile.color === "yellow"}
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
                                checked={editProfile.color === "green"}
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
                                checked={editProfile.color === "lblue"}
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
                                checked={editProfile.color === "blue"}
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
                                checked={editProfile.color === "navy"}
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
                                checked={editProfile.color === "lpurple"}
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
                                checked={editProfile.color === "purple"}
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
                                checked={editProfile.color === "etoffe"}
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
                                checked={editProfile.color === "brown"}
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
                                checked={editProfile.color === "gray"}
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
                                checked={editProfile.color === "black"}
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
                        onClick={editSubmit}
                    >
                        메인 프로필 수정 완료
                    </Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default SettingProfile;
