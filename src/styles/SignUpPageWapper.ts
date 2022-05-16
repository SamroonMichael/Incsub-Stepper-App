import styled from 'styled-components';

export const SignUpPageWapper = styled.div`
    display: grid;
    grid-template-columns: 8fr 4fr;
    height: 100%;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;
