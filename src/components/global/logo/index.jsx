import {Container, Text} from './styles'
import { LogoExplorer } from '../../../assets/Icons';

function Logo({size}) {
    return (
        <Container>
          <LogoExplorer/>  <Text size={size}>food explorer</Text>
        </Container>
    );
}


export {
    Logo
}
