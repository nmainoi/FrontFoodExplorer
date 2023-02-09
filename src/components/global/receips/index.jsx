import { Container, Button } from "./styles";

import { ReceipIcon } from "../../../assets/Icons";

import { useMediaQuery } from 'react-responsive';

import { IconButton } from "../IconButton";


import { ButtonComponent } from "../button";
function ReceipsMobile({ receips, ...props }) {
    return (
        <Container>
            <ReceipIcon />
            <Button>{receips}</Button>
        </Container>
    );
}

function ReceipsDesktop({ receips, ...props }) {


    const isDesktop = useMediaQuery({
        query: '(max-width: 1290px)'
    })


    return (
        <>

            {isDesktop ?
                <IconButton>
                    <Container>
                        <ReceipIcon />
                        <Button>{receips}</Button>
                    </Container>
                </IconButton>

                :
                <>
                    <ButtonComponent
                        icon={<ReceipIcon />}
                        text={`Pedidos (${receips})`}
                        style={{ maxWidth: '216px' }} />

                </>
            }
        </>
    );
}


export {
    ReceipsMobile,
    ReceipsDesktop
}