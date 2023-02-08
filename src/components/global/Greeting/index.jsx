import { Container, Content, TextWrapper } from "./styles";



function Greeting({ ...props }) {
    return <Container>
        <Content>

            <TextWrapper>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </TextWrapper>

        </Content>

    </Container>;
}


export {
    Greeting
}