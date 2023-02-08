
import { Container, Link } from "./styles";
import { LoginWrapper } from "../../components/loginComponents/loginWrapper";
import { InputComponent } from "../../components/global/input";
import { ButtonComponent } from "../../components/global/button/index";

function SignIn() {

    return (
        <Container>

            <LoginWrapper title="Faça login">
                <InputComponent label="Email" type="email" placeHolder="Exemplo: exemplo@exemplo.com.br" />
                <InputComponent label="Senha" type="password" placeHolder="No mínimo 6 caracteres" />
                <ButtonComponent text="Entrar" />
                <Link href="/register">Criar uma conta</Link>
            </LoginWrapper>

        </Container>
    );
};


export {
    SignIn
}