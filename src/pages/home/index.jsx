import { Container } from "./styles"
import { Layout } from "../../components/layout"
import { Greeting } from "../../components/global/Greeting"
function Home() {

    return(<Layout>
        <Container>
            <Greeting/>
        </Container>
    </Layout>)
}


export  {
    Home
}