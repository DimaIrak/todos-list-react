import styled from "styled-components";

export const Text = styled.p`
    text-indent: 20px;
    text-align: justify;
    padding: 5px;
    margin: 0;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.teal};
    font-style: italic;
`;