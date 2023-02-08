import { Container,Button } from "./styles";

import { ReceipIcon } from "../../../assets/Icons";



function ReceipsMobile({ receips, ...props }) {
    return (
        <Container>
            <ReceipIcon />
            <Button>{receips}</Button>
        </Container>
    );
    }



export {
    ReceipsMobile
}