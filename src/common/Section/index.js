import { Heder, Title, Body, StyledSection } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Heder>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Heder>
    <Body>
      {body}
    </Body>
  </StyledSection>
);

export default Section;