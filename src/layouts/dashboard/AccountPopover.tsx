import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import { Button, Box, Divider, Typography, Avatar, IconButton } from '@material-ui/core';
import MenuPopover from '@/components/MenuPopover';
import account from '@/_mocks_/account';

const AccountPopover = (): JSX.Element => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    transform: 'translateX(-100%)',
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                        }
                    })
                }}
            >
                {account.photoURL ? (
                    <Avatar src={account.photoURL} alt="photoURL" />
                ) : (
                    <Avatar alt="Default Profile" />
                )}
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{ width: 280 }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', px: 2.5, py: 1.5 }}>
                    {account.photoURL && (
                        <Avatar src={account.photoURL} alt="photoURL" sx={{ marginRight: 1 }} />
                    )}
                    <div>
                        <Typography variant="subtitle1" noWrap>
                            {account.displayName || 'ไม่ระบุชื่อ'}
                        </Typography>
                        {account.email && (
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {account.email}
                            </Typography>
                        )}
                        {account.position && (
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {account.position}
                            </Typography>
                        )}
                        {account.role && (
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {account.role}
                            </Typography>
                        )}
                    </div>
                </Box>

                <Divider />

                <Box>
                    <Button component={Link} to="/login">
                        ออกจากระบบ
                    </Button>
                </Box>
            </MenuPopover>
        </>
    );
};

export default AccountPopover;
