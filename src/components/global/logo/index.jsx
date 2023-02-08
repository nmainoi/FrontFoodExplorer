import {Container, Text} from './styles'
import { LogoExplorer } from '../../../assets/Icons';

function Logo({size, disabled}) {
    return (
        <Container>
          <LogoExplorer/>  <Text size={size}>food explorer</Text>
        </Container>
    );
}


export {
    Logo
}
