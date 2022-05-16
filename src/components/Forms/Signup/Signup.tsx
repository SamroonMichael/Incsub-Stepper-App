import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import Button from '../../UI/Button';
import { SignUpFormState } from '../../../model/form';
import * as Yup from 'yup';

/* style-compontent */
import styled from 'styled-components';

const FormWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;

    .form__header,
    .form__content {
        padding: 1.5rem;
        width: 70%;
    }

    .form__header {
        h2 {
            margin-bottom: 2rem;
            font-weight: 900;
            letter-spacing: 1px;
        }
        p {
            font-size: 10pt;
            letter-spacing: 1px;
        }
    }

    .form__content {
        p {
            font-size: 10pt;
            letter-spacing: 0.5px;
            margin-top: 1rem;
        }

        .primary__btn {
            width: 100%;
            padding: 0.8rem;
            border: none;
            background-color: #266df8;
            color: #fff;
            font-weight: 900;
            border-radius: 0.2rem;
            cursor: pointer;
            margin-bottom: 1rem;
        }

        .disable__btn {
            width: 100%;
            padding: 0.8rem;
            border: none;
            background-color: #ededed;
            color: #aaaaaa;
            font-weight: 900;
            border-radius: 0.2rem;
            cursor: pointer;
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        margin: 0;

        .form__header,
        .form__content {
            width: 100%;
        }
    }
`;

const Signup = () => {
    let navigate = useNavigate();

    const initialValues: SignUpFormState = {
        name: '',
        email: '',
        user: '',
        password: '',
    };

    // Form Validation Schema
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email address is Required'),
        user: Yup.string().required('User type is required'),
        password: Yup.string()
            .required('Password is Required')
            .matches(/^(?=.*\d).{8,}$/, `Must Contain 8 Characters`),
    });

    // Form submit func for sending user collected data
    const handleSubmit = (values: SignUpFormState, { resetForm }: any) => {
        console.log(values);
        resetForm({});
        navigate('../success', { replace: true });
    };

    return (
        <FormWapper>
            <div className="form__header">
                <h2>Let's set up your account</h2>
                <p>
                    Already have an account? <Link to="#">Sign in</Link>
                </p>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, handleChange, handleSubmit, touched, errors, isValid, dirty }) => {
                    // Select user options
                    const userTypes = ['Marketer', 'Developer', 'Sales Person'];
                    return (
                        <Form className="form__content">
                            <Input
                                label="Your name"
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                errors={errors.name}
                                touched={touched.name}
                            />
                            <Input
                                label="Email address"
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <Select
                                options={userTypes}
                                name="user"
                                value={values.user}
                                onChange={handleChange}
                                errors={errors.user}
                                touched={touched.user}
                            />
                            <Input
                                label="Password"
                                type="password"
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                errors={errors.password}
                                touched={touched.password}
                            />

                            <Button
                                onClick={handleSubmit}
                                className={`${isValid && dirty ? 'primary__btn' : 'disable__btn'}`}
                            >
                                Next
                            </Button>
                            <p>
                                By clicking the "Next" button, you agree to creating a free account, and to{' '}
                                <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
                            </p>
                        </Form>
                    );
                }}
            </Formik>
        </FormWapper>
    );
};

export default Signup;
