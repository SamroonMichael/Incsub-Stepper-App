import React from 'react';

/* style-compontent */
import styled from 'styled-components';

const SelectWapper = styled.div`
    position: relative;
    width: 26rem;
    height: 3rem;
    margin-bottom: 1rem;

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

interface SelectProps {
    value: string;
    options: string[];
    name: string;
    selected?: string;
    errors?: string;
    touched?: boolean;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ value, options, name, onChange, errors, touched }: SelectProps) => {
    return (
        <>
            <SelectWapper>
                <select
                    name={name}
                    onChange={onChange}
                    value={value}
                    className={`${!!touched && !!errors ? 'danger' : ''}`}
                >
                    <option value="">I would describe my user type as</option>
                    {options.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </SelectWapper>
            {touched ? <ErrorText>{errors}</ErrorText> : null}
        </>
    );
};

export default Select;
