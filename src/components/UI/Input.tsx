import React from 'react';

/* style-compontent */
import styled from 'styled-components';

const InputWapper = styled.div`
    position: relative;
    width: 26rem;
    height: 3rem;
    margin-bottom: 1rem;

    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
        top: -0.5rem;
        font-size: 0.8rem;
        left: 0.8rem;
    }

    .danger {
        border-color: #e93d3d;
        color: #e93d3d;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

const ErrorText = styled.div`
    padding: 0.5rem;
    font-size: 10pt;
    color: #e93d3d;
`;

interface InputProps {
    label: string;
    type: string;
    value: string;
    name: string;
    errors?: string;
    touched?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, value, onChange, name, touched, errors }: InputProps) => {
    return (
        <>
            <InputWapper>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={`${!!touched && !!errors ? 'form__input danger' : 'form__input'}`}
                    placeholder=" "
                />
                <label className={`${!!touched && !!errors ? 'form__label danger' : 'form__label'}`}>{label}</label>
            </InputWapper>
            {touched ? <ErrorText>{errors}</ErrorText> : null}
        </>
    );
};

export default Input;
