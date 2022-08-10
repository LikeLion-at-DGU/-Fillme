import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";

// For MUI
import { TextField, Checkbox, Button, FormControlLabel, Link, Grid, Typography, Box, Container } from "@mui/material/";
import { useState, useEffect } from "react";

// For Axios
import axios from "axios";
import { Input } from "antd";
import styled from "styled-components";

function Login({ isLoggedIn, setIsLoggedIn }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);

    const onNameHandler = (event) => {
        setId(event.currentTarget.value);
        console.log(id);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
        console.log(password);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: id,
            password: password,
        };

        axios
            .post("http://127.0.0.1:8000/accounts/login/", user)
            .then((res) => {
                localStorage.setItem("logInUserId", res.data.user.pk);
                const { accesToken } = res.data.access_token;
                axios.defaults.headers.common["Authorization"] = `Bearer ${accesToken}`;
                console.log(res);
                console.log(axios.defaults.headers.common);
                localStorage.setItem("auth", true); // 로그인 설정
                setIsLoggedIn(true);
                console.log(JSON.parse(localStorage.getItem("auth")));
                window.location.replace("/");
                //     if (res.data.access_token) {
                //         localStorage.clear();
                //         localStorage.setItem("token", res.data.access_token);
                //         //window.location.replace("/feed");
                //         console.log(localStorage.getItem("token"));
                //         // 사용하려면 App.js에서 /로 라우팅해야 한다
                //     } else {
                //         localStorage.clear();
                //         setErrors(true);
                //     }
            })
            .catch((err) => {
                console.clear();
                console.log(user);
                alert("아이디 또는 비밀번호가 일치하지 않습니다");

                console.log(err);
            });
    };

    return (
        <>
            <Header />
            {errors === true && <h2>Cannot log in with provided credentials</h2>}
            <div className={styles.wrap}>
                <Container component="main" maxWidth="sm">
                    <Box
                        sx={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ mb: 5 }} fontFamily="AppleSDGothicNeoB00">
                            로그인하여 친구들의 멀티 페르소나를 만나보세요
                        </Typography>
                        <TextField label="아이디을 입력해주세요" name="id" fontFamily="AppleSDGothicNeoM00" required fullWidth autoComplete="id" autoFocus sx={{ mb: 3 }} onChange={onNameHandler} />
                        <TextField label="비밀번호를 입력해주세요" name="password" type="password" fontFamily="AppleSDGothicNeoM00" required fullWidth autoComplete="current-password" onChange={onPasswordHandler} />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="자동 로그인" fontFamily="AppleSDGothicNeoM00" />
                        <Button type="submit" variant="contained" fullWidth fontFamily="AppleSDGothicNeoB00" sx={{ mt: 3, mb: 2, bgcolor: "#3CDA9F" }} onClick={onSubmit}>
                            로그인하기
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" fontFamily="AppleSDGothicNeoB00" sx={{ color: "#3CDA9F" }}>
                                    비밀번호 찾기
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/SignupPage" variant="body2" fontFamily="AppleSDGothicNeoB00" sx={{ color: "#3CDA9F" }}>
                                    회원가입
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <Footer2 />
        </>
    );
}
export default Login;
