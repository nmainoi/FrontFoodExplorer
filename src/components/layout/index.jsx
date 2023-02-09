import { Container, Header, Input, HeaderWrapper, Content, Footer } from "./styles";
import { Logo } from "../global/logo";
import { MenuIcon, SearchIcon, ReceipIcon, ArrowRigth } from "../../assets/Icons";
import { useMediaQuery } from 'react-responsive';
import { ReceipsMobile, ReceipsDesktop } from "../global/receips";
import { IconButton } from "../global/IconButton";



const HeaderMobile = () =>
    <Header>

        <IconButton>
            <MenuIcon />
        </IconButton>

        <Logo size={"21.16px"} />

        <IconButton>
            <ReceipsMobile receips={"0"} />
        </IconButton>

    </Header>

const HeaderDesktop = () =>
    <Header>
        <Logo size={"24.16px"} />

        <Input >
            <SearchIcon />
            <input placeholder={"Busque por pratos ou ingredientes"} />
        </Input>


        <ReceipsDesktop receips={"0"} />


        <IconButton>
            <ArrowRigth />
        </IconButton>

    </Header>







function Layout({ children, ...props }) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })

    return (
        <Container>
            <HeaderWrapper>
                {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
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