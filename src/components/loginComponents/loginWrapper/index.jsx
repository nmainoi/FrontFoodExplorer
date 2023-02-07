import { Wrapper, InputWrapper } from './styles'
import { Logo } from '../../global/logo';


function LoginWrapper({ children, ...props }) {

    return (
        <Wrapper>
            <Logo />
            <InputWrapper>
                {children}
            </InputWrapper>
        </Wrapper>
    );
}


export {
    LoginWrapper
}
