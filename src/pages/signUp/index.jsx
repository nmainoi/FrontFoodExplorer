
import { Container, Link } from "./styles";
import { LoginWrapper } from "../../components/loginComponents/loginWrapper";
import { InputComponent } from "../../components/global/input";
import { ButtonComponent } from "../../components/global/button/index";


 function SignUp() {

    return (
        <Container>
           
           <LoginWrapper>
                <InputComponent label="Seu Nome" type="email" placeHolder="Exemplo: Maria da Silva" />
                <InputComponent label="Email" type="email" />
                <InputComponent label="Password" type="password" />
                <ButtonComponent text="Cria conta" />
                <Link href="/signUp">Já tenho uma conta</Link>
            </LoginWrapper>
        </Container>
    );
};


export {
    SignUp
}