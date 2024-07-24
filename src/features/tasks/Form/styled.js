import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 13px;
    border: 2px solid ${({ theme }) => theme.color.lightGray};
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.teal};
    border: none;
    transition: 1s;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(135%);
    }
`;