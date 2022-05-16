import React from 'react';
import Signup from '../../components/Forms/Signup/Signup';
import { SignUpPageWapper } from '../../styles/SignUpPageWapper';

/* style-compontent */
import styled from 'styled-components';

const SiderBarWapper = styled.div`
    background-color: #276ef9;
    color: #fff;

    .content-wapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 2rem;
        margin: 0 auto;

        h2 {
            text-align: center;
            margin-bottom: 3rem;
            font-weight: 900;
        }

        p {
            line-height: 1.7;
        }
    }

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

const SignupView = () => {
    return (
        <SignUpPageWapper>
            <Signup />
            {/* SideBar */}
            <SiderBarWapper>
                <div className="content-wapper">
                    <h2>Dummy Heading</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </SiderBarWapper>
        </SignUpPageWapper>
    );
};

export default SignupView;
