import * as Yup from 'yup';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, Card, CardContent } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

const EditProFileForm = (): JSX.Element => {
    const navigate = useNavigate();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email must be a valid email address')
            .required('Email is required')
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            navigate('/dashboard', { replace: true });
        }
    });

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Card>
                    <CardContent>
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                autoComplete="username"
                                type="email"
                                label="Email/Username"
                                {...getFieldProps('email')}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                            />
                        </Stack>
                    </CardContent>
                </Card>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    color="primary"
                >
                    Login
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
};

export default EditProFileForm;
