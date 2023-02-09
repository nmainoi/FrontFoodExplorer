import { Container } from "./styles"
import { Layout } from "../../components/layout"
import { Greeting } from "../../components/global/Greeting"
import {FoodSection} from "../../components/section/FoodSection"
function Home() {

    return(<Layout>
        <Container>
     
            <Greeting/>
            <FoodSection title={"Refeições"}/>
            <FoodSection title={"Sobremesas"}/>
            <FoodSection title={"Bebidas"}/>
    


        </Container>
    </Layout>)
}


export  {
    Home
}