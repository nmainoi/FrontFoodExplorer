
import { Container } from "./styles";
import { LoginWrapper } from "../../components/loginComponents/loginWrapper";
import { InputComponent } from "../../components/global/input";
import { ButtonComponent } from "../../components/global/button/index";

function SignIn() {

    return (
        <Container>

            <LoginWrapper>
                <InputComponent label="Email" type="email" />
                <InputComponent label="Password" type="password" />
                <ButtonComponent text="Entrar" />

            </LoginWrapper>

        </Container>
    );
};


export {
    SignIn
}