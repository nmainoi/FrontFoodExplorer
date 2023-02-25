import { Container,
     Header, 
     Input,
      HeaderWrapper,
       Content,
        Footer, 
        MobileDrawerBody,
         MobileText,
          MobileDrawerItens,
          MobileSection } from "./styles";
import { Logo } from "../global/logo";
import { MenuIcon, SearchIcon, CloseIcon, ArrowRigth } from "../../assets/Icons";
import { useMediaQuery } from 'react-responsive';
import { ReceipsMobile, ReceipsDesktop } from "../global/receips";
import { IconButton } from "../global/IconButton";
import { useAuth } from "../../context/Auth"
import { useState } from 'react'
import { useEffect } from "react";


function MobileDrawer({ setToggle,logout }) {
    return <MobileDrawerBody>

        <Header>
            <IconButton onClick={() => setToggle(false)}>
                <CloseIcon />
            </IconButton>
            <MobileText>
                <span>Menu</span>
            </MobileText>
        </Header>
        <MobileDrawerItens>
            <Input >
                <SearchIcon />
                <input placeholder={"Busque por pratos ou ingredientes"} />
            </Input>
            <MobileSection>
              <span onClick={() => logout()}>Sair</span>
            </MobileSection>
        </MobileDrawerItens>


    </MobileDrawerBody>
}

function HeaderMobile({ logout, toggle, setToggle }) {

    return (<Header>
        {toggle ? <MobileDrawer setToggle={setToggle} logout={logout} />
            : <></>}
        <IconButton onClick={() => setToggle(!toggle)}>
            <MenuIcon />
        </IconButton>

        <Logo size={"21.16px"} />

        <IconButton>
            <ReceipsMobile receips={"0"} />
        </IconButton>

    </Header>)
}


const HeaderDesktop = ({ logout }) =>
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
    const { signOut } = useAuth();

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <Container>

            <HeaderWrapper>
                {isDesktop ?
                    <HeaderDesktop logout={signOut} />
                    : <HeaderMobile logout={signOut} toggle={toggleMenu} setToggle={setToggleMenu} />}
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