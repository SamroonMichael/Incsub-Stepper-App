import styled from 'styled-components';
import BG from '../img/background.jpeg';

export const SignUpPageWapper = styled.div`
    display: grid;
    grid-template-columns: 6fr 6fr;
    height: 100%;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;
