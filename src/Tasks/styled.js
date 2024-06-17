import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 1s;

    ${({toggleDone}) => toggleDone && css`
        background: ${({ theme }) => theme.color.teal};

        &:hover {
        filter: brightness(120%);
        }

        &:active {
            filter: brightness(135%);
        }
    `}

    ${({remove}) => remove && css`
        cursor: pointer;
        background: ${({ theme }) => theme.color.red};
        padding: 6px;
        border: none;

        &:hover {
        filter: brightness(120%);
        }

        &:active {
            filter: brightness(135%);
        }
    `}
`;