import styled from "styled-components";

const Header = ({ title }) => (
  <header>
    <Title>{title}</Title>
  </header>
);

const Title = styled.h1`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      text-align: center;
    }
`;

export default Header;