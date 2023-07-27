import React from 'react';
import { Icon } from '@iconify/react';
import shoppingCartFill from '@iconify/icons-eva/shopping-cart-fill';
import { styled } from '@material-ui/core/styles';
import { Badge, Avatar, Typography } from '@material-ui/core';

const RootStyle = styled('div')(({ theme }) => ({
    zIndex: 999,
    right: 0,
    display: 'flex',
    cursor: 'pointer',
    position: 'fixed',
    alignItems: 'center',
    top: theme.spacing(16),
    height: theme.spacing(15),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('opacity'),
    '&:hover': { opacity: 0.72 }
}));

const ProfileInfo = styled('div')({
    marginLeft: 12
});

const CartWidget = (): JSX.Element => {
    const cartItemCount = 2; // ตั้งค่าตามจำนวนสินค้าในตะกร้า

    return (
        <RootStyle>
            <Badge showZero badgeContent={cartItemCount} color="error" max={99}>
                <Icon icon={shoppingCartFill} width={48} height={48} />
            </Badge>
            <ProfileInfo>
                <Avatar alt="User Name" src="/path-to-profile-image.jpg" />
                <Typography variant="subtitle1" color="textPrimary">
                    User Name
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    user@example.com
                </Typography>
            </ProfileInfo>
        </RootStyle>
    );
};

export default CartWidget;
