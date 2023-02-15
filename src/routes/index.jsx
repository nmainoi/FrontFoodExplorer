import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../context/Auth"; 
export function Routes() {

    const {user} = useAuth();
    return (
        <BrowserRouter>
            {user ? <UserRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    );
    }