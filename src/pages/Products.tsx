import React, { useState } from 'react';
import {
    Container,
    Stack,
    Typography,
    Avatar,
    TextField,
    Button,
    Grid,
    Checkbox,
    FormControlLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControl,
    Paper
} from '@material-ui/core';
import Page from '@/components/Page';

const ProfileAccountSettings = (): JSX.Element => {
    const [role, setRole] = useState<string>('');

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole(event.target.value);
    };

    return (
        <Page title="Profile Account Settings">
            <Container>
                <Typography variant="h5" sx={{ mb: 5 }}>
                    Profile Account Settings
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <Avatar
                        alt="Name"
                        src="/path-to-profile-image.jpg"
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography variant="h6">Name</Typography>
                </Stack>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            defaultValue=""
                            sx={{ mb: 5 }}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            defaultValue=""
                            sx={{ mb: 5 }}
                        />
                    </Stack>
                </Grid>
                <Grid container spacing={3} sx={{ mb: 5 }}>
                    <Grid item xs={6}>
                        <FormControl component="fieldset">
                            <Paper sx={{ p: 2, borderRadius: 3, border: '1px solid #ccc' }}>
                                <Stack direction="column">
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        Role
                                    </Typography>
                                    <Stack direction="row">
                                        <FormControlLabel
                                            value="CEO"
                                            control={<Checkbox />}
                                            label="CEO"
                                        />
                                        <FormControlLabel
                                            value="Admin"
                                            control={<Checkbox />}
                                            label="Admin"
                                        />
                                        <FormControlLabel
                                            value="HR"
                                            control={<Checkbox />}
                                            label="HR"
                                        />
                                    </Stack>
                                    <Stack direction="row">
                                        <FormControlLabel
                                            value="VP"
                                            control={<Checkbox />}
                                            label="VP"
                                        />
                                        <FormControlLabel
                                            value="Manager"
                                            control={<Checkbox />}
                                            label="Manager"
                                        />
                                        <FormControlLabel
                                            value="Employee"
                                            control={<Checkbox />}
                                            label="Employee"
                                        />
                                    </Stack>
                                </Stack>
                            </Paper>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                fullWidth
                                label="Gender"
                                variant="outlined"
                                defaultValue="Male"
                                sx={{ mb: 5 }}
                            />
                            <TextField
                                fullWidth
                                label="User Name"
                                variant="outlined"
                                defaultValue=""
                            />
                        </Stack>
                        <Grid>
                            <Stack direction="row" spacing={2}>
                                <TextField fullWidth label="Department" variant="outlined" select>
                                    <MenuItem value="Department1">Department 1</MenuItem>
                                    <MenuItem value="Department2">Department 2</MenuItem>
                                    <MenuItem value="Department3">Department 3</MenuItem>
                                </TextField>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mb: 5 }}>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Company" variant="outlined" select>
                            <MenuItem value="company1">Company 1</MenuItem>
                            <MenuItem value="company2">Company 2</MenuItem>
                            <MenuItem value="company3">Company 3</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Position" variant="outlined" select>
                            <MenuItem value="Position1">Position 1</MenuItem>
                            <MenuItem value="Position2">Position 2</MenuItem>
                            <MenuItem value="Position3">Position 3</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mb: 5 }}>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                fullWidth
                                label="Date Entered"
                                variant="outlined"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                fullWidth
                                label="Date Of Birth"
                                variant="outlined"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Approver" variant="outlined" select>
                            <MenuItem value="Approver1">Approver 1</MenuItem>
                            <MenuItem value="Approver2">Approver 2</MenuItem>
                            <MenuItem value="Approver3">Approver 3</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                <Button variant="contained" color="info">
                    Save
                </Button>
            </Container>
        </Page>
    );
};

export default ProfileAccountSettings;
