import styled from "styled-components";

const Container = styled.main`
    font-family: 'Lato', sans-serif;
    max-width: 900px;
    padding: 25px;
    margin: 0 auto;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0;
    }
`;

export default Container;