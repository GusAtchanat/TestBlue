import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Card, Stack, Container, Typography, Button } from '@material-ui/core';

import { LoginForm } from '@/components/authentication/login';
import ProfileImage from '@/assets/images/avatar_default.png';
import EditProFileForm from '@/components/authentication/login/EditProFileForm';

const RootStyle = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end' // เรียง Card ไปอยู่ด้านขวา
}));

const ProfileCardStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    boxShadow: theme.shadows[3]
}));

const ProfileImageStyle = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginBottom: 16
});

const EditProfile = (): JSX.Element => {
    const [profileImage, setProfileImage] = useState(ProfileImage);

    const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <RootStyle>
            <Container maxWidth="sm">
                <ProfileCardStyle>
                    <label htmlFor="profileImage">
                        <ProfileImageStyle src={profileImage} alt="profile" />
                        <input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleProfileImageChange}
                        />
                        <Button variant="contained" color="primary" component="span">
                            Upload Profile Image
                        </Button>
                    </label>
                    <Typography variant="h4" gutterBottom>
                        John Doe {/* Replace with the user's name */}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Role: Admin {/* Replace with "User" or any other role */}
                    </Typography>
                    {/* Display the role here, and prevent editing */}
                </ProfileCardStyle>
            </Container>
        </RootStyle>
    );
};

export default EditProfile;
