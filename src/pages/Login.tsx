import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography } from '@material-ui/core';
import AuthLayout from '../layouts/AuthLayout';
import Page from '@/components/Page';
import { MHidden } from '@/components/@material-extend';
import { LoginForm } from '@/components/authentication/login';
import IllustrationLoginImage from '@/assets/images/illustrations/illustration_login.png';
import LogoImage from '@/assets/images/Logo.png';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
        width: '100%'
    }
}));

const ContentStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center'
}));

const LogoImageStyle = styled('img')({
    width: '300px',
    height: '170px',
    margin: 'auto'
});

const CardContainer = styled(Card)({
    padding: '40px',
    borderRadius: '40px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
});

const Login = (): JSX.Element => {
    return (
        <RootStyle>
            <MHidden width="mdDown">
                <SectionStyle></SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <CardContainer>
                        <Stack sx={{ mb: 5 }}>
                            <LogoImageStyle src={LogoImage} alt="logo" />
                            <Typography variant="h4" gutterBottom></Typography>
                        </Stack>

                        <Typography variant="h5" gutterBottom>
                            Welcome
                        </Typography>

                        <LoginForm />
                    </CardContainer>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
};

export default Login;
