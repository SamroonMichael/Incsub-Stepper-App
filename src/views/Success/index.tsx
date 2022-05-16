import React from 'react';
import Success from '../../components/Success/Success';
import { SignUpPageWapper } from '../../styles/SuccessPageWapper';
import { Link } from 'react-router-dom';
import BG from '../../img/background-img.jpeg';

/* style-compontent */
import styled from 'styled-components';
import Button from '../../components/UI/Button';

const SidebarWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        width: 60%;
        font-size: 75px;
        text-align: center;
        line-height: 1.05em;
        background: -webkit-linear-gradient(90deg, #1c7cd6 0, #00f 80%);
        background: linear-gradient(0deg, #1c7cd6 0, #00f 80%);
        -webkit-background-clip: text;
        font-weight: 700;
        -webkit-text-fill-color: transparent !important;
        letter-spacing: 2px;
    }

    .primary__btn {
        padding: 0.8rem;
        border: none;
        background-color: #266df8;
        color: #fff;
        font-weight: 900;
        border-radius: 0.2rem;
        cursor: pointer;
        margin-top: 1rem;
    }

    @media screen and (max-width: 960px) {
        h1 {
            width: 100%;
            font-size: 2.5rem;
        }
    }
`;

const index = () => {
    return (
        <SignUpPageWapper style={{ backgroundImage: `url(${BG})` }}>
            <Success />
            <SidebarWapper>
                <h1>Let's Make WordPress Better</h1>
                <Link to="/">
                    <Button className="primary__btn" onClick={() => {}}>
                        Continue
                    </Button>
                </Link>
            </SidebarWapper>
        </SignUpPageWapper>
    );
};

export default index;
