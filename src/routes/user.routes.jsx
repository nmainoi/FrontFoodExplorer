
import { Routes, Route} from 'react-router-dom';



export function UserRoutes(){
    return(
        <Routes>
           <Route path="/" element={<SignIn/>}/> 
           <Route path="/register" element={<SignUp/>}/> 
        </Routes>
    )
}