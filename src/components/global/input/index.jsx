import {Container,Input,Label} from './styles'


function InputComponent({label, ...props}) {
    return (
        <Container>
            <Label>{label}</Label>
            <Input {...props} />
        </Container>
    );
}

export {
    InputComponent
}