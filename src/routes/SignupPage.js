import React, { useState } from "react";
import { Footer2 } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Button,
    CssBaseline,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    Grid,
    Box,
    Typography,
    Container,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
    width: 100%;
    padding-left: 16px;
    font-weight: 700 !important;
    color: #d32f2f !important;
`;

const Boxs = styled(Box)`
    padding-bottom: 40px !important;
`;

const Register = () => {
    const theme = createTheme();
    const [checked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [idError, setIdError] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();

    const handleAgree = (event) => {
        setChecked(event.target.checked);
    };

    // Boxs Form 버튼 클릭시 실행
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            id: data.get("id"),
            email: data.get("email"),
            password: data.get("password"),
            rePassword: data.get("rePassword"),
        };
        const { id, email, password, rePassword } = joinData;
        //console.log(joinData);
        // 이메일 유효성 체크
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email))
            setEmailError("올바른 이메일 형식이 아닙니다.");
        else setEmailError("");

        // 아이디 유효성 검사
        const idRegex = /^[a-zA-Z0-9]{4,12}$/;
        if (!idRegex.test(id) || id.length < 1)
            setIdError("올바른 아이디를 입력해주세요.");
        else setIdError("");

        // 비밀번호 유효성 체크
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
            setPasswordState(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
        else setPasswordState("");

        // 비밀번호 같은지 체크
        if (password !== rePassword)
            setPasswordError("비밀번호가 일치하지 않습니다.");
        else setPasswordError("");

        // 회원가입 동의 체크
        if (!checked) alert("회원가입 약관에 동의해주세요.");

        if (
            emailRegex.test(email) &&
            idRegex.test(id) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            checked
        ) {
            onhandlePost(joinData);
        }
    };

    const onhandlePost = async (data) => {
        const { id, email, password, rePassword } = data;
        data = {
            username: id,
            email: email,
            password1: password,
            password2: rePassword,
        };
        // post
        await axios
            .post("http://127.0.0.1:8000/accounts/", data)
            .then(function (response) {
                console.log(response, "성공");
                navigate('/', { replace: true });
            })

            .catch(function (err) {
                console.log(err);
                const message = err.request.responseText;
                let error_message = [];
                if (
                    message.includes(
                        `username":["User의 username은/는 이미 존재합니다.`
                    )
                )
                    setIdError("이미 존재하는 아이디입니다");
                if (
                    message.includes(
                        `이미 이 이메일 주소로 등록된 사용자가 있습니다.`
                    )
                )
                    setEmailError(
                        "이미 이 이메일 주소로 등록된 사용자가 있습니다."
                    );

                // console.log(error_message);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
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
                        fontFamily="AppleSDGothicNeoB00"
                    >
                        회원가입을 진행해주세요
                    </Typography>
                    <Boxs
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <FormControl component="fieldset" variant="standard">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        autoFocus
                                        fullWidth
                                        type="email"
                                        id="email"
                                        name="email"
                                        label="이메일 주소"
                                        error={emailError !== "" || false}
                                    />
                                </Grid>
                                <FormHelperTexts>{emailError}</FormHelperTexts>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="id"
                                        name="id"
                                        label="아이디"
                                        error={idError !== "" || false}
                                    />
                                </Grid>
                                <FormHelperTexts>{idError}</FormHelperTexts>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                                        error={passwordState !== "" || false}
                                    />
                                </Grid>
                                <FormHelperTexts>
                                    {passwordState}
                                </FormHelperTexts>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="rePassword"
                                        name="rePassword"
                                        label="비밀번호 재입력"
                                        error={passwordError !== "" || false}
                                    />
                                </Grid>
                                <FormHelperTexts>
                                    {passwordError}
                                </FormHelperTexts>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handleAgree}
                                                color="primary"
                                            />
                                        }
                                        label="회원가입 약관에 동의합니다."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: "#3CDA9F" }}
                                size="large"
                            >
                                다음 단계
                            </Button>
                        </FormControl>
                        <FormHelperTexts>{registerError}</FormHelperTexts>
                    </Boxs>
                </Box>
            </Container>
            <Footer2 />
        </ThemeProvider>
    );
};

export default Register;
