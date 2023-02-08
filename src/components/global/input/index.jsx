import {Container,Input,Label} from './styles'


function InputComponent({label, placeHolder, ...props}) {
    return (
        <Container>
            <Label>{label}</Label>
            <Input placeholder={placeHolder} {...props} />
        </Container>
    );
}

export {
    InputComponent
}