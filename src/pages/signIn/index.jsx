
import { Container, Link } from "./styles";
import { LoginWrapper } from "../../components/loginComponents/loginWrapper";
import { InputComponent } from "../../components/global/input";
import { ButtonComponent } from "../../components/global/button/index";
import { useState } from "react";
import {useAuth} from "../../context/Auth"
function SignIn() {
    
    const {signIn,user} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    

    const HandleSignIn = async () => {
        await signIn({email, password});
    }


    return (
        <Container>

            <LoginWrapper title="Faça login">
                <InputComponent 
                label="Email" 
                type="email" 
                placeHolder="Exemplo: exemplo@exemplo.com.br" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                />
                <InputComponent 
                label="Senha" 
                type="password" p
                laceHolder="No mínimo 6 caracteres" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}

                />
                <ButtonComponent 
                text="Entrar" 
                onClick={HandleSignIn}

                />
                <Link href="/register">Criar uma conta</Link>
            </LoginWrapper>

        </Container>
    );
};


export {
    SignIn
}