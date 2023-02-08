import { Container, Button } from "./styles";

import { ReceipIcon } from "../../../assets/Icons";

import { useMediaQuery } from 'react-responsive';



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
                <Container>
                    <ReceipIcon />
                    <Button>{receips}</Button>
                </Container>
                :
                <>
                    <ButtonComponent 
                    icon={<ReceipIcon />}
                    text={`Pedidos (${receips})`}  
                    style={{ maxWidth: '216px' }}/>

                </>
            }
        </>
    );
}


export {
    ReceipsMobile,
    ReceipsDesktop
}