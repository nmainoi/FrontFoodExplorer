import { Container, Header, Input, HeaderWrapper, Content, Footer } from "./styles";
import { Logo } from "../global/logo";
import { MenuIcon, SearchIcon, ReceipIcon, ArrowRigth } from "../../assets/Icons";
import { useMediaQuery } from 'react-responsive';
import { ReceipsMobile, ReceipsDesktop } from "../global/receips";
import { IconButton } from "../global/IconButton";
import {useAuth} from "../../context/Auth"


const HeaderMobile = ({logout}) =>
    <Header>

        <IconButton>
            <MenuIcon />
        </IconButton>

        <Logo size={"21.16px"} />

        <IconButton>
            <ReceipsMobile receips={"0"} />
        </IconButton>

    </Header>

const HeaderDesktop = ({logout}) =>
    <Header>
        <Logo size={"24.16px"} />

        <Input >
            <SearchIcon />
            <input placeholder={"Busque por pratos ou ingredientes"} />
        </Input>


        <ReceipsDesktop receips={"0"} />


        <IconButton onClick={logout}>
            <ArrowRigth />
        </IconButton>

    </Header>







function Layout({ children, ...props }) {
    const {signOut} =  useAuth();

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })

    return (
        <Container>
            <HeaderWrapper>
                {isDesktop ? <HeaderDesktop logout ={signOut} /> : <HeaderMobile logout ={signOut} />}
            </HeaderWrapper>
            <Content>
                {children}
                <Footer>
                    <Logo size={"15.16px"} />

                    <p>
                        © 2023 - Todos os direitos reservados.
                    </p>
                </Footer>
            </Content>


        </Container>
    );
}

export {
    Layout
}