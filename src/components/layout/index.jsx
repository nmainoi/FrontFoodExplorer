import { Container, Header } from "./styles";
import { Logo } from "../global/logo";
import { MenuIcon } from "../../assets/Icons";
import { useMediaQuery } from 'react-responsive';
import { ReceipsMobile } from "../global/receips";
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
    </Header>

function Layout({ children, ...props }) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })

    return (
        <Container>
            {isDesktop ? <HeaderDesktop/> : <HeaderMobile />}
            {children}
        </Container>
    );
}

export {
    Layout
}