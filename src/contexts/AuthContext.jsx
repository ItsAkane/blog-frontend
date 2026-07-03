import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tokenSalvo = localStorage.getItem("token");
        const usuarioSalvo = localStorage.getItem("user");

        if (tokenSalvo && usuarioSalvo) {
            setUser(JSON.parse(usuarioSalvo));
        }
        setLoading(false);
    }, []);

    const login = (dadosDoBackend) => {
        localStorage.setItem("token", dadosDoBackend.token);
        localStorage.setItem("user", JSON.stringify(dadosDoBackend.user));
        
        setUser(dadosDoBackend.user);
    };


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (

        <AuthContext.Provider value={{ isLoggedIn: !!user, user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}