// import React, { useEffect, useState } from 'react';
// // import { LoginLayout, MainLayout } from '../../components';
// import { CircularProgress, IconButton, InputBase, Paper, Stack, Typography } from '@mui/material';
// import { useRouter } from 'next/router';

// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import NextDoubleIcon from '@/images/account/next_double.svg';
// import Image from 'next/image';

// import LoginComp from '@/components/login';
// // import BoxFromMobile from '@/components/login-mobile';
// // import { DarkLightState } from '@/redux/dark-light';
// import { useSelector } from 'react-redux';
// import { LoginLayout } from '@/components/common/layout/login';
// import { useTranslation } from '@/hooks/translate-hook';
// import { authApi } from '@/api-client/auth-api';
// import { DarkLightState } from '@/store/dark-light';

// export interface ILoginPageProps {}

// function LoginPage(props: ILoginPageProps) {
//     const router = useRouter();
//     const { translate } = useTranslation();
//     const [loading, setLoading] = useState(false);
//     const [user, setUser] = useState('');
//     const [error, setError] = useState('');
//     const [forgotPass, setForgotPass] = useState(false);
//     const checkEmail = (email: string) => {
//         const re =
//             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     };
//     const handleChangePass = async () => {
//         setLoading(true);
//         const checkPhone = /((0|84)+([0-9]{9})\b)/g;
//         if (!user) {
//             setError(translate('emptyUser'));
//         } else if (!checkEmail(user) && !checkPhone.test(user)) {
//             setError('Email hoặc số điện thoại không đúng định dạng');
//         } else {
//             if (checkEmail(user)) {
//                 const payLoad = {
//                     Email: user,
//                     Phone: '',
//                 };
//                 await authApi.forgotPassword(payLoad).then(() => {
//                     router.push('/');
//                 });
//             } else {
//                 const payLoad = {
//                     Email: '',
//                     Phone: user,
//                 };
//                 await authApi.forgotPassword(payLoad).then(() => {
//                     router.push('/');
//                 });
//             }
//         }
//         setLoading(false);
//     };
//     const darkModes: DarkLightState = useSelector((state: any) => {
//         return state.setDarkMode.darkMode;
//     });
//     return (
//         <Stack sx={{ height: '100%', justifyContent: 'center' }}>
//             <Stack display={{ xs: 'none', md: 'flex' }}>
//                 <LoginComp
//                     handleChangePass={handleChangePass}
//                     loading={loading}
//                     error={error}
//                     setUser={setUser}
//                     user={user}
//                 />
//             </Stack>
//             {forgotPass ? (
//                 <Stack
//                     sx={{
//                         width: '100%',
//                         height: '100%',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Stack
//                         sx={{
//                             width: { xs: '90%', sm: '500px' },
//                             background: darkModes ? 'rgba(44, 62, 76, 0.3)' : '#D9D9D950',
//                             boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//                             borderRadius: '10px',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             pb: 4,
//                         }}
//                     >
//                         <Stack sx={{ alignItems: 'center' }}>
//                             <Typography
//                                 mt={2}
//                                 variant="subtitle1"
//                                 gutterBottom
//                                 sx={{
//                                     color: darkModes ? '#fff' : '#000',
//                                     fontSize: '19px',
//                                     fontWeight: '700',
//                                     textAlign: 'center',
//                                 }}
//                             >
//                                 {translate('changePass')}
//                             </Typography>
//                             <Typography
//                                 mt={2}
//                                 variant="subtitle1"
//                                 gutterBottom
//                                 sx={{
//                                     color: darkModes ? '#fff' : '#000',
//                                     fontSize: '12px',
//                                     fontWeight: darkModes ? '300' : '700',
//                                     fontStyle: 'italic',
//                                     mb: 3,
//                                     width: { xs: '80%', sm: '400px' },
//                                     textAlign: 'center',
//                                 }}
//                             >
//                                 {translate('messReqChangePass')}
//                             </Typography>
//                             <Stack sx={{ flexDirection: 'row' }}>
//                                 <Paper
//                                     component="form"
//                                     sx={{
//                                         p: '2px 4px',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         width: { xs: '100%', sm: '400px' },
//                                         borderRadius: '30px',
//                                         height: '40px',
//                                     }}
//                                 >
//                                     <IconButton
//                                         sx={{ p: '10px' }}
//                                         aria-label="menu"
//                                         disabled={true}
//                                     >
//                                         <PermIdentityIcon />
//                                     </IconButton>
//                                     <InputBase
//                                         value={user}
//                                         sx={{
//                                             ml: 1,
//                                             flex: 1,
//                                             fontSize: '12px',
//                                             fontWeight: '300',
//                                             fontStyle: 'italic',
//                                         }}
//                                         placeholder={translate('email') + '...'}
//                                         onChange={(e: any) => {
//                                             setUser(e.target.value);
//                                         }}
//                                     />
//                                 </Paper>
//                                 <Stack
//                                     sx={{
//                                         width: '40px',
//                                         borderRadius: '100%',
//                                         height: '40px',

//                                         border: 'none',

//                                         fontSize: '13px',
//                                         fontWeight: '700',
//                                         '&:hover': {
//                                             border: 'none',
//                                         },
//                                         ml: 1,
//                                         justifyContent: 'center',
//                                         cursor: 'pointer',
//                                     }}
//                                     onClick={handleChangePass}
//                                 >
//                                     <Image src={NextDoubleIcon} alt="Lỗi"></Image>
//                                     {loading && (
//                                         <CircularProgress
//                                             size={40}
//                                             sx={{
//                                                 color: 'aqua',
//                                                 position: 'absolute',
//                                             }}
//                                         />
//                                     )}
//                                 </Stack>
//                             </Stack>
//                             {error && (
//                                 <Typography
//                                     sx={{
//                                         fontSize: '13px',
//                                         fontWeight: 400,
//                                         fontStyle: 'italic',
//                                         lineHeight: '15px',
//                                         color: 'red',
//                                         mt: 1,
//                                         mb: -2,
//                                         ml: -6,
//                                     }}
//                                 >
//                                     {error}
//                                 </Typography>
//                             )}
//                         </Stack>
//                     </Stack>
//                 </Stack>
//             ) : (
//                 <Stack
//                     // sx={{
//                     //     width: '100%',
//                     //     height: '100vh',
//                     //     justifyContent: 'center',
//                     //     alignItems: 'center',
//                     // }}
//                     display={{ xs: 'flex', md: 'none' }}
//                 >
//                     {/* <BoxFromMobile setForgotPass={setForgotPass} /> */}
//                 </Stack>
//             )}
//         </Stack>
//     );
// }

// LoginPage.Layout = LoginLayout;
// export default LoginPage;
import Login_component from "@/components/Login_component";
import Login_page from "@/components/Login_component";

export default function Login() {
    return (
        <Login_component />
    )
}
