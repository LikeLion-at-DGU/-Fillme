import Header from "../components/Header";
import { Footer2 } from "../components/Footer";
import styles from "../static/css/style.module.css";
import Navbar from "../components/Navbar";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';


function Mainpage() {
    // const [id, setId] = useState("");
    // const [pwd, setPwd] = useState("");

    // const login = () => {
    //     // 입력 값 정합성 체크 후 login API 요청
    //     if (id === "" || pwd === "") {
    //         window.alert("아이디와 비밀번호를 입력해주세요.");
    //         return;
    //     }
    //     dispatch(userActions.loginDB(id, pwd));
    // }

    // // API 통신을 통해 서버에 id, pwd제공하고 유저 정보와 토큰 받아 저장
    // const loginDB = (id, password) => {
    //     return function (dispatch, getState, { history }) {
    //         axios({
    //             method: "post",
    //             url: "#",
    //             data: {
    //                 email: id,
    //                 password: password,
    //             },
    //         })
    //             .then((res) => {
    //                 console.log(res);
    //                 dispatch(
    //                     setUser({
    //                         email: res.data.email,
    //                         nickname: res.data.nickname,
    //                     })
    //                 );
    //                 const accssToken = res.data.token;
    //                 // 쿠키에 토큰 저장
    //         })
    //     }
    // }

    return (
        <>
            <Header />
            <Navbar />
            <div className={styles.wrap}>
                <Container component="main" maxWidth="sm">
                    <Box
                        sx={{
                            marginTop: 25,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'success.light' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <Typography
                            component="h1"
                            variant="h5"
                            sx={{ mb: 5 }}
                            fontFamily="AppleSDGothicNeoB00"
                        >
                            로그인하여 친구들의 멀티 페르소나를 만나보세요
                        </Typography>
                        <TextField
                            label="아이디을 입력해주세요"
                            name="id"
                            fontFamily="AppleSDGothicNeoM00"
                            required
                            fullWidth
                            autoComplete="id"
                            autoFocus
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            label="비밀번호를 입력해주세요"
                            name="password"
                            type="password"
                            fontFamily="AppleSDGothicNeoM00"
                            required
                            fullWidth
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="자동 로그인"
                            fontFamily="AppleSDGothicNeoM00"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            fontFamily="AppleSDGothicNeoB00"
                            sx={{ mt: 3, mb: 2, bgcolor: '#3CDA9F' }}
                        >로그인하기</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link
                                    href="#"
                                    variant="body2"
                                    fontFamily="AppleSDGothicNeoB00"
                                    sx={{ color: '#3CDA9F' }}
                                >
                                    비밀번호 찾기
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    fontFamily="AppleSDGothicNeoB00"
                                    sx={{ color: '#3CDA9F' }}
                                >
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
export default Mainpage;
