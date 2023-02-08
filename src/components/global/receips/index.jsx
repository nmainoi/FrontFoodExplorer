import { Container,Button } from "./styles";

import { ReceipIcon } from "../../../assets/Icons";



function Receips({ receips, ...props }) {
    return (
        <Container>
            <ReceipIcon />
            <Button>{receips}</Button>
        </Container>
    );
    }



export {
    Receips
}