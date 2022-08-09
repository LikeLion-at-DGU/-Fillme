import React, { useState } from 'react';
import { Footer2 } from "../components/Footer";
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
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Register = () => {
    const theme = createTheme();
    const [checked, setChecked] = useState(false);

    // 동의 체크
    const handleAgree = (event) => {
        setChecked(event.target.checked);
    };

    // form 전송
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" fontFamily="AppleSDGothicNeoB00">
                        회원가입을 진행해주세요
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth id="id" name="id" label="아이디" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="rePassword"
                                        name="rePassword"
                                        label="비밀번호 재입력"
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
                                회원가입
                            </Button>
                        </FormControl>
                    </Box>
                </Box>
            </Container>
            <Footer2 />
        </ThemeProvider>
    );
};
export default Register;