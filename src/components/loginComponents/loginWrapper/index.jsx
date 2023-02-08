import { Wrapper, InputWrapper,Title } from './styles'
import { Logo } from '../../global/logo';


function LoginWrapper({ children,title, ...props }) {

    return (
        <Wrapper>
            <Logo />
            <InputWrapper>
                <Title>{title}</Title>
                {children}
            </InputWrapper>
        </Wrapper>
    );
}


export {
    LoginWrapper
}
