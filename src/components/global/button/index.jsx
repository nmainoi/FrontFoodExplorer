import { Button } from "./styles";


function ButtonComponent({ text,icon, ...props }) {
    return (
        <Button {...props}>
            {icon ?? <></>}
            {text}
        </Button>
    );
}


export {
    ButtonComponent
}