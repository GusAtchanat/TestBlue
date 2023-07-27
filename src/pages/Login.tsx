import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography } from '@material-ui/core';
import Page from '@/components/Page';
import { MHidden } from '@/components/@material-extend';
import { LoginForm } from '@/components/authentication/login';
import LogoImage from '@/assets/images/Logo.png';
import backgroundImg from '@/assets/images/illustrations/illustration_login.png';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    },
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh'
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 700,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'transparent',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
}));

const ContentStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: '100vh',
    flexDirection: 'column'
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
            <SectionStyle>
                <Container maxWidth="sm">
                    <ContentStyle>
                        <CardContainer>
                            <Stack sx={{ mb: 5 }}>
                                <LogoImageStyle src={LogoImage} alt="logo" />
                                <Typography variant="h4" gutterBottom></Typography>
                            </Stack>

                            <LoginForm />
                        </CardContainer>
                    </ContentStyle>
                </Container>
            </SectionStyle>
        </RootStyle>
    );
};

export default Login;
