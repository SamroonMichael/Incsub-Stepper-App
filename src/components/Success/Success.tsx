import React from 'react';
import Logo from '../../img/incsub-llc-logo.png';

/* style-compontent */
import styled from 'styled-components';

const SuccesWapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 27px 27px 54px #bebebe, -27px -27px 54px #ffffff;
    border-radius: 10px;
    margin: 0.7rem;
    justify-content: center;
    align-items: center;

    .logo {
        width: 50%;

        img {
            width: 30%;
            display: block;
            margin: 0 auto;
        }
    }

    .content {
        h1 {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        padding: 1rem;

        .logo {
            width: 100%;
        }

        .content {
            h1 {
                font-size: 1.5rem;
            }
        }
    }
`;

const Success = () => {
    return (
        <SuccesWapper>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="content">
                <h1>Thanks for signing up!🎉</h1>
                <p>Your account has been succefully created.</p>
            </div>
        </SuccesWapper>
    );
};

export default Success;
