import { Wrapper, Heder, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Heder>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Heder>
    <Body>
      {body}
    </Body>
  </Wrapper>
);

export default Section;