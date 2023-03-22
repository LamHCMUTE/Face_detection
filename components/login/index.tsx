import React, { useEffect, useState } from 'react';
import { CircularProgress, IconButton, InputBase, Paper, Stack, Typography } from '@mui/material';
// import BoxFrom from '@/components/login/box-right-form';
// import BoxQRCode from '@/components/login/box-left-qrcode';
import { useRouter } from 'next/router';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NextDoubleIcon from '@/images/account/next_double.svg';
import Image from 'next/image';
import { useTranslation } from '@/hooks/translate-hook';

export interface ILoginCompProps {
    handleChangePass: any;
    loading: boolean;
    error: string;
    setUser: any;
    user: string;
}

export default function LoginComp({
    handleChangePass,
    loading,
    error,
    setUser,
    user,
}: ILoginCompProps) {
    const router = useRouter();
    const { translate } = useTranslation();
    const [forgotPass, setForgotPass] = useState(false);
    const [darkModes, setDarkModes] = useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setDarkModes(window.localStorage.darkLine);
    });
    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            {forgotPass ? (
                <Stack
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Stack
                        sx={{
                            width: '500px',
                            background: darkModes ? 'rgba(44, 62, 76, 0.3)' : '#D9D9D950',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pb: 4,
                        }}
                    >
                        <Stack sx={{ alignItems: 'center' }}>
                            <Typography
                                mt={2}
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    color: darkModes ? '#fff' : '#000',
                                    fontSize: '19px',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                }}
                            >
                                {translate('changePass')}
                            </Typography>
                            <Typography
                                mt={2}
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    color: darkModes ? '#fff' : '#000',
                                    fontSize: '12px',
                                    fontWeight: darkModes ? '300' : '700',
                                    fontStyle: 'italic',
                                    mb: 3,
                                    width: '400px',
                                    textAlign: 'center',
                                }}
                            >
                                {translate('messReqChangePass')}
                            </Typography>
                            <Stack sx={{ flexDirection: 'row' }}>
                                <Paper
                                    component="form"
                                    sx={{
                                        p: '2px 4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: 300,
                                        borderRadius: '30px',
                                        height: '40px',
                                    }}
                                >
                                    <IconButton
                                        sx={{ p: '10px' }}
                                        aria-label="menu"
                                        disabled={true}
                                    >
                                        {/* <PermIdentityIcon /> */}
                                    </IconButton>
                                    <InputBase
                                        value={user}
                                        sx={{
                                            ml: 1,
                                            flex: 1,
                                            fontSize: '12px',
                                            fontWeight: '300',
                                            fontStyle: 'italic',
                                        }}
                                        placeholder={translate('email') + '...'}
                                        onChange={(e: any) => {
                                            setUser(e.target.value);
                                        }}
                                    />
                                </Paper>
                                <Stack
                                    sx={{
                                        width: '40px',
                                        borderRadius: '100%',
                                        height: '40px',
                                        bgcolor: '#030E16',
                                        border: 'none',
                                        color: '#fff',
                                        fontSize: '13px',
                                        fontWeight: '700',
                                        '&:hover': {
                                            bgcolor: '#030E16',
                                            border: 'none',
                                            color: '#fff',
                                        },
                                        ml: 1,
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleChangePass}
                                >
                                    <Image src={NextDoubleIcon} alt="Lỗi"></Image>
                                    {loading && (
                                        <CircularProgress
                                            size={40}
                                            sx={{
                                                color: 'aqua',
                                                position: 'absolute',
                                            }}
                                        />
                                    )}
                                </Stack>
                            </Stack>
                            {error && (
                                <Typography
                                    sx={{
                                        fontSize: '13px',
                                        fontWeight: 400,
                                        fontStyle: 'italic',
                                        lineHeight: '15px',
                                        color: 'red',
                                        mt: 1,
                                        mb: -2,
                                        ml: -6,
                                    }}
                                >
                                    {error}
                                </Typography>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            ) : (
                <Stack>
                    <Stack
                        direction={'row'}
                        spacing={3}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        {/* <BoxQRCode /> */}
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <Stack
                                sx={{
                                    height: '180px',
                                    width: '1px',
                                    bgcolor: darkModes ? '#fff' : '#D9D9D9',
                                }}
                            ></Stack>
                            <Typography
                                mt={2}
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    color: darkModes ? '#fff' : '#000',
                                    fontSize: '12px',
                                    fontWeight: '300',
                                }}
                            >
                                {translate('or')}
                            </Typography>
                            <Stack
                                sx={{
                                    height: '180px',
                                    width: '1px',
                                    bgcolor: darkModes ? '#fff' : '#D9D9D9',
                                }}
                            ></Stack>
                        </Stack>
                        {/* <BoxFrom setForgotPass={setForgotPass} /> */}
                    </Stack>
                    <Stack sx={{ alignItems: 'center' }}>
                        <Stack
                            sx={{
                                width: '700px',
                                height: '80px',
                                background: darkModes ? 'rgba(44, 62, 76, 0.3)' : '#D9D9D950',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                borderRadius: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mt: 7,
                            }}
                        >
                            <Typography
                                mt={2}
                                variant="subtitle1"
                                sx={{
                                    color: darkModes ? '#fff' : '#000',
                                    fontSize: '12px',
                                    fontWeight: '300',
                                    textAlign: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {translate('loginSixth')}
                                </span>{' '}
                                {translate('loginSeventh')}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    color: darkModes ? '#fff' : '#000',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                                onClick={() => router.push('/register')}
                            >
                                {translate('register')}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}
