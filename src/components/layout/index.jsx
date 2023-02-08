import { Container, Header } from "./styles";
import { Logo } from "../global/logo";
import { MenuIcon } from "../../assets/Icons";
import { useMediaQuery } from 'react-responsive';
import { Receips } from "../global/receips";
import { IconButton } from "../global/IconButton";



const HeaderMobile = () =>
    <Header>
        <IconButton>
            <MenuIcon />
        </IconButton>
        <Logo size={"21.16px"} />
        <IconButton>
            <Receips receips={"0"} />
        </IconButton>
    </Header>



function Layout({ children, ...props }) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })

    return (
        <Container>
            {isDesktop ? <></> : <HeaderMobile />}
            {children}
        </Container>
    );
}

export {
    Layout
}