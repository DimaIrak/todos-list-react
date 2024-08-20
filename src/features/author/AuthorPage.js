import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Span, Text } from "./styled";

function AuthorPage() {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Dmytro Artiuk"
                body={
                    <Text>
                        Jestem doświadczony kierowca🧑‍✈️ zawodowy z około 20-letnim stażem, który z pasją oddaje się różnym grom sportowym na świeżym powietrzu. Moje zaangażowanie w sport odzwierciedla zamiłowanie do aktywnego trybu życia i czerpania radości z rywalizacji na łonie natury. Obecnie rozwija swoje umiejętności w dziedzinie <Span>front-end developmentu</Span>, przygotowując się do stworzenia swojej pierwszej strony internetowej. To nowe wyzwanie pokazuje moją determinację do ciągłego rozwoju i zdobywania nowych kompetencji.
                    </Text>
                }
            />
        </Container>
    );
}

export default AuthorPage;