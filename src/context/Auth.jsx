import { createContext, useContext, useEffect, useState } from "react";
import { api } from
    "../services/api";

export const AuthProvider = createContext({});


function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { token, user } = response.data;
            localStorage.setItem('@FoodExplorer:token', JSON.stringify(token))
            localStorage.setItem('@FoodExplorer:user', JSON.stringify(user))

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ token, user });
        }
        catch (err) {
            alert("Erro ao fazer login, tente novamente");
        }
    }

    function signOut() {
        localStorage.removeItem('@FoodExplorer:user');
        localStorage.removeItem('@FoodExplorer:token');
        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem('@FoodExplorer:token');
        const user = localStorage.getItem('@FoodExplorer:user');

        if (token && user) {
            setData({ token: JSON.parse(token), user: JSON.parse(user) });

            api.defaults.headers.authorization = `Bearer ${token}`
        }
    }
        , [])


    return (<AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
        {children}
    </AuthContext.Provider>)

}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }