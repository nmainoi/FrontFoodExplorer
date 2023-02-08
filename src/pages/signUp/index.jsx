
import { Container, Link } from "./styles";
import { LoginWrapper } from "../../components/loginComponents/loginWrapper";
import { InputComponent } from "../../components/global/input";
import { ButtonComponent } from "../../components/global/button/index";


 function SignUp() {

    return (
        <Container>
           
           <LoginWrapper title="Crie sua conta">
                <InputComponent label="Seu Nome" type="email" placeHolder="Exemplo: Maria da Silva" />
                <InputComponent label="Email" type="email" placeHolder="Exemplo: exemplo@exemplo.com.br" />
                <InputComponent label="Senha" type="password" placeHolder="No mínimo 6 caracteres" />
                <ButtonComponent text="Cria conta" />
                <Link href="/">Já tenho uma conta</Link>
            </LoginWrapper>
        </Container>
    );
};


export {
    SignUp
}