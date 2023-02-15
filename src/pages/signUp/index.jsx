
import { Container, Link } from "./styles";
import { LoginWrapper } from "../../components/loginComponents/loginWrapper";
import { InputComponent } from "../../components/global/input";
import { ButtonComponent } from "../../components/global/button/index";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        api.post("/users/create", { name, email, password })
            .then((response) => {
                alert("Conta criada com sucesso");
                navigate("/")
            })
            .catch((err) => {
                // TODO: definir erros
                
                alert("Erro ao cria conta");
            })
    }

    return (
        <Container>

            <LoginWrapper title="Crie sua conta">
                <InputComponent
                    label="Seu Nome"
                    type="email"
                    placeHolder="Exemplo: Maria da Silva" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <InputComponent
                    label="Email"
                    type="email"
                    placeHolder="Exemplo: exemplo@exemplo.com.br" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <InputComponent
                    label="Senha"
                    type="password"
                    placeHolder="No mínimo 6 caracteres" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <ButtonComponent
                    text="Cria conta" 
                    onClick = {handleSignUp}
                    />
                <Link href="/">Já tenho uma conta</Link>
            </LoginWrapper>
        </Container>
    );
};


export {
    SignUp
}